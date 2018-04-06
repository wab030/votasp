'use strict';

angular.module('votaspApp',[])
.controller('UsuariosController', ['$scope', function($scope){
	$scope.tab = 1;
	
	$scope.usuarios=[
			{
				nome:'Marcia Cristina Bizinotto',
				email:'marcia@gmail.com',
				image: 'images/marcia.png',
				profissao:'Professora da Universidade Federal de Uberlândia.',
				senha: '***',
				candidato: 1
			},
			{
				nome:'Alessandra',
				email:'ale@gmail.com',
				image: 'images/alessandra.jpg',
				profissao:'Professora municipal de Vinhedo.',
				senha: '***',
				candidato: 1
			},
			{
				nome:'Paula Lemos Real',
				email:'plr@gmail.com',
				image: 'images/paula.jpg',
				profissao:'Professora da Universidade Federal de Uberlândia.',
				senha: '***',
				candidato: 2
			},
			{
				nome:'Ernesta',
				email:'Ernesta@gmail.com',
				image: 'images/ernesta.jpg',
				profissao:'Professora da Universidade Federal de Uberlândia.',
				senha: '***',
				candidato: 3
			},
			{
				nome:'Violentina',
				email:'violentina@gmail.com',
				image: 'images/ernesta.jpg',
				profissao:'Professora da Universidade Federal de Uberlândia.',
				senha: '***',
				candidato: 4
			},
			{
				nome:'Denise',
				email:'denise.com',
				image: 'images/denise.jpg',
				profissao:'Professora Municipal de Campinas.',
				senha: '***',
				candidato: 3
			},
			{
				nome:'Luciana',
				email:'luciana@gmail.com',
				image: 'images/luciana.jpg',
				profissao:'System Engineer.',
				senha: '***',
				candidato: 3
			},
			{
				nome:'Luciana',
				email:'luciana@gmail.com',
				image: 'images/luciana.jpg',
				profissao:'System Engineer.',
				senha: '***',
				candidato: 3
			}

		];

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

.controller('CadastroController', ['$scope', function($scope){
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



;