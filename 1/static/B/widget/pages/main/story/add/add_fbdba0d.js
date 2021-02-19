define('B:widget/pages/main/story/add/add', function(require, exports, module) {

  module.exports = {
    url: '/add?back',
    template: "<!--\r\n    @require \"B:widget/pages/main/story/add/add.css\"\r\n-->\r\n\r\n<div class=\"add-container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<div class=\"well\">\r\n\t\t\t\t<form role=\"form\" name=\"addStoryForm\" novalidate ng-submit=\"addStoryPreview()\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t      <label for=\"name\">故事名称</label>\r\n\t\t\t      <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" ng-model=\"story.name\" ng-trim=\"true\" required ng-maxlength=\"20\" placeholder=\"请输入故事名称\">\r\n\t\t\t   \t</div>\r\n\t\t\t   \t<div class=\"form-group\">\r\n\t\t\t      <label for=\"content\">故事内容</label>\r\n\t\t\t      <textarea class=\"form-control\" rows=\"10\" id=\"content\" name=\"content\" ng-model=\"story.content\" required ng-maxlength=\"3000\" placeholder=\"请输入故事内容\"></textarea>\r\n\t\t\t   \t</div>\r\n\t\t\t   \t<div class=\"form-group\">\r\n\t\t\t      <label for=\"implication\">故事寓意</label>\r\n\t\t\t      <textarea class=\"form-control\" rows=\"5\" id=\"implication\" name=\"implication\" ng-model=\"story.implication\" required ng-maxlength=\"1000\" placeholder=\"请输入故事寓意\"></textarea>\r\n\t\t\t   \t</div>\r\n\t\t\t   \t<div class=\"form-group\">\r\n\t\t\t      <label for=\"inputpic\">故事图片</label>\r\n\t\t\t      <input type=\"file\" id=\"inputpic\" rd-picupload=\"myPic\" accept=\"image/*\">\r\n\t\t\t      <p class=\"help-block\">请上传以.jpg、.png或者.bmp结尾的故事图片</p>\r\n\t\t\t      <img class=\"img-responsive\" style=\"margin: 10px auto;\" ng-src=\"{{story.pic}}\" alt=\"{{story.picname}}\">\r\n\t\t\t      <button type=\"button\" class=\"btn btn-info\" ng-click=\"uploadPic()\">上传</button>\r\n\t\t\t   \t</div>\r\n\t\t\t   \t<div class=\"form-group\">\r\n\t          <div style=\"text-align: center;\">\r\n\t          \t<a ui-sref=\"main.story.list\">\r\n\t          \t\t<button type=\"button\" class=\"btn btn-default\">返回</button>\r\n\t          \t</a>\r\n\t            <button type=\"submit\" class=\"btn btn-success\">预览</button>\r\n\t          </div>\r\n\t        </div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
    	require.async(['B:widget/pages/main/story/add/add.async'], function(ctrl) {
  			$injector.invoke(ctrl, this, {'$scope': $scope});
  		});
    }]
  };
  

});
