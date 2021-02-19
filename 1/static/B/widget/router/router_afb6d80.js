define('B:widget/router/router', function(require, exports, module) {

  var login = require('B:widget/pages/login/login');
  var reset = require('B:widget/pages/reset/reset');
  var main = require('B:widget/pages/main/main');
  
  angular.module('eduApp').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
  	// For unmatched routes
    $urlRouterProvider.otherwise('/');
  
    // Application routes
    $stateProvider
      .state('login', login)
      .state('reset', reset)
      .state('main', main);
  }]);
  

});
