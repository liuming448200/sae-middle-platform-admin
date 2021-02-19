define('B:widget/pages/main/activity/edit/edit.async', function(require, exports, module) {

  return ['$scope', function ($scope) {
  	if (!$scope.$$phase) {
      $scope.$apply();
    }
  }];
  

});
