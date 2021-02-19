define('B:widget/pages/main/auth/user/edit/edit', function(require, exports, module) {

  module.exports = {
    url: '/edit/:uid',
    template: "<!--\r\n    @require \"B:widget/pages/main/auth/user/edit/edit.css\"\r\n-->\r\n\r\n<div class=\"edit-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <rd-widget>\r\n        <rd-widget-body loading=\"loading\" failing=\"failing\" empty=\"empty\">\r\n          <form role=\"form\" name=\"editUserForm\" novalidate ng-submit=\"editUserSubmit()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"mobile\">手机号</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"mobile\" name=\"mobile\" ng-model=\"admin.mobile\" ng-trim=\"true\" required ng-minlength=\"11\" ng-maxlength=\"11\" placeholder=\"请输入手机号码\" disabled>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"username\">用户名</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" ng-model=\"admin.username\" ng-trim=\"true\" required ng-minlength=\"6\" ng-maxlength=\"16\" placeholder=\"请输入用户名\" disabled>\r\n            </div>\r\n            <div class=\"form-group\">\r\n            <label for=\"usergroups\">所属用户组</label>\r\n              <div class=\"usergroups-container\">\r\n                <label class=\"checkbox-inline\" ng-repeat=\"usergroup in admin.allUsergroups\">\r\n                  <input type=\"checkbox\" id=\"inlineCheckbox{{usergroup.group_id}}\" name=\"usergroups\" ng-model=\"usergroup.selected\"> {{usergroup.group_name}}\r\n                </label>\r\n                <div ng-show=\"lazy\" style=\"color: red;\">加载用户组列表失败</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div style=\"text-align: center;\">\r\n                <a ui-sref=\"main.auth.user\">\r\n                  <button type=\"button\" class=\"btn btn-default\">返回</button>\r\n                </a>\r\n                <button type=\"submit\" class=\"btn btn-success\">提交</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </rd-widget-body>\r\n      </rd-widget>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
      require.async(['B:widget/pages/main/auth/user/edit/edit.async'], function(ctrl) {
        $injector.invoke(ctrl, this, {'$scope': $scope});
      });
    }]
  };
  

});
