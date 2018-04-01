'use strict';

angular.module('votaspApp',[])

.controller('usuariosController', function(){
	this.tab = 1;
	
	var usuarios=[
			{
				nome:'Marcia Cristina Bizinotto',
				email:'marcia@gmail.com',
				image: 'img/marcia.png',
				description:'Professora da Universidade Federal de Uberlândia.',
				senha: '***',
				candidato: 1
			},
			{
				nome:'Alessandra',
				email:'ale@gmail.com',
				image: 'img/alessandra.jpg',
				description:'Professora municipal de Vinhedo.',
				senha: '***',
				candidato: 1
			},
			{
				nome:'Paula Lemos Real',
				email:'plr@gmail.com',
				image: 'img/paula.jpg',
				description:'Professora da Universidade Federal de Uberlândia.',
				senha: '***',
				candidato: 2
			},
			{
				nome:'Ernesta',
				email:'Ernesta@gmail.com',
				image: 'img/ernesta.jpg',
				description:'Professora da Universidade Federal de Uberlândia.',
				senha: '***',
				candidato: 3
			},
			{
				nome:'Violentina',
				email:'violentina@gmail.com',
				image: 'img/marcia.png',
				description:'Professora da Universidade Federal de Uberlândia.',
				senha: '***',
				candidato: 4
			},
		];

		this.usuarios = usuarios;

		this.select = function(setTab){
			this.tab = setTab;
			console.log("Tab active:", this.tab);
		};

		this.isSelected = function(checkTab){

			var sta = (this.tab === checkTab);
			console.log(sta);

			return (this.tab === checkTab);
		};
});