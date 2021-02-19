define('B:widget/pages/main/course/course', function(require, exports, module) {

  require('B:widget/pages/main/course/courseService');
  
  var list = require('B:widget/pages/main/course/list/list');
  var add = require('B:widget/pages/main/course/add/add');
  var edit = require('B:widget/pages/main/course/edit/edit');
  var preview = require('B:widget/pages/main/course/preview/preview');
  
  angular.module('eduApp.main.course', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
  	$urlRouterProvider.when('/main/course', '/main/course/list');
  	
    $stateProvider
      .state('main.course.list', list)
      .state('main.course.add', add)
      .state('main.course.edit', edit)
      .state('main.course.preview', preview);
  }]);
  
  module.exports = {
    url: '/course',
    template: "<!--\r\n    @require \"B:widget/pages/main/course/course.css\"\r\n-->\r\n\r\n<div class=\"course-container\">\r\n  <div ui-view></div>\r\n</div>\r\n"
  };
  

});
