define('B:widget/pages/main/song/chinese/preview/preview', function(require, exports, module) {

  module.exports = {
    url: '/preview?song_id',
    template: "<!--\r\n    @require \"B:widget/pages/main/song/chinese/preview/preview.css\"\r\n-->\r\n\r\n<div class=\"preview-container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<div class=\"content-container\">\r\n\t\t\t\t<ul class=\"thumbnails\">\r\n\t\t\t\t\t<li class=\"span4\">\r\n\t\t\t\t\t\t<div class=\"thumbnail\">\r\n\t\t\t\t\t\t\t<img alt=\"{{song.name}}\" ng-src=\"{{song.pic}}\">\r\n              <div class=\"caption\" style=\"text-align: center;\">\r\n                <h3>{{song.name}}</h3>\r\n                <p class=\"help-block\">来源：网络</p>\r\n                <p ng-repeat=\"item in items\">\r\n                  <audio controls=\"controls\" autoplay=\"autoplay\" loop=\"loop\">\r\n                    <source ng-src=\"{{item|trustSrc}}\" type=\"audio/mpeg\">\r\n                    <object height=\"30\" width=\"300\" data=\"{{item|trustSrc}}\">\r\n                      <embed height=\"30\" width=\"300\" ng-src=\"{{item|trustSrc}}\">\r\n                    </object>\r\n                  </audio>\r\n                </p>\r\n                <p style=\"margin: 15px 0;\">\r\n                  <a class=\"btn btn-success\" href=\"javascript:;\" data-toggle=\"collapse\" data-target=\"#sense\">歌词</a>\r\n                </p>\r\n                <p id=\"sense\" class=\"collapse\" ng-bind-html=\"song.content|unescapeHTMLFilterNoSpace\"></p>\r\n              </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"bottom-btn-group\">\r\n        <button type=\"button\" class=\"btn btn-default\" ng-click=\"back()\">返回</button>\r\n        <button type=\"button\" class=\"btn btn-success\" ng-click=\"submit()\">提交</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteSong()\" ng-show=\"song_id\">删除</button>\r\n      </div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
    	require.async(['B:widget/pages/main/song/chinese/preview/preview.async'], function(ctrl) {
  			$injector.invoke(ctrl, this, {'$scope': $scope});
  		});
    }]
  };
  

});
