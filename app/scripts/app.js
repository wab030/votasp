'use strict';

angular.module('votaspApp',['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('app', {
			url:'/',
			views:{
				'header':{
					templateUrl:'views/header.html'
				},
				'content':{
					templateUrl:'views/home.html'
				},
				'footer':{
					templateUrl:'views/footer.html'
				}
			}
		})
		.state('app.projeto', {
			url:'projeto',
			views:{
				'content@':{
					templateUrl:'views/projeto.html'
				}
			}
		})
		.state('app.contato', {
			url:'contato',
			views:{
				'content@':{
					templateUrl:'views/contato.html'
				}
			}
		})
		.state('app.cadastro', {
			url:'cadastro',
			views:{
				'content@':{
					templateUrl:'views/cadastro.html'
				}
			}
		})
		.state('app.usuarios', {
			url:'usuarios',
			views:{
				'content@':{
					templateUrl:'views/usuarios.html'
				}
			}
		})
  		.state('app.usuario', {
      	url: 'usuarios/:id',
         views: {
         	'content@': {
         		templateUrl : 'views/usuario.html',
         		controller  : 'UsuarioController'
         	}
         }
      });

		$urlRouterProvider.otherwise('/');
})
;