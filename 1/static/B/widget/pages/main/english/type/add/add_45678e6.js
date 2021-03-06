define('B:widget/pages/main/english/type/add/add', function(require, exports, module) {

  module.exports = {
    url: '/add',
    template: "<!--\r\n    @require \"B:widget/pages/main/english/type/add/add.css\"\r\n-->\r\n\r\n<div class=\"add-container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<div class=\"well\">\r\n\t\t\t\t<form role=\"form\" name=\"addWordCategoryForm\" novalidate ng-submit=\"addWordCategorySubmit()\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"english\">单词</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"english\" name=\"english\" ng-model=\"word.english\" ng-trim=\"true\" required ng-maxlength=\"30\" placeholder=\"请输入单词\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"chinese\">单词翻译</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"chinese\" name=\"chinese\" ng-model=\"word.chinese\" ng-trim=\"true\" required ng-maxlength=\"30\" placeholder=\"请输入单词翻译\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t          <div style=\"text-align: center;\">\r\n\t          \t<a ui-sref=\"main.english.type\">\r\n\t          \t\t<button type=\"button\" class=\"btn btn-default\">返回</button>\r\n\t          \t</a>\r\n\t            <button type=\"submit\" class=\"btn btn-success\">提交</button>\r\n\t          </div>\r\n\t        </div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
    	require.async(['B:widget/pages/main/english/type/add/add.async'], function(ctrl) {
  			$injector.invoke(ctrl, this, {'$scope': $scope});
  		});
    }]
  };
  

});
