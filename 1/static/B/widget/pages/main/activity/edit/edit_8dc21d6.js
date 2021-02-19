define('B:widget/pages/main/activity/edit/edit', function(require, exports, module) {

  module.exports = {
    url: '/edit/:activity_id?back',
    template: "<!--\r\n    @require \"B:widget/pages/main/activity/edit/edit.css\"\r\n-->\r\n\r\n<div class=\"edit-container\">\r\n\t编辑活动\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
    	require.async(['B:widget/pages/main/activity/edit/edit.async'], function(ctrl) {
  			$injector.invoke(ctrl, this, {'$scope': $scope});
  		});
    }]
  };
  

});
