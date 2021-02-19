define('B:widget/pages/main/song/song', function(require, exports, module) {

  require('B:widget/pages/main/song/songService');
  
  var chinese = require('B:widget/pages/main/song/chinese/chinese');
  var english = require('B:widget/pages/main/song/english/english');
  
  angular.module('eduApp.main.song', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $stateProvider
      .state('main.song.chinese', chinese)
      .state('main.song.english', english);
  }]);
  
  module.exports = {
  	url: '/song',
  	template: "<!--\r\n    @require \"B:widget/pages/main/song/song.css\"\r\n-->\r\n\r\n<div class=\"song-container\">\r\n\t<div ui-view></div>\r\n</div>\r\n"
  };
  

});
