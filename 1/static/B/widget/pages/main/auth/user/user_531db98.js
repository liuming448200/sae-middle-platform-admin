define('B:widget/pages/main/auth/user/user', function(require, exports, module) {

  require('B:widget/pages/main/auth/user/usergroupListService');
  
  var list = require('B:widget/pages/main/auth/user/list/list');
  var add = require('B:widget/pages/main/auth/user/add/add');
  var edit = require('B:widget/pages/main/auth/user/edit/edit');
  
  angular.module('eduApp.main.auth.user', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.when('/main/auth/user', '/main/auth/user/list');
  
    $stateProvider
      .state('main.auth.user.list', list)
      .state('main.auth.user.add', add)
      .state('main.auth.user.edit', edit);
  }]);
  
  module.exports = {
    url: '/user',
    template: "<!--\r\n    @require \"B:widget/pages/main/auth/user/user.css\"\r\n-->\r\n\r\n<div class=\"user-container\">\r\n  <div ui-view></div>\r\n</div>\r\n"
  };
  

});
