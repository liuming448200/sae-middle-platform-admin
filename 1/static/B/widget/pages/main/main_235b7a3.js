define('B:widget/pages/main/main', function(require, exports, module) {

  var dashboard = require('B:widget/pages/main/dashboard/dashboard');
  var story = require('B:widget/pages/main/story/story');
  var english = require('B:widget/pages/main/english/english');
  var song = require('B:widget/pages/main/song/song');
  var auth = require('B:widget/pages/main/auth/auth');
  var base = require('B:widget/pages/main/base/base');
  var course = require('B:widget/pages/main/course/course');
  var activity = require('B:widget/pages/main/activity/activity');
  
  angular.module('eduApp.main', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.when('/main', '/main/');
  
    $stateProvider
      .state('main.index', dashboard)
      .state('main.story', story)
      .state('main.english', english)
      .state('main.song', song)
      .state('main.auth', auth)
      .state('main.base', base)
      .state('main.course', course)
      .state('main.activity', activity);
  }]);
  
  module.exports = {
  	url: '/main',
  	template: "<!--\r\n    @require \"B:widget/pages/main/main.css\"\r\n-->\r\n\r\n<div class=\"main-container\">\r\n\t<div id=\"page-wrapper\" ng-class=\"{'open': toggle}\" ng-cloak>\r\n    <!-- Sidebar -->\r\n    <!--\r\n  @require \"B:widget/partial/sidebar/sidebar.less\"\r\n-->\r\n\r\n<div id=\"sidebar-wrapper\">\r\n  <ul class=\"sidebar\" style=\"padding-bottom:40px;\">\r\n    <li class=\"sidebar-main\">\r\n      <a ng-click=\"toggleSidebar()\">\r\n        方向教育后台\r\n        <span class=\"menu-icon glyphicon glyphicon-transfer\"></span>\r\n      </a>\r\n    </li>\r\n    <li class=\"sidebar-title\"><span>导航</span></li>\r\n    <li class=\"sidebar-list\" ui-sref-active=\"active\">\r\n      <a href=\"javascript:;\" ui-sref=\"main.index\">总览 <span class=\"menu-icon fa fa-tachometer\"></span></a>\r\n    </li>\r\n    <li class=\"sidebar-list\" ui-sref-active=\"active\">\r\n      <a href=\"javascript:;\" ui-sref=\"main.story\">讲故事 <span class=\"menu-icon fa fa-book\"></span></a>\r\n    </li>\r\n    <li class=\"sidebar-list\" ui-sref-active=\"active\">\r\n      <a href=\"javascript:;\" ng-click=\"toggleEnglish()\">\r\n      学英语 <span class=\"menu-icon fa fa-language\"></span><i class=\"fa fa-angle-down\" aria-hidden=\"true\" ng-hide=\"toggleenglish\"></i><i class=\"fa fa-angle-up\" aria-hidden=\"true\" ng-show=\"toggleenglish\"></i></a>\r\n      <ul ng-show=\"toggleenglish\">\r\n        <li><a ui-sref=\"main.english.type\">单词分类</a></li>\r\n        <li><a ui-sref=\"main.english.detail\">单词列表</a></li>\r\n      </ul>\r\n    </li>\r\n    <li class=\"sidebar-list\" ui-sref-active=\"active\">\r\n      <a href=\"javascript:;\" ng-click=\"toggleSong()\">\r\n      唱儿歌 <span class=\"menu-icon fa fa fa-music\"></span><i class=\"fa fa-angle-down\" aria-hidden=\"true\" ng-hide=\"togglesong\"></i><i class=\"fa fa-angle-up\" aria-hidden=\"true\" ng-show=\"togglesong\"></i></a>\r\n      <ul ng-show=\"togglesong\">\r\n        <li><a ui-sref=\"main.song.chinese\">中文歌</a></li>\r\n        <li><a ui-sref=\"main.song.english\">英文歌</a></li>\r\n      </ul>\r\n    </li>\r\n    <li class=\"sidebar-list\" ui-sref-active=\"active\">\r\n      <a href=\"javascript:;\" ui-sref=\"main.course\">选课程 <span class=\"menu-icon fa fa-shopping-bag\"></span></a>\r\n    </li>\r\n    <li class=\"sidebar-list\" ui-sref-active=\"active\">\r\n      <a href=\"javascript:;\" ui-sref=\"main.activity\">要参加 <span class=\"menu-icon fa fa-tasks\"></span></a>\r\n    </li>\r\n    <li class=\"sidebar-list\" ui-sref-active=\"active\">\r\n      <a href=\"javascript:;\" ng-click=\"toggleAuth()\">\r\n      授权管理 <span class=\"menu-icon fa fa-unlock-alt\"></span><i class=\"fa fa-angle-down\" aria-hidden=\"true\" ng-hide=\"toggleauth\"></i><i class=\"fa fa-angle-up\" aria-hidden=\"true\" ng-show=\"toggleauth\"></i></a>\r\n      <ul ng-show=\"toggleauth\">\r\n        <li><a ui-sref=\"main.auth.menu\">菜单管理</a></li>\r\n        <li><a ui-sref=\"main.auth.action\">权限管理</a></li>\r\n        <li><a ui-sref=\"main.auth.usergroup\">用户组管理</a></li>\r\n        <li><a ui-sref=\"main.auth.user\">用户管理</a></li>\r\n      </ul>\r\n    </li>\r\n    <li class=\"sidebar-list\" ui-sref-active=\"active\">\r\n      <a href=\"javascript:;\" ng-click=\"toggleBase()\">\r\n      基础数据 <span class=\"menu-icon fa fa-database\"></span><i class=\"fa fa-angle-down\" aria-hidden=\"true\" ng-hide=\"togglebase\"></i><i class=\"fa fa-angle-up\" aria-hidden=\"true\" ng-show=\"togglebase\"></i></a>\r\n      <ul ng-show=\"togglebase\">\r\n        <li><a ui-sref=\"main.base.application\">应用管理</a></li>\r\n        <li><a ui-sref=\"main.base.content\">内容管理</a></li>\r\n      </ul>\r\n    </li>\r\n    <li class=\"sidebar-list\" ui-sref-active=\"active\">\r\n      <a href=\"javascript:;\" ng-click=\"toggleTrade()\">\r\n      交易管理 <span class=\"menu-icon fa fa-credit-card\"></span><i class=\"fa fa-angle-down\" aria-hidden=\"true\" ng-hide=\"toggletrade\"></i><i class=\"fa fa-angle-up\" aria-hidden=\"true\" ng-show=\"toggletrade\"></i></a>\r\n      <ul ng-show=\"toggletrade\">\r\n        <li><a ui-sref=\"main.base.application\">订单管理</a></li>\r\n        <li><a ui-sref=\"main.base.content\">退单管理</a></li>\r\n      </ul>\r\n    </li>\r\n    <li class=\"sidebar-list\" ui-sref-active=\"active\">\r\n      <a href=\"javascript:;\" ng-click=\"toggleFinance()\">\r\n      财务管理 <span class=\"menu-icon fa fa-money\"></span><i class=\"fa fa-angle-down\" aria-hidden=\"true\" ng-hide=\"togglefinance\"></i><i class=\"fa fa-angle-up\" aria-hidden=\"true\" ng-show=\"togglefinance\"></i></a>\r\n      <ul ng-show=\"togglefinance\">\r\n        <li><a ui-sref=\"main.base.application\">对账管理</a></li>\r\n        <li><a ui-sref=\"main.base.content\">预算管理</a></li>\r\n      </ul>\r\n    </li>\r\n    <li class=\"sidebar-list\" ui-sref-active=\"active\">\r\n      <a href=\"javascript:;\" ng-click=\"toggleComment()\">\r\n      点评管理 <span class=\"menu-icon fa fa-comments\"></span><i class=\"fa fa-angle-down\" aria-hidden=\"true\" ng-hide=\"togglecomment\"></i><i class=\"fa fa-angle-up\" aria-hidden=\"true\" ng-show=\"togglecomment\"></i></a>\r\n      <ul ng-show=\"togglecomment\">\r\n        <li><a ui-sref=\"main.base.application\">点评审核</a></li>\r\n      </ul>\r\n    </li>\r\n    <li class=\"sidebar-list\" ui-sref-active=\"active\">\r\n      <a href=\"javascript:;\" ng-click=\"toggleMessage()\">\r\n      消息中心 <span class=\"menu-icon fa fa-envelope\"></span><i class=\"fa fa-angle-down\" aria-hidden=\"true\" ng-hide=\"togglemessage\"></i><i class=\"fa fa-angle-up\" aria-hidden=\"true\" ng-show=\"togglemessage\"></i></a>\r\n      <ul ng-show=\"togglemessage\">\r\n        <li><a ui-sref=\"main.base.application\">站内信管理</a></li>\r\n      </ul>\r\n    </li>\r\n    <li class=\"sidebar-list\" ui-sref-active=\"active\">\r\n      <a href=\"javascript:;\" ui-sref=\"main.story\">会员管理 <span class=\"menu-icon fa fa-users\"></span></a>\r\n    </li>\r\n    <li class=\"sidebar-list\" ui-sref-active=\"active\">\r\n      <a href=\"javascript:;\" ui-sref=\"main.story\">优惠券管理 <span class=\"menu-icon fa fa-gift\"></span></a>\r\n    </li>\r\n    <li class=\"sidebar-list\" ui-sref-active=\"active\">\r\n      <a href=\"javascript:;\" ui-sref=\"main.story\">营销管理 <span class=\"menu-icon fa fa-rocket\"></span></a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"sidebar-footer\">\r\n    <div class=\"col-xs-4\">\r\n      <a href=\"http://fangxiang.applinzi.com\" target=\"_blank\">\r\n        前台\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-4\">\r\n      <a href=\"#\">\r\n        帮助文档\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-4\">\r\n      <a href=\"#\">\r\n        常见问题\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n    <!-- End Sidebar -->\r\n    <div id=\"content-wrapper\">\r\n      <div class=\"page-content\">\r\n        <!-- Header Bar -->\r\n        <!--\r\n    @require \"B:widget/partial/header/header.less\"\r\n-->\r\n\r\n<div class=\"row header\" ng-class=\"{'open': toggle}\">\r\n    <div class=\"col-xs-12\">\r\n        <div class=\"user pull-right\">\r\n            <div class=\"item dropdown\" uib-dropdown>\r\n                <a href=\"#\" class=\"dropdown-toggle\" uib-dropdown-toggle>\r\n                    <img src=\"/static/B/widget/partial/header/img/avatar_dd15fcb.jpg\">\r\n                </a>\r\n                <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                    <li class=\"dropdown-header\">\r\n                        {{user.username}}\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li class=\"link\">\r\n                        <a href=\"#\">\r\n                            个人设置\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li class=\"link\">\r\n                        <a href=\"javascript:;\" ng-click=\"exit()\">\r\n                            退出\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"item dropdown\" uib-dropdown>\r\n                <a href=\"#\" class=\"dropdown-toggle\" uib-dropdown-toggle>\r\n                    <i class=\"fa fa-bell-o\"></i>\r\n                </a>\r\n                <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                    <li class=\"dropdown-header\">\r\n                        通知\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li>\r\n                        <a href=\"#\">新订单</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"meta\">\r\n            <div class=\"page\">\r\n                控制台\r\n            </div>\r\n            <div class=\"breadcrumb-links\">\r\n                总览\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n        <!-- End Header Bar -->\r\n        <!-- Main Content -->\r\n        <div class=\"main-content\" ui-view></div>\r\n      </div><!-- End Page Content -->\r\n    </div><!-- End Content Wrapper -->\r\n  </div><!-- End Page Wrapper -->\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
      require.async(['B:widget/pages/main/main.async'], function(ctrl) {
        $injector.invoke(ctrl, this, {'$scope': $scope});
      });
    }]
  };
  

});
