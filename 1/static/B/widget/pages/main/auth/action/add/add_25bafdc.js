define('B:widget/pages/main/auth/action/add/add', function(require, exports, module) {

  module.exports = {
    url: '/add',
    template: "<!--\r\n    @require \"B:widget/pages/main/auth/action/add/add.css\"\r\n-->\r\n\r\n<div class=\"add-container\">\r\n  <div class=\"row\">\r\n  \t<div class=\"col-xs-12\">\r\n  \t\t<div class=\"well\">\r\n  \t\t\t<form role=\"form\" name=\"addActionForm\" novalidate ng-submit=\"addActionSubmit()\">\r\n  \t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"action_name\">权限名称</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"action_name\" name=\"action_name\" ng-model=\"action.action_name\" ng-trim=\"true\" required ng-maxlength=\"20\" placeholder=\"请输入权限名称\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"menu_id\">菜单分类</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" id=\"menu_id\" name=\"menu_id\" ng-model=\"action.menu_id\" ng-options=\"item.menu_id as item.menu_name for item in action.menus\" required>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t<div ng-show=\"lazy\" style=\"color: red;\">加载菜单分类失败</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"action\">权限字符串</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"action\" name=\"action\" ng-model=\"action.action\" ng-trim=\"true\" required ng-maxlength=\"30\" placeholder=\"请输入权限字符串\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t          <div style=\"text-align: center;\">\r\n\t          \t<a ui-sref=\"main.auth.action.list\">\r\n\t          \t\t<button type=\"button\" class=\"btn btn-default\">返回</button>\r\n\t          \t</a>\r\n\t            <button type=\"submit\" class=\"btn btn-success\">提交</button>\r\n\t          </div>\r\n\t        </div>\r\n  \t\t\t</form>\r\n  \t\t</div>\r\n  \t</div>\r\n  </div>\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
      require.async(['B:widget/pages/main/auth/action/add/add.async'], function(ctrl) {
        $injector.invoke(ctrl, this, {'$scope': $scope});
      });
    }]
  };
  

});
