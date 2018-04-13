'use strict';

angular.module('votaspApp')
.controller('UsuariosController',['$scope','usuariosFactory',function($scope, usuariosFactory){
	$scope.tab = 1;
	$scope.usuarios = {};
	$scope.showUsers = false;
	$scope.message = "Carregando...";

	usuariosFactory.getUsuarios()
	.then(
		function(response){ //sucess function
			$scope.showUsers = true;
			$scope.usuarios = response.data;
		},
		function(response){ //failure function
			console.log(response.data);
			$scope.message = "Error: "+response.status + " " + response.statusText;
		}
	);
	
	$scope.select = function(setTab){
		$scope.tab = setTab;
		console.log("Tab active:", $scope.tab);
	};

	$scope.isSelected = function(checkTab){

		var sta = ($scope.tab === checkTab);
		console.log(sta);

		return ($scope.tab === checkTab);
	};
}])
.controller('UsuarioController',['$scope','$stateParams','usuariosFactory',function($scope, $stateParams, usuariosFactory){
	console.log("passei pelo ....UsuarioController");

	$scope.usuario = {};
	$scope.showUser = false;
	$scope.message = "Carregando...";
	//A variável $routeParams contem a string que foi passada na URL. 
	var id = parseInt($stateParams.id, 10);
	usuariosFactory.getUsuario(id)
	.then(
		function(response){
			$scope.showUser = true;
			$scope.usuario = response.data;
		},
		function(response){
			$scope.message = "Error: "+response.status + " " + response.statusText;
		}
	);

}])
.controller('CadastroController', ['$scope', function($scope){
	console.log("Passei pelo CadastroController");
	$scope.cadastro = {
		nome: '',
		email: '',
		profissao: '',
		senha: '',
		candidato: ''
	};

	$scope.enviarCadastro = function(){
		// Validar campos
		$scope.cadastro = {
			nome: '',
			email: '',
			profissao: '',
			senha: '',
			candidato: ''
		};
		$scope.formularioCadastro.$setPristine(); //Seta o formulário para sua versão inicial sem dados


	};
}])

.controller('HomeController', ['$scope', function($scope){
	console.log("Passei pelo HomeController");
	$scope.a = 0;
}])

;