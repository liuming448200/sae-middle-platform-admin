define('B:widget/pages/main/auth/menu/edit/edit', function(require, exports, module) {

  module.exports = {
    url: '/edit/:menu_id',
    template: "<!--\r\n    @require \"B:widget/pages/main/auth/menu/edit/edit.css\"\r\n-->\r\n\r\n<div class=\"edit-container\">\r\n  <div class=\"row\">\r\n  \t<div class=\"col-xs-12\">\r\n  \t\t<rd-widget>\r\n  \t\t\t<rd-widget-body loading=\"loading\" failing=\"failing\" empty=\"empty\">\r\n\t  \t\t\t<form role=\"form\" name=\"editMenuForm\" novalidate ng-submit=\"editMenuSubmit()\">\r\n\t  \t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"menu_name\">菜单名称</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"menu_name\" name=\"menu_name\" ng-model=\"menu.menu_name\" ng-trim=\"true\" required ng-maxlength=\"20\" placeholder=\"请输入菜单名称\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"content_type\">内容分类</label>\r\n\t\t\t\t\t\t\t<select class=\"form-control\" id=\"content_type\" name=\"content_type\" ng-model=\"menu.tid\" ng-options=\"item.tid as item.typename for item in menu.types\" required>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<div ng-show=\"lazy\" style=\"color: red;\">加载内容分类失败</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t          <div style=\"text-align: center;\">\r\n\t\t          \t<a ui-sref=\"main.auth.menu.list\">\r\n\t\t          \t\t<button type=\"button\" class=\"btn btn-default\">返回</button>\r\n\t\t          \t</a>\r\n\t\t            <button type=\"submit\" class=\"btn btn-success\">提交</button>\r\n\t\t            <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteMenu()\">删除</button>\r\n\t\t          </div>\r\n\t\t        </div>\r\n\t  \t\t\t</form>\r\n\t  \t\t</rd-widget-body>\r\n  \t\t</rd-widget>\r\n  \t</div>\r\n  </div>\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
      require.async(['B:widget/pages/main/auth/menu/edit/edit.async'], function(ctrl) {
        $injector.invoke(ctrl, this, {'$scope': $scope});
      });
    }]
  };
  

});
