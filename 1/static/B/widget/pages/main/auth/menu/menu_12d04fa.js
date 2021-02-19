define('B:widget/pages/main/auth/menu/menu', function(require, exports, module) {

  require('B:widget/pages/main/auth/menu/contentTypeService');
  
  var list = require('B:widget/pages/main/auth/menu/list/list');
  var add = require('B:widget/pages/main/auth/menu/add/add');
  var edit = require('B:widget/pages/main/auth/menu/edit/edit');
  
  angular.module('eduApp.main.auth.menu', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.when('/main/auth/menu', '/main/auth/menu/list');
  
    $stateProvider
      .state('main.auth.menu.list', list)
      .state('main.auth.menu.add', add)
      .state('main.auth.menu.edit', edit);
  }]);
  
  module.exports = {
    url: '/menu',
    template: "<!--\r\n    @require \"B:widget/pages/main/auth/menu/menu.css\"\r\n-->\r\n\r\n<div class=\"menu-container\">\r\n  <div ui-view></div>\r\n</div>\r\n"
  };
  

});
