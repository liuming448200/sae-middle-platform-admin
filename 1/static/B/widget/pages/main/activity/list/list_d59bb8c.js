define('B:widget/pages/main/activity/list/list', function(require, exports, module) {

  module.exports = {
    url: '/list',
    template: "<!--\r\n    @require \"B:widget/pages/main/activity/list/list.css\"\r\n-->\r\n\r\n<div class=\"list-container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<rd-widget>\r\n\t\t\t\t<rd-widget-header icon=\"fa-tasks\" title=\"活动列表\">\r\n\t        <a href=\"javascript:;\" ui-sref=\"main.activity.add\">添加活动</a>\r\n\t      </rd-widget-header>\r\n\t      <rd-widget-body classes=\"no-padding\" loading=\"loading\" failing=\"failing\" empty=\"empty\">\r\n\t      \t<div class=\"table-responsive\">\r\n\t      \t\t<table class=\"table\">\r\n\t      \t\t\t<thead>\r\n\t      \t\t\t\t<tr>\r\n\t      \t\t\t\t\t<th>活动名称</th>\r\n\t      \t\t\t\t\t<th>开始时间</th>\r\n\t      \t\t\t\t\t<th>结束时间</th>\r\n\t      \t\t\t\t\t<th>活动状态</th>\r\n\t      \t\t\t\t\t<th>创建时间</th>\r\n\t      \t\t\t\t\t<th>更新时间</th>\r\n\t      \t\t\t\t\t<th>操作</th>\r\n\t      \t\t\t\t</tr>\r\n\t      \t\t\t</thead>\r\n\t      \t\t\t<tbody>\r\n\t      \t\t\t\t<tr>\r\n\t      \t\t\t\t\t<td>必胜客亲子披萨DIY</td>\r\n\t      \t\t\t\t\t<td>2016-11-14 00:00:00</td>\r\n\t      \t\t\t\t\t<td>2016-11-16 23:59:59</td>\r\n\t      \t\t\t\t\t<td>未开始</td>\r\n\t      \t\t\t\t\t<td>2016-11-15 11:39:58</td>\r\n\t      \t\t\t\t\t<td>2016-11-15 11:39:58</td>\r\n\t      \t\t\t\t\t<td>\r\n                    <button type=\"button\" class=\"btn btn-info\">编辑</button>\r\n                    <button type=\"button\" class=\"btn btn-success\">上架</button>\r\n                    <button type=\"button\" class=\"btn btn-danger\" disabled>下架</button>\r\n                  </td>\r\n\t      \t\t\t\t</tr>\r\n\t      \t\t\t\t<tr>\r\n\t      \t\t\t\t\t<td>必胜客亲子披萨DIY</td>\r\n\t      \t\t\t\t\t<td>2016-11-14 00:00:00</td>\r\n\t      \t\t\t\t\t<td>2016-11-16 23:59:59</td>\r\n\t      \t\t\t\t\t<!--进行中的活动不能修改和删除-->\r\n\t      \t\t\t\t\t<td>进行中</td>\r\n\t      \t\t\t\t\t<td>2016-11-15 11:39:58</td>\r\n\t      \t\t\t\t\t<td>2016-11-15 11:39:58</td>\r\n\t      \t\t\t\t\t<td>\r\n                    <button type=\"button\" class=\"btn btn-info\">编辑</button>\r\n                    <button type=\"button\" class=\"btn btn-success\" disabled>上架</button>\r\n                    <button type=\"button\" class=\"btn btn-danger\">下架</button>\r\n                  </td>\r\n\t      \t\t\t\t</tr>\r\n\t      \t\t\t\t<tr>\r\n\t      \t\t\t\t\t<td>必胜客亲子披萨DIY</td>\r\n\t      \t\t\t\t\t<td>2016-11-14 00:00:00</td>\r\n\t      \t\t\t\t\t<td>2016-11-16 23:59:59</td>\r\n\t      \t\t\t\t\t<td>已结束</td>\r\n\t      \t\t\t\t\t<td>2016-11-15 11:39:58</td>\r\n\t      \t\t\t\t\t<td>2016-11-15 11:39:58</td>\r\n\t      \t\t\t\t\t<td>\r\n                    <button type=\"button\" class=\"btn btn-info\">编辑</button>\r\n                    <button type=\"button\" class=\"btn btn-success\" disabled>上架</button>\r\n                    <button type=\"button\" class=\"btn btn-danger\" disabled>下架</button>\r\n                  </td>\r\n\t      \t\t\t\t</tr>\r\n\t      \t\t\t</tbody>\r\n\t      \t\t</table>\r\n\t      \t</div>\r\n\t      </rd-widget-body>\r\n\t\t\t</rd-widget>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
    	require.async(['B:widget/pages/main/activity/list/list.async'], function(ctrl) {
  			$injector.invoke(ctrl, this, {'$scope': $scope});
  		});
    }]
  };
  

});
