'use strict';

angular.module('votaspApp')
.constant("baseURL", "http://localhost:4000/")
.factory('usuariosFactory', ['$http', 'baseURL', function($http, baseURL){

	var usuariosFac = {};

	usuariosFac.getUsuarios = function(){
		return $http.get(baseURL+"usuarios");
	};

	usuariosFac.getUsuario = function(indice){
		return $http.get(baseURL+"usuarios/"+indice);

		//usuarios[indice];
	};

	return usuariosFac;

}]);