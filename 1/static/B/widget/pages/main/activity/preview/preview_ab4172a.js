define('B:widget/pages/main/activity/preview/preview', function(require, exports, module) {

  module.exports = {
    url: '/preview?activity_id',
    template: "<!--\r\n    @require \"B:widget/pages/main/activity/preview/preview.css\"\r\n-->\r\n\r\n<div class=\"preview-container\">\r\n\t预览活动\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
    	require.async(['B:widget/pages/main/activity/preview/preview.async'], function(ctrl) {
  			$injector.invoke(ctrl, this, {'$scope': $scope});
  		});
    }]
  };
  

});
