define('B:widget/pages/main/english/english', function(require, exports, module) {

  var type = require('B:widget/pages/main/english/type/type');
  var detail = require('B:widget/pages/main/english/detail/detail');
  
  angular.module('eduApp.main.english', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $stateProvider
      .state('main.english.type', type)
      .state('main.english.detail', detail);
  }]);
  
  module.exports = {
  	url: '/english',
  	template: "<!--\r\n    @require \"B:widget/pages/main/english/english.css\"\r\n-->\r\n\r\n<div class=\"english-container\">\r\n\t<div ui-view></div>\r\n</div>\r\n"
  };
  

});
