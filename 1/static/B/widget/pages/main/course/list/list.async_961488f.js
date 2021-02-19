define('B:widget/pages/main/course/list/list.async', function(require, exports, module) {

  return ['$scope', function ($scope) {
    if (!$scope.$$phase) {
      $scope.$apply();
    }
  }];
  

});
