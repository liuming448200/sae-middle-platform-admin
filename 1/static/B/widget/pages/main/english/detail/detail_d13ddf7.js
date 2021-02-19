define('B:widget/pages/main/english/detail/detail', function(require, exports, module) {

  require('B:widget/pages/main/english/detail/wordTypeService');
  require('B:widget/pages/main/english/detail/wordDetailService');
  
  var list = require('B:widget/pages/main/english/detail/list/list');
  var add = require('B:widget/pages/main/english/detail/add/add');
  var edit = require('B:widget/pages/main/english/detail/edit/edit');
  var preview = require('B:widget/pages/main/english/detail/preview/preview');
  
  angular.module('eduApp.main.english.detail', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.when('/main/english/detail', '/main/english/detail/list');
  
    $stateProvider
      .state('main.english.detail.list', list)
      .state('main.english.detail.add', add)
      .state('main.english.detail.edit', edit)
      .state('main.english.detail.preview', preview);
  }]);
  
  module.exports = {
  	url: '/detail',
  	template: "<!--\r\n    @require \"B:widget/pages/main/english/detail/detail.css\"\r\n-->\r\n\r\n<div class=\"detail-container\">\r\n\t<div ui-view></div>\r\n</div>\r\n"
  };
  

});
