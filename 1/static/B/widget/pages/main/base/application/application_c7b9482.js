define('B:widget/pages/main/base/application/application', function(require, exports, module) {

  var list = require('B:widget/pages/main/base/application/list/list');
  
  angular.module('eduApp.main.base.application', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.when('/main/base/application', '/main/base/application/list');
  
    $stateProvider
      .state('main.base.application.list', list);
  }]);
  
  module.exports = {
    url: '/application',
    template: "<!--\r\n    @require \"B:widget/pages/main/base/application/application.css\"\r\n-->\r\n\r\n<div class=\"application-container\">\r\n  <div ui-view></div>\r\n</div>\r\n"
  };
  

});
