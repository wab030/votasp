'use strict';

angular.module('votaspApp')
.controller('UsuariosController',['$scope','usuariosFactory',function($scope, usuariosFactory){
	$scope.tab = 1;
	$scope.usuarios = {};
	$scope.showUsers = true;
	$scope.message = "Carregando...";

	$scope.usuarios = usuariosFactory.getUsuarios().query();
	
	$scope.select = function(setTab){
		$scope.tab = setTab;
	};

	$scope.isSelected = function(checkTab){

		return ($scope.tab === checkTab);
	};
}])
.controller('UsuarioController',['$scope','$stateParams','usuariosFactory',function($scope, $stateParams, usuariosFactory){
	console.log("passei pelo ....UsuarioController");

	//$scope.usuario = {};
	$scope.showUser = true;
	$scope.message = "Carregando...";
	//A variável $routeParams contem a string que foi passada na URL. 
	var id = parseInt($stateParams.id, 10);

	$scope.usuario = usuariosFactory.getUsuarios().get({id:id});

	/* com a utilização do resurce do Angular não preciso do método abaixo.
	usuariosFactory.getUsuario(id)
	.then(
		function(response){
			$scope.showUser = true;
			$scope.usuario = response.data;
		},
		function(response){
			$scope.message = "Error: "+response.status + " " + response.statusText;
		}
	);*/

}])
.controller('CadastroController', ['$scope', 'usuariosFactory', function($scope, usuariosFactory){
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

		console.log($scope.cadastro);
		usuariosFactory.getUsuarios().save({nome:'Saimon'});
		var id = 1;

		//$scope.usuario = usuariosFactory.getUsuarios().get({id:id});
		
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