define('B:widget/pages/main/activity/preview/preview.async', function(require, exports, module) {

  return ['$scope', function ($scope) {
  	if (!$scope.$$phase) {
      $scope.$apply();
    }
  }];
  

});
