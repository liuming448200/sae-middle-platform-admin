define('B:widget/pages/main/auth/usergroup/edit/edit', function(require, exports, module) {

  module.exports = {
    url: '/edit/:group_id',
    template: "<!--\r\n    @require \"B:widget/pages/main/auth/usergroup/edit/edit.css\"\r\n-->\r\n\r\n<div class=\"edit-container\">\r\n  <div class=\"row\">\r\n  \t<div class=\"col-xs-12\">\r\n  \t\t<rd-widget>\r\n  \t\t\t<rd-widget-body loading=\"loading\" failing=\"failing\" empty=\"empty\">\r\n  \t\t\t\t<form role=\"form\" name=\"editUsergroupForm\" novalidate ng-submit=\"editUsergroupSubmit()\">\r\n  \t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"group_name\">用户组名称</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"group_name\" name=\"group_name\" ng-model=\"usergroup.group_name\" ng-trim=\"true\" required ng-maxlength=\"20\" placeholder=\"请输入用户组名称\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"group_info\">用户组信息</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"group_info\" name=\"group_info\" ng-model=\"usergroup.group_info\" ng-trim=\"true\" required ng-maxlength=\"30\" placeholder=\"请输入用户组信息\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"actions\">选择权限</label>\r\n\t\t\t\t\t\t\t<div class=\"actions-container\">\r\n\t\t\t\t\t\t\t \t<label class=\"checkbox-inline\" ng-repeat=\"action in usergroup.allActions\">\r\n\t\t\t\t\t\t   \t\t<input type=\"checkbox\" id=\"inlineCheckbox{{action.action_id}}\" name=\"actions\" ng-model=\"action.selected\"> {{action.action_name}}\r\n\t\t\t\t\t\t   \t</label>\r\n\t\t\t\t\t\t   \t<div ng-show=\"lazy\" style=\"color: red;\">加载权限列表失败</div>\r\n\t\t\t\t\t   \t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"users\">选择用户</label>\r\n\t\t\t\t\t\t\t<div class=\"users-container\">\r\n\t\t\t\t\t\t\t \t<label class=\"checkbox-inline\" ng-repeat=\"user in usergroup.allUsers\">\r\n\t\t\t\t\t\t   \t\t<input type=\"checkbox\" id=\"inlineCheckbox{{user.uid}}\" name=\"users\" ng-model=\"user.selected\"> {{user.username}}\r\n\t\t\t\t\t\t   \t</label>\r\n\t\t\t\t\t\t   \t<div ng-show=\"relax\" style=\"color: red;\">加载用户列表失败</div>\r\n\t\t\t\t\t   \t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t          <div style=\"text-align: center;\">\r\n\t\t          \t<a ui-sref=\"main.auth.usergroup.list\">\r\n\t\t          \t\t<button type=\"button\" class=\"btn btn-default\">返回</button>\r\n\t\t          \t</a>\r\n\t\t            <button type=\"submit\" class=\"btn btn-success\">提交</button>\r\n\t\t            <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteUsergroup()\">删除</button>\r\n\t\t          </div>\r\n\t\t        </div>\r\n  \t\t\t\t</form>\r\n  \t\t\t</rd-widget-body>\r\n  \t\t</rd-widget>\r\n  \t</div>\r\n  </div>\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
      require.async(['B:widget/pages/main/auth/usergroup/edit/edit.async'], function(ctrl) {
        $injector.invoke(ctrl, this, {'$scope': $scope});
      });
    }]
  };
  

});
