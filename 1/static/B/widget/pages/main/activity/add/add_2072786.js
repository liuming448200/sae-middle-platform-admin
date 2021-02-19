define('B:widget/pages/main/activity/add/add', function(require, exports, module) {

  module.exports = {
    url: '/add?back',
    template: "<!--\r\n    @require \"B:widget/pages/main/activity/add/add.css\"\r\n-->\r\n\r\n<div class=\"add-container\">\r\n\t添加活动\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
    	require.async(['B:widget/pages/main/activity/add/add.async'], function(ctrl) {
  			$injector.invoke(ctrl, this, {'$scope': $scope});
  		});
    }]
  };
  

});
