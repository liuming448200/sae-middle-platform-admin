define('B:widget/pages/main/auth/usergroup/usergroup', function(require, exports, module) {

  require('B:widget/pages/main/auth/usergroup/actionListService');
  require('B:widget/pages/main/auth/usergroup/userListService');
  
  var list = require('B:widget/pages/main/auth/usergroup/list/list');
  var add = require('B:widget/pages/main/auth/usergroup/add/add');
  var edit = require('B:widget/pages/main/auth/usergroup/edit/edit');
  
  angular.module('eduApp.main.auth.usergroup', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.when('/main/auth/usergroup', '/main/auth/usergroup/list');
  
    $stateProvider
      .state('main.auth.usergroup.list', list)
      .state('main.auth.usergroup.add', add)
      .state('main.auth.usergroup.edit', edit);
  }]);
  
  module.exports = {
    url: '/usergroup',
    template: "<!--\r\n    @require \"B:widget/pages/main/auth/usergroup/usergroup.css\"\r\n-->\r\n\r\n<div class=\"usergroup-container\">\r\n  <div ui-view></div>\r\n</div>\r\n"
  };
  

});
