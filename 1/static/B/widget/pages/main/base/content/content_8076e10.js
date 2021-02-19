define('B:widget/pages/main/base/content/content', function(require, exports, module) {

  var list = require('B:widget/pages/main/base/content/list/list');
  var add = require('B:widget/pages/main/base/content/add/add');
  var edit = require('B:widget/pages/main/base/content/edit/edit');
  
  angular.module('eduApp.main.base.content', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.when('/main/base/content', '/main/base/content/list');
  
    $stateProvider
      .state('main.base.content.list', list)
      .state('main.base.content.add', add)
      .state('main.base.content.edit', edit);
  }]);
  
  module.exports = {
    url: '/content',
    template: "<!--\r\n    @require \"B:widget/pages/main/base/content/content.css\"\r\n-->\r\n\r\n<div class=\"content-container\">\r\n  <div ui-view></div>\r\n</div>\r\n"
  };
  

});
