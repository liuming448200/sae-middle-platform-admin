define('B:widget/pages/main/story/story', function(require, exports, module) {

  require('B:widget/pages/main/story/storyService');
  
  var list = require('B:widget/pages/main/story/list/list');
  var add = require('B:widget/pages/main/story/add/add');
  var edit = require('B:widget/pages/main/story/edit/edit');
  var preview = require('B:widget/pages/main/story/preview/preview');
  
  angular.module('eduApp.main.story', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.when('/main/story', '/main/story/list');
  
    $stateProvider
      .state('main.story.list', list)
      .state('main.story.add', add)
      .state('main.story.edit', edit)
      .state('main.story.preview', preview);
  }]);
  
  module.exports = {
  	url: '/story',
  	template: "<!--\r\n    @require \"B:widget/pages/main/story/story.css\"\r\n-->\r\n\r\n<div class=\"story-container\">\r\n\t<div ui-view></div>\r\n</div>\r\n"
  };
  

});
