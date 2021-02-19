define('B:widget/pages/main/course/edit/edit', function(require, exports, module) {

  module.exports = {
    url: '/edit/:course_id?back',
    template: "<!--\r\n    @require \"B:widget/pages/main/course/edit/edit.css\"\r\n-->\r\n\r\n<div class=\"edit-container\">\r\n  编辑课程\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
      require.async(['B:widget/pages/main/course/edit/edit.async'], function(ctrl) {
        $injector.invoke(ctrl, this, {'$scope': $scope});
      });
    }]
  };
  

});
