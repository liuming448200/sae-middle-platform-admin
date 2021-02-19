define('B:widget/pages/main/english/detail/wordTypeService', function(require, exports, module) {

  angular.module('eduApp').factory('wordTypeService', function () {
  
  	var categories = [];
  
  	var methods = {};
  
  	methods.set = function (obj) {
  		categories = obj;
  	};
  
  	methods.get = function () {
  		return categories;
  	};
  
  	return methods;
  });
  

});
