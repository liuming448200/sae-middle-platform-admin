define('B:widget/pages/main/song/chinese/chinese', function(require, exports, module) {

  var list = require('B:widget/pages/main/song/chinese/list/list');
  var add = require('B:widget/pages/main/song/chinese/add/add');
  var edit = require('B:widget/pages/main/song/chinese/edit/edit');
  var preview = require('B:widget/pages/main/song/chinese/preview/preview');
  
  angular.module('eduApp.main.song.chinese', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.when('/main/song/chinese', '/main/song/chinese/list');
  
    $stateProvider
      .state('main.song.chinese.list', list)
      .state('main.song.chinese.add', add)
      .state('main.song.chinese.edit', edit)
      .state('main.song.chinese.preview', preview);
  }]);
  
  module.exports = {
    url: '/chinese',
    template: "<!--\r\n    @require \"B:widget/pages/main/song/chinese/chinese.css\"\r\n-->\r\n\r\n<div class=\"chinese-container\">\r\n  <div ui-view></div>\r\n</div>\r\n"
  };
  

});
