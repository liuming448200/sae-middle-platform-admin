define('B:widget/pages/main/base/base', function(require, exports, module) {

  var content = require('B:widget/pages/main/base/content/content');
  var application = require('B:widget/pages/main/base/application/application');
  
  angular.module('eduApp.main.base', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $stateProvider
      .state('main.base.content', content)
      .state('main.base.application', application);
  }]);
  
  module.exports = {
    url: '/base',
    template: "<!--\r\n    @require \"B:widget/pages/main/base/base.css\"\r\n-->\r\n\r\n<div class=\"base-container\">\r\n  <div ui-view></div>\r\n</div>\r\n"
  };
  

});
