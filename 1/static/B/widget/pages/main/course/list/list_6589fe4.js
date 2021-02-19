define('B:widget/pages/main/course/list/list', function(require, exports, module) {

  module.exports = {
    url: '/list',
    template: "<!--\r\n    @require \"B:widget/pages/main/course/list/list.css\"\r\n-->\r\n\r\n<div class=\"list-container\">\r\n  课程列表\r\n</div>\r\n",
    controller: ['$scope', '$injector', function ($scope, $injector) {
      require.async(['B:widget/pages/main/course/list/list.async'], function(ctrl) {
        $injector.invoke(ctrl, this, {'$scope': $scope});
      });
    }]
  };
  

});
