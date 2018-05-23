'use strict';

angular.module('votaspApp',['ui.router', 'ngResource', 'auth0.auth0'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider, angularAuth0Provider ){
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
		.state('app.callback', {
        url: 'callback',
        views:{
				'content@':{
					templateUrl:'views/projeto.html'
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
      	url: 'usuario/:id',
         views: {
         	'content@': {
         		templateUrl : 'views/usuario.html',
         		controller  : 'UsuarioController'
         	}
         }
      })
      .state('app.removeUsuario', {
      	url: 'usuario/:id',
         views: {
         	'content@': {
         		templateUrl : 'views/usuario.html',
         		controller  : 'RemoveUsuarioController'
         	}
         }
      })
      .state('app.questoes', {
      	url: 'questoes/',
         views: {
         	'content@': {
         		templateUrl : 'views/questoes.html',
         		controller : 'QuestoesController'
         	}
         }
      });

      $urlRouterProvider.otherwise('/');

      angularAuth0Provider.init({ //auth0
      	clientID: 'k_f7zd2It4nV1hDVtc2UpXbWxhjrsAZc',
      	domain: 'bordignon.auth0.com',
      	responseType: 'token id_token',
      	audience: 'https://bordignon.auth0.com/userinfo',
      	redirectUri: 'http://localhost:3000/#/questoes/',
      	scope: 'openid'
      });

      $locationProvider.hashPrefix(''); //Auth0
      //$locationProvider.html5Mode(true); //Auth0

}); 