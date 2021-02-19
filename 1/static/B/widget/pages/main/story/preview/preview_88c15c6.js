define('B:widget/pages/main/story/preview/preview', function(require, exports, module) {

  module.exports = {
    url: '/preview?story_id',
    template: "<!--\r\n    @require \"B:widget/pages/main/story/preview/preview.css\"\r\n-->\r\n\r\n<div class=\"preview-container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n      <div class=\"content-container\">\r\n        <ul class=\"thumbnails\">\r\n          <li class=\"span4\">\r\n            <div class=\"thumbnail\">\r\n              <img alt=\"{{story.name}}\" ng-src=\"{{story.pic}}\">\r\n              <div class=\"caption\">\r\n                <h3>{{story.name}}</h3>\r\n                <p class=\"help-block text-center\">来源：网络</p>\r\n                <p ng-bind-html=\"story.content|unescapeHTMLFilter\"></p>\r\n                <p style=\"text-align: center; margin: 5px 0;\">\r\n                  <a class=\"btn btn-success\" href=\"javascript:;\" data-toggle=\"collapse\" data-target=\"#sense\">寓意</a>\r\n                </p>\r\n                <p id=\"sense\" class=\"collapse\" ng-bind-html=\"story.implication|unescapeHTMLFilterNoSpace\"></p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"bottom-btn-group\">\r\n        <button type=\"button\" class=\"btn btn-default\" ng-click=\"back()\">返回</button>\r\n        <button type=\"button\" class=\"btn btn-success\" ng-click=\"submit()\">提交</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteStory()\" ng-show=\"story_id\">删除</button>\r\n      </div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
    	require.async(['B:widget/pages/main/story/preview/preview.async'], function(ctrl) {
  			$injector.invoke(ctrl, this, {'$scope': $scope});
  		});
    }]
  };
  

});
