define('B:widget/pages/main/story/storyService', function(require, exports, module) {

  angular.module('eduApp').factory('storyService', function () {
  
  	var story = {};
  
  	var methods = {};
  
  	methods.set = function (obj) {
  		story = obj;
  	};
  
  	methods.get = function () {
  		return story;
  	};
  
  	return methods;
  });
  

});
