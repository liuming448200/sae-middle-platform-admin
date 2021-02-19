define('B:widget/pages/main/auth/menu/contentTypeService', function(require, exports, module) {

  angular.module('eduApp').factory('contentTypeService', function () {
  
  	var types = [];
  
  	var methods = {};
  
  	methods.set = function (obj) {
  		types = obj;
  	};
  
  	methods.get = function () {
  		return types;
  	};
  
  	return methods;
  });
  

});
