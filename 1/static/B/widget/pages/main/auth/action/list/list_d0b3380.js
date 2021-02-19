define('B:widget/pages/main/auth/action/list/list', function(require, exports, module) {

  module.exports = {
    url: '/list',
    template: "<!--\r\n    @require \"B:widget/pages/main/auth/action/list/list.css\"\r\n-->\r\n\r\n<div class=\"list-container\">\r\n  <div class=\"row\">\r\n  \t<div class=\"col-xs-12\">\r\n  \t\t<rd-widget>\r\n  \t\t\t<rd-widget-header icon=\"fa-tasks\" title=\"权限列表\">\r\n          <a href=\"javascript:;\" ui-sref=\"main.auth.action.add\">添加权限</a>\r\n        </rd-widget-header>\r\n        <rd-widget-body classes=\"no-padding\" loading=\"loading\" failing=\"failing\" empty=\"empty\">\r\n        \t<div class=\"table-responsive\">\r\n        \t\t<table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>权限名称</th>\r\n                  <th>创建时间</th>\r\n                  <th>更新时间</th>\r\n                  <th>操作人</th>\r\n                  <th>操作</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr ng-repeat=\"item in list\">\r\n                  <td>{{item.action_name}}</td>\r\n                  <td>{{item.create_time}}</td>\r\n                  <td>{{item.update_time}}</td>\r\n                  <td>{{item.operator_name}}</td>\r\n                  <td>\r\n                    <a href=\"javascript:;\" ui-sref=\"main.auth.action.edit({action_id: item.action_id})\">\r\n                      <button type=\"button\" class=\"btn btn-info\">编辑</button>\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n        \t</div>\r\n        </rd-widget-body>\r\n        <rd-widget-footer>\r\n          <rd-pagination conf=\"paginationConf\"></rd-pagination>\r\n          <div class=\"clearfix\"></div>\r\n        </rd-widget-footer>\r\n  \t\t</rd-widget>\r\n  \t</div>\r\n  </div>\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
      require.async(['B:widget/pages/main/auth/action/list/list.async'], function(ctrl) {
        $injector.invoke(ctrl, this, {'$scope': $scope});
      });
    }]
  };
  

});
