'use strict';

module.exports = function(grunt){

	//Aponta quanto tempo levou cada tarefa de build. Ajuda otimizar build time. 
	require('time-grunt')(grunt);
	//Automaticamente carrega required Grunt tasks.
	require('jit-grunt')(grunt, {
		useminPrepare: 'grunt-usemin'
	});

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: {
				src: [
				'Gruntfile.js',
				'app/scripts/{,*/}*.js'
				]
			}
		},
		copy: {
			dist: {
				cwd: 'app',
				src: [ '**','!styles/**/*.css','!scripts/**/*.js' ],
				dest: 'dist',
				expand: true
			},	
			fonts: {
				files: [
					{ //for bootstrap fonts
						expand: true,
						dot: true,
						cwd: 'bower_components/bootstrap/dist',
						src: ['fonts/*.*'],
						dest: 'dist'
					}, {//for font-awesome
						expand: true,
						dot: true,
						cwd: 'bower_components/font-awesome',
						src: ['fonts/*.*'],
						dest: 'dist'
					}
				]
			}
		},
		clean: {
			build: {
				src: [ 'dist/']
			}
		},
 		useminPrepare: {
			html: 'app/index.html',
  			options: {
    			dest: 'dist'
  			}
		},
		concat: {
  			options: {
    			separator: ';'
  			},	// dist configuration is provided by useminPrepare
  			dist: {}
		},
		uglify: { // dist configuration is provided by useminPrepare
  			dist: {}
		},
		cssmin: {
  			dist: {}
		},
		filerev: {
  			options: {
    			encoding: 'utf8',
    			algorithm: 'md5',
    			length: 20
  			}, 
  			release: { // filerev:release hashes(md5) all assets (images, js and css ) in dist directory
    			files: [{
      			src: [
        				'dist/scripts/*.js',
        				'dist/styles/*.css',
      			]
    			}]
  			}
		},
		 // Usemin
		// Replaces all assets with their revved version in html and css files.
		// options.assetDirs contains the directories for finding the assets
		// according to their relative paths
		usemin: {
  			html: ['dist/*.html'],
  			css: ['dist/styles/*.css'],
  			options: {
    			assetsDirs: ['dist', 'dist/styles']
  			}
  		},
		watch: { //verificar qq alteração nos arq configurados.
			copy: {
				files: [ 'app/**', '!app/**/*.css', '!app/**/*.js'],
		    	tasks: [ 'build' ]
		  	},
			scripts: {
				files: ['app/scripts/app.js'],
		 		tasks:[ 'build']
			},
			styles: {
				files: ['app/styles/votasp.css'],
    			tasks:['build']
  			},
  			livereload: {
    			options: {
      			livereload: '<%= connect.options.livereload %>'
    			},
    			files: [
      			'app/{,*/}*.html',
      			'.tmp/styles/{,*/}*.css',
      			'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    			]
  			}
		},
		connect: {
			options: {
    			port: 9000,
    			// Change this to '0.0.0.0' to access the server from outside.
    			hostname: 'localhost',
    			livereload: 35729
  			},
  			dist: {
    			options: {
      			open: true,
      			base:{
        				path: 'dist',
        				options: {
          				index: 'index.html',
          				maxAge: 300000
        				}	
      			}
    			}
  			}
		}
	});

	grunt.registerTask('build', [
		'clean',
		'jshint',
		'useminPrepare',
		'concat',
		'cssmin',
		'uglify',
		'copy',
		'filerev',
		'usemin'
	]);

	grunt.registerTask('serve',['build', 'connect:dist', 'watch']);
	grunt.registerTask('default', ['build']);
};