define('B:widget/pages/main/activity/list/list.async', function(require, exports, module) {

  return ['$scope', function ($scope) {
  	if (!$scope.$$phase) {
      $scope.$apply();
    }
  }];
  

});
