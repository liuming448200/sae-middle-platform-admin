define('B:widget/pages/login/login', function(require, exports, module) {

  module.exports = {
  	url: '/?from',
  	template: "<!--\r\n    @require \"B:widget/pages/login/login.css\"\r\n-->\r\n\r\n<div class=\"login-container\">\r\n\t<table>\r\n\t\t<td>\r\n\t\t\t<h1>方向教育</h1>\r\n\t\t\t<div class=\"well\">\r\n\t\t\t\t<form role=\"form\" name=\"loginForm\" novalidate ng-submit=\"loginSubmit()\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t      <input type=\"text\" class=\"form-control\" name=\"username\" ng-model=\"username\" ng-trim=\"true\" required placeholder=\"请输入手机号码/用户名\">\r\n\t\t\t   \t</div>\r\n\t\t\t   \t<div class=\"form-group\">\r\n\t\t\t      <input type=\"password\" class=\"form-control\" name=\"password\" ng-model=\"password\" ng-trim=\"true\" required ng-minlength=\"6\" ng-maxlength=\"16\" \r\n\t\t\t         placeholder=\"请输入登录密码\">\r\n\t\t\t   \t</div>\r\n\t\t\t   \t<div class=\"form-group\">\r\n\t          <div class=\"login-btn\">\r\n\t            <button type=\"submit\" class=\"btn btn-success btn-lg\">登录</button>\r\n\t          </div>\r\n\t        </div>\r\n\t\t\t\t</form>\r\n\t\t\t\t<div class=\"down-container\">\r\n\t\t\t\t\t<a ui-sref=\"reset\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-link\">忘记密码</button>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</td>\r\n\t</table>\r\n</div>\r\n",
  	controller: ['$scope', '$injector', function ($scope, $injector) {
    	require.async(['B:widget/pages/login/login.async'], function(ctrl) {
  			$injector.invoke(ctrl, this, {'$scope': $scope});
  		});
    }]
  };
  

});
