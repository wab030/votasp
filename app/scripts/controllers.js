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

	$scope.exibeMensagem = false;
	$scope.senha_confirma ='';
	$scope.senhasIdenticas = false;

	$scope.verificaSenha = function(){
		if($scope.cadastro.senha !== $scope.senha_confirma){
			$scope.senhasIdenticas = false;
		} else{
			$scope.senhasIdenticas = true;
		}
	};

	$scope.enviarCadastro = function(){
		// Validar campos
		$scope.form = false;
		if( $scope.senha == $scope.senha_confirma){
			usuariosFactory.postUsuario($scope.cadastro)
			.then(
				function(response){
					console.log(response);
					//console.log("Usuario Gravado com Sucesso");
					$scope.exibeMensagem = true;
					$scope.message = "Usuário gravado com sucesso !!!";
				},
				function(response){
					console.log(response);
					$scope.message = "Error: "+response.status + " " + response.statusText;
				}
			);
		
			$scope.cadastro = {
				nome: '',
				email: '',
				profissao: '',
				senha: '',
				candidato: ''
			};
			$scope.formularioCadastro.$setPristine(); //Seta o formulário para sua versão inicial sem dados
		} 
	};

	$scope.selecionaArquivo = function(){
		console.log("teste de carregamento de arquivo");
	};
}])
.controller('HomeController', ['$scope', function($scope){
	console.log("Passei pelo HomeController");
	$scope.a = 0;
}])
.controller('RemoveUsuarioController', ['$scope','$stateParams','usuariosFactory', function($scope, $stateParams, usuariosFactory){
	console.log('Passei pelo Remove Usuário Controller');
	var id = $stateParams.id;
	console.log(id);

	usuariosFactory.removeUsuario(id)
	.then(
		function(response){
			//console.log(response);
			//console.log("Usuario Gravado com Sucesso");
			$scope.exibeMensagem = true;
			$scope.message = "Usuário gravado com sucesso !!!";
		},
		function(response){
			$scope.message = "Error: "+response.status + " " + response.statusText;
		}
	);
}])
.controller('LoginController', ['$scope','$stateParams','$location','usuariosFactory', function($scope, $stateParams, $location, usuariosFactory){
	
	$scope.login = {
		email:'',
		senha:''
	}
	$scope.autorizado = false;

	$scope.entrar = function(){
		usuariosFactory.autenticarUsuario($scope.login)
		.then(
			function(response){
				$scope.autorizado = response.data.autorizado;
				console.log($scope.autorizado);
				if($scope.autorizado){
	       		$location.path("questoes/");
	       	} else{
	       		$location.path("/");
	       	}

			},
			function(response){
				$scope.message = "Error: "+response.status + " " + response.statusText;
			}
		);
	}
}])
.controller('QuestoesController', ['$scope', 'questoesFactory', function($scope, questoesFactory){
	console.log("Passei pelo questões controller");

	$scope.questoes = {};
	$scope.showQuestoes = true;
	$scope.message = "Carregando...";
	$scope.numQuestao = 1;

	questoesFactory.getQuestoes()
	.then(
		function(response){
			$scope.questoes = response.data;
			console.log($scope.questoes[0].questao);
			for(questao in $scope.questoes){
				console.log(questao.questao);
				console.log(questao);
			}
		},
		function(response){
			$scope.message = "Error: "+response.status + " " + response.statusText;
		}
	);

}])
;