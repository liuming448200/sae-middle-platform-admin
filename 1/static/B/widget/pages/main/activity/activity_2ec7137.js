define('B:widget/pages/main/activity/activity', function(require, exports, module) {

  require('B:widget/pages/main/activity/activityService');
  
  var list = require('B:widget/pages/main/activity/list/list');
  var add = require('B:widget/pages/main/activity/add/add');
  var edit = require('B:widget/pages/main/activity/edit/edit');
  var preview = require('B:widget/pages/main/activity/preview/preview');
  
  angular.module('eduApp.main.activity', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.when('/main/activity', '/main/activity/list');
  
    $stateProvider
      .state('main.activity.list', list)
      .state('main.activity.add', add)
      .state('main.activity.edit', edit)
      .state('main.activity.preview', preview);
  }]);
  
  module.exports = {
  	url: '/activity',
  	template: "<!--\r\n    @require \"B:widget/pages/main/activity/activity.css\"\r\n-->\r\n\r\n<div class=\"activity-container\">\r\n\t<div ui-view></div>\r\n</div>\r\n"
  };
  

});
