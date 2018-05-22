// app/auth/auth.service.js

(function () {

  'use strict';

  angular
    .module('votaspApp')
    .service('authService', authService);

  authService.$inject = ['$state', 'angularAuth0', '$timeout'];

  function authService($state, angularAuth0, $timeout) {

    function login() {
      angularAuth0.authorize();
    }

    return {
      login: login
    }
  }
})();