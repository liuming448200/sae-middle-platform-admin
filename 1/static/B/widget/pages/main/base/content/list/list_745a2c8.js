define('B:widget/pages/main/base/content/list/list', function(require, exports, module) {

  module.exports = {
    url: '/list',
    template: "<!--\r\n    @require \"B:widget/pages/main/base/content/list/list.css\"\r\n-->\r\n\r\n<div class=\"list-container\">\r\n  <div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<rd-widget>\r\n\t\t\t\t<rd-widget-header icon=\"fa-tasks\" title=\"内容列表\">\r\n\t        <a href=\"javascript:;\" ui-sref=\"main.base.content.add\">添加内容</a>\r\n\t      </rd-widget-header>\r\n\t      <rd-widget-body classes=\"no-padding\" loading=\"loading\" failing=\"failing\" empty=\"empty\">\r\n\t      \t<div class=\"table-responsive\">\r\n\t      \t\t<table class=\"table\">\r\n\t      \t\t\t<thead>\r\n\t      \t\t\t\t<tr>\r\n\t      \t\t\t\t\t<th>内容名称</th>\r\n\t      \t\t\t\t\t<th>创建时间</th>\r\n\t      \t\t\t\t\t<th>更新时间</th>\r\n\t      \t\t\t\t\t<th>操作</th>\r\n\t      \t\t\t\t</tr>\r\n\t      \t\t\t</thead>\r\n\t      \t\t\t<tbody>\r\n\t      \t\t\t\t<tr ng-repeat=\"item in list\">\r\n\t      \t\t\t\t\t<td>{{item.typename}}</td>\r\n\t      \t\t\t\t\t<td>{{item.create_time}}</td>\r\n\t      \t\t\t\t\t<td>{{item.update_time}}</td>\r\n\t      \t\t\t\t\t<td>\r\n\t      \t\t\t\t\t\t<a href=\"javascript:;\" ui-sref=\"main.base.content.edit({tid: item.tid})\">\r\n\t      \t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\">编辑</button>\r\n\t      \t\t\t\t\t\t</a>\r\n\t      \t\t\t\t\t</td>\r\n\t      \t\t\t\t</tr>\r\n\t      \t\t\t</tbody>\r\n\t      \t\t</table>\r\n\t      \t</div>\r\n\t      </rd-widget-body>\r\n\t      <rd-widget-footer>\r\n\t      \t<rd-pagination conf=\"paginationConf\"></rd-pagination>\r\n\t        <div class=\"clearfix\"></div>\r\n\t      </rd-widget-footer>\r\n\t\t\t</rd-widget>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
      require.async(['B:widget/pages/main/base/content/list/list.async'], function(ctrl) {
        $injector.invoke(ctrl, this, {'$scope': $scope});
      });
    }]
  };
  

});
