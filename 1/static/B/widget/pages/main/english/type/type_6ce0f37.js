define('B:widget/pages/main/english/type/type', function(require, exports, module) {

  var list = require('B:widget/pages/main/english/type/list/list');
  var add = require('B:widget/pages/main/english/type/add/add');
  var edit = require('B:widget/pages/main/english/type/edit/edit');
  
  angular.module('eduApp.main.english.type', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.when('/main/english/type', '/main/english/type/list');
  
    $stateProvider
      .state('main.english.type.list', list)
      .state('main.english.type.add', add)
      .state('main.english.type.edit', edit);
  }]);
  
  module.exports = {
  	url: '/type',
  	template: "<!--\r\n    @require \"B:widget/pages/main/english/type/type.css\"\r\n-->\r\n\r\n<div class=\"type-container\">\r\n\t<div ui-view></div>\r\n</div>\r\n"
  };
  

});
