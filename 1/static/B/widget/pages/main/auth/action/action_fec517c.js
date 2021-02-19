define('B:widget/pages/main/auth/action/action', function(require, exports, module) {

  require('B:widget/pages/main/auth/action/menuListService');
  
  var list = require('B:widget/pages/main/auth/action/list/list');
  var add = require('B:widget/pages/main/auth/action/add/add');
  var edit = require('B:widget/pages/main/auth/action/edit/edit');
  
  angular.module('eduApp.main.auth.action', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.when('/main/auth/action', '/main/auth/action/list');
  
    $stateProvider
      .state('main.auth.action.list', list)
      .state('main.auth.action.add', add)
      .state('main.auth.action.edit', edit);
  }]);
  
  module.exports = {
    url: '/action',
    template: "<!--\r\n    @require \"B:widget/pages/main/auth/action/action.css\"\r\n-->\r\n\r\n<div class=\"action-container\">\r\n  <div ui-view></div>\r\n</div>\r\n"
  };
  

});
