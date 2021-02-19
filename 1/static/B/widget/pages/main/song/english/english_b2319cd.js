define('B:widget/pages/main/song/english/english', function(require, exports, module) {

  var list = require('B:widget/pages/main/song/english/list/list');
  var add = require('B:widget/pages/main/song/english/add/add');
  var edit = require('B:widget/pages/main/song/english/edit/edit');
  var preview = require('B:widget/pages/main/song/english/preview/preview');
  
  angular.module('eduApp.main.song.english', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.when('/main/song/english', '/main/song/english/list');
  
    $stateProvider
      .state('main.song.english.list', list)
      .state('main.song.english.add', add)
      .state('main.song.english.edit', edit)
      .state('main.song.english.preview', preview);
  }]);
  
  module.exports = {
    url: '/english',
    template: "<!--\r\n    @require \"B:widget/pages/main/song/english/english.css\"\r\n-->\r\n\r\n<div class=\"english-container\">\r\n  <div ui-view></div>\r\n</div>\r\n"
  };
  

});
