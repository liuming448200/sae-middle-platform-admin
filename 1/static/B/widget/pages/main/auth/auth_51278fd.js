define('B:widget/pages/main/auth/auth', function(require, exports, module) {

  var user = require('B:widget/pages/main/auth/user/user');
  var usergroup = require('B:widget/pages/main/auth/usergroup/usergroup');
  var action = require('B:widget/pages/main/auth/action/action');
  var menu = require('B:widget/pages/main/auth/menu/menu');
  
  angular.module('eduApp.main.auth', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $stateProvider
      .state('main.auth.user', user)
      .state('main.auth.usergroup', usergroup)
      .state('main.auth.action', action)
      .state('main.auth.menu', menu);
  }]);
  
  module.exports = {
    url: '/auth',
    template: "<!--\r\n    @require \"B:widget/pages/main/auth/auth.css\"\r\n-->\r\n\r\n<div class=\"auth-container\">\r\n  <div ui-view></div>\r\n</div>\r\n"
  };
  

});
