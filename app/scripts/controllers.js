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
	}
])
.controller('UsuarioController',['$scope','$stateParams','usuariosFactory',function($scope, $stateParams, usuariosFactory){

		$scope.usuario = {};
		$scope.showUser = true;
		console.log("passei pelo usuarioController");
		$scope.message = "Carregando...";
		//A variável $routeParams contem a string que foi passada na URL. 
		var id = $stateParams.id;

		//$scope.usuario = usuariosFactory.getUsuarios().get({id:id});
		//console.log($scope.usuario);

		usuariosFactory.getUsuario(id)
		.then(
			function(response){
				$scope.showUser = true;
				$scope.usuario = response.data[0];
			},
			function(response){
				$scope.message = "Error: "+response.status + " " + response.statusText;
			}
		);

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
	$scope.cadastro = {
		nome: '',
		email: '',
		profissao: '',
		foto: '',
		senha: '',
		candidato: '',
	};

	$scope.enviarCadastro = function(){
		// Validar campos

		console.log($scope.cadastro);

		//usuariosFactory.getUsuarios().save($scope.cadastro);

		usuariosFactory.postUsuario($scope.cadastro)
		.then(
			function(response){
				console.log(response);
				console.log("Usuario Gravado com Sucesso");
				//$scope.usuario = response.data[0];
			},
			function(response){
				$scope.message = "Error: "+response.status + " " + response.statusText;
			}
		);

		//$scope.usuario = usuariosFactory.getUsuarios().get({id:id});
		
		/*$scope.cadastro = {
			nome: '',
			email: '',
			profissao: '',
			senha: '',
			candidato: ''
		};*/
		//$scope.formularioCadastro.$setPristine(); //Seta o formulário para sua versão inicial sem dados


	};

	$scope.selecionaArquivo = function(){
		console.log("teste de carregamento de arquivo");
	};


}])

.controller('HomeController', ['$scope', function($scope){
	console.log("Passei pelo HomeController");
	$scope.a = 0;
}])

;