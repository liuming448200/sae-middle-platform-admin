define('B:widget/pages/main/base/content/add/add', function(require, exports, module) {

  module.exports = {
    url: '/add',
    template: "<!--\r\n    @require \"B:widget/pages/main/base/content/add/add.css\"\r\n-->\r\n\r\n<div class=\"add-container\">\r\n  <div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<div class=\"well\">\r\n\t\t\t\t<form role=\"form\" name=\"addContentForm\" novalidate ng-submit=\"addContentSubmit()\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"typename\">内容名称</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"typename\" name=\"typename\" ng-model=\"content.typename\" ng-trim=\"true\" required ng-maxlength=\"10\" placeholder=\"请输入内容名称\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t          <div style=\"text-align: center;\">\r\n\t          \t<a ui-sref=\"main.base.content.list\">\r\n\t          \t\t<button type=\"button\" class=\"btn btn-default\">返回</button>\r\n\t          \t</a>\r\n\t            <button type=\"submit\" class=\"btn btn-success\">提交</button>\r\n\t          </div>\r\n\t        </div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
      require.async(['B:widget/pages/main/base/content/add/add.async'], function(ctrl) {
        $injector.invoke(ctrl, this, {'$scope': $scope});
      });
    }]
  };
  

});
