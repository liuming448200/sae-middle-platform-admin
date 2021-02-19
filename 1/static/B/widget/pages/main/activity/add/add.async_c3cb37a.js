define('B:widget/pages/main/activity/add/add.async', function(require, exports, module) {

  return ['$scope', function ($scope) {
  	if (!$scope.$$phase) {
      $scope.$apply();
    }
  }];
  

});
