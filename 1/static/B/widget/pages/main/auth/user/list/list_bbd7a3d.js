define('B:widget/pages/main/auth/user/list/list', function(require, exports, module) {

  module.exports = {
    url: '/list',
    template: "<!--\r\n    @require \"B:widget/pages/main/auth/user/list/list.css\"\r\n-->\r\n\r\n<div class=\"list-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <rd-widget>\r\n        <rd-widget-header icon=\"fa-tasks\" title=\"用户列表\">\r\n          <a href=\"javascript:;\" ui-sref=\"main.auth.user.add\">添加用户</a>\r\n        </rd-widget-header>\r\n        <rd-widget-body classes=\"no-padding\" loading=\"loading\" failing=\"failing\" empty=\"empty\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>用户名</th>\r\n                  <th>创建时间</th>\r\n                  <th>更新时间</th>\r\n                  <th>操作</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr ng-repeat=\"item in list\">\r\n                  <td>{{item.username}}</td>\r\n                  <td>{{item.create_time}}</td>\r\n                  <td>{{item.update_time}}</td>\r\n                  <td>\r\n                    <button type=\"button\" class=\"btn btn-info\" ng-click=\"goEdit(item)\">编辑</button>\r\n                    <button type=\"button\" class=\"btn btn-success\" ng-hide=\"item.status == 0\" ng-click=\"activate(item)\">激活</button>\r\n                    <button type=\"button\" class=\"btn btn-warning\" ng-hide=\"item.status == 1\" ng-click=\"forbid(item)\">禁用</button>\r\n                    <button type=\"button\" class=\"btn btn-danger\" ng-hide=\"item.status == 2\" ng-click=\"frozen(item)\">冻结</button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </rd-widget-body>\r\n        <rd-widget-footer>\r\n          <rd-pagination conf=\"paginationConf\"></rd-pagination>\r\n          <div class=\"clearfix\"></div>\r\n        </rd-widget-footer>\r\n      </rd-widget>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
      require.async(['B:widget/pages/main/auth/user/list/list.async'], function(ctrl) {
        $injector.invoke(ctrl, this, {'$scope': $scope});
      });
    }]
  };
  

});
