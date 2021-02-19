define('B:widget/pages/main/course/preview/preview', function(require, exports, module) {

  module.exports = {
    url: '/preview?course_id',
    template: "<!--\r\n    @require \"B:widget/pages/main/course/preview/preview.css\"\r\n-->\r\n\r\n<div class=\"preview-container\">\r\n  预览课程\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
      require.async(['B:widget/pages/main/course/preview/preview.async'], function(ctrl) {
        $injector.invoke(ctrl, this, {'$scope': $scope});
      });
    }]
  };
  

});
