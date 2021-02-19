define('B:widget/pages/main/auth/user/usergroupListService', function(require, exports, module) {

  angular.module('eduApp').factory('usergroupListService', function () {
  
  	var usergroups = [];
  
  	var methods = {};
  
  	methods.set = function (obj) {
  		usergroups = obj;
  	};
  
  	methods.get = function () {
  		return usergroups;
  	};
  
  	return methods;
  });
  

});
