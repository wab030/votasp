'use strict';


angular.module('votaspApp',['ngRoute'])

.config(function($routeProvider) {

	$routeProvider
	.when('/home', {
		templateUrl : 'home.html',
		controller : 'HomeController'
	})
	.when('/contato', {
		templateUrl : 'contato.html', 
		controller : 'contatoController'
	})
	.when('/usuarios',{
		templateUrl : 'usuarios.html',
		controller : 'UsuariosController'
	})
	.when('/usuarios/:id',{
		templateUrl : 'usuario.html',
		controller : 'UsuarioController'
	})
	.when('/projeto',{
		templateUrl : 'projeto.html',
		controller : 'ProjetoController'
	})
	.when('/cadastro',{
		templateUrl : 'cadastro.html',
		controller : 'CadastroController'
	})
	.when('/entrar', {
		templateUrl : 'entrar.html',
		controller : 'EntrarController'
	})
	.otherwise('/home');
})

;