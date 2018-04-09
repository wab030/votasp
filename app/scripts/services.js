'use strict';

angular.module('votaspApp')
.factory('usuariosFactory', function(){

	var usuariosFac = {};

	var usuarios=[
			{
				_id: 0,
				nome:'Marcia Cristina Bizinotto',
				email:'marcia@gmail.com',
				image: 'images/marcia.png',
				profissao:'Professora da Universidade Federal de Uberlândia.',
				senha: '***',
				candidato: 1
			},
			{
				_id: 1,
				nome:'Alessandra',
				email:'ale@gmail.com',
				image: 'images/alessandra.jpg',
				profissao:'Professora municipal de Vinhedo.',
				senha: '***',
				candidato: 1
			},
			{
				_id: 2,
				nome:'Paula Lemos Real',
				email:'plr@gmail.com',
				image: 'images/paula.jpg',
				profissao:'Enfermeira da prefeitura de Campinas.',
				senha: '***',
				candidato: 2
			},
			{
				_id: 3,
				nome:'Ernesta',
				email:'Ernesta@gmail.com',
				image: 'images/ernesta.jpg',
				profissao:'Professora da Universidade Federal de Uberlândia.',
				senha: '***',
				candidato: 3
			},
			{
				_id: 4,
				nome:'Violentina',
				email:'violentina@gmail.com',
				image: 'images/ernesta.jpg',
				profissao:'Professora da Universidade Federal de Uberlândia.',
				senha: '***',
				candidato: 4
			},
			{
				_id: 5,
				nome:'Denise',
				email:'denise.com',
				image: 'images/denise.jpg',
				profissao:'Professora Municipal de Campinas.',
				senha: '***',
				candidato: 3
			},
			{
				_id: 6,
				nome:'Luciana',
				email:'luciana@gmail.com',
				image: 'images/luciana.jpg',
				profissao:'System Engineer.',
				senha: '***',
				candidato: 3
			},
			{
				_id: 7,
				nome:'Luciana',
				email:'luciana@gmail.com',
				image: 'images/luciana.jpg',
				profissao:'System Engineer.',
				senha: '***',
				candidato: 3
			}
		];

		usuariosFac.getUsuarios = function(){
			return usuarios;
		};

		usuariosFac.getUsuario = function(indice){
			return usuarios[indice];
		};

		return usuariosFac;

});