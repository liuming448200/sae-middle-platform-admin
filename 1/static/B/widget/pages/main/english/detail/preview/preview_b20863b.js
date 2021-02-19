define('B:widget/pages/main/english/detail/preview/preview', function(require, exports, module) {

  module.exports = {
    url: '/preview?word_id',
    template: "<!--\r\n    @require \"B:widget/pages/main/english/detail/preview/preview.css\"\r\n-->\r\n\r\n<div class=\"preview-container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<div class=\"content-container\">\r\n\t\t\t\t<ul class=\"thumbnails\">\r\n\t\t\t\t\t<li class=\"span4\">\r\n\t\t\t\t\t\t<div class=\"thumbnail\">\r\n\t\t\t\t\t\t\t<img alt=\"{{word.english}}\" ng-src=\"{{word.pic}}\">\r\n              <p class=\"help-block text-center\">picture source：network</p>\r\n\t\t\t\t\t\t\t<div class=\"caption\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"clearfix\" style=\"padding: 0 5px; text-align:left;\">\r\n                  <span>{{word.english}}</span>\r\n                  <a href=\"javascript:;\">\r\n                    <i class=\"fa fa-volume-up\" aria-hidden=\"true\"></i>\r\n                  </a>\r\n                  <a class=\"btn btn-success\" href=\"javascript:;\" data-toggle=\"collapse\" data-target=\"#word\" style=\"float: right;\">translate</a>\r\n                </h3>\r\n                <p id=\"word\" class=\"collapse\" style=\"padding: 0 5px;\">{{word.chinese}}</p>\r\n                <div class=\"inner-container\">\r\n                  <p>For example</p>\r\n                  <h3 class=\"clearfix\" style=\"text-align:left;\">\r\n                    <span>{{word.example_en}}</span>\r\n                    <a href=\"javascript:;\">\r\n                      <i class=\"fa fa-volume-up\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                    <a class=\"btn btn-success\" href=\"javascript:;\" data-toggle=\"collapse\" data-target=\"#sentence\" style=\"float: right;\">translate</a>\r\n                  </h3>\r\n                  <p id=\"sentence\" class=\"collapse\">\r\n                    {{word.example_cn}}\r\n                  </p>\r\n                </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"bottom-btn-group\">\r\n        <button type=\"button\" class=\"btn btn-default\" ng-click=\"back()\">返回</button>\r\n        <button type=\"button\" class=\"btn btn-success\" ng-click=\"submit()\">提交</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteWord()\" ng-show=\"word_id\">删除</button>\r\n      </div>\r\n      <p class=\"help-block\">备注：为了方便接口调用统计，后台不支持语音识别。</p>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
    	require.async(['B:widget/pages/main/english/detail/preview/preview.async'], function(ctrl) {
  			$injector.invoke(ctrl, this, {'$scope': $scope});
  		});
    }]
  };
  

});