'use strict';

angular.module('votaspApp')
.controller('UsuariosController',['$scope','usuariosFactory',function($scope, usuariosFactory){
	$scope.tab = 1;

	$scope.usuarios = usuariosFactory.getUsuarios();
	
	console.log($scope.usuarios);

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
.controller('UsuarioController',['$scope','$routeParams','usuariosFactory',function($scope, $routeParams, usuariosFactory){
	console.log("passei pelo ....UsuarioController");


	//A variável $routeParams contem a string que foi passada na URL. 
	_id = parseInt($routeParams.id, 10);
	$scope.usuario = usuariosFactory.getUsuario(_id);

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
}])

;