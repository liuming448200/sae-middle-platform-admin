define('B:widget/pages/main/auth/action/menuListService', function(require, exports, module) {

  angular.module('eduApp').factory('menuListService', function () {
  
  	var menus = [];
  
  	var methods = {};
  
  	methods.set = function (obj) {
  		menus = obj;
  	};
  
  	methods.get = function () {
  		return menus;
  	};
  
  	return methods;
  });
  

});
