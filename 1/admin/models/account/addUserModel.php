<?php
require(WEB_ROOT . 'models/extra/AjaxModel.php');

class addUserModel extends AjaxModel {

	protected $need_login = true;

	public function GetResponse_ () {
		$mobile = trim(HttpRequestHelper::PostParam('mobile'));
		if (empty($mobile)) {
      $response = new Response();
      $response->status = ErrorMsg::USER_MOBILE_EMPTY;
      $response->message = ErrorMsg::$error_msg_array[ErrorMsg::USER_MOBILE_EMPTY];
      return $response;
    } else if (!Utility::ValidateIsMobile($mobile)) {
			$response = new Response();
      $response->status = ErrorMsg::USER_MOBILE_ERROR;
      $response->message = ErrorMsg::$error_msg_array[ErrorMsg::USER_MOBILE_ERROR];
      return $response;
    }

    $username = trim(HttpRequestHelper::PostParam('username'));
    if (empty($username)) {
      $response = new Response();
      $response->status = ErrorMsg::USER_NAME_EMPTY;
      $response->message = ErrorMsg::$error_msg_array[ErrorMsg::USER_NAME_EMPTY];
      return $response;
    } else if (!Utility::ValidateIsUserName($username)) {
      $response = new Response();
      $response->status = ErrorMsg::USER_NAME_ERROR;
      $response->message = ErrorMsg::$error_msg_array[ErrorMsg::USER_NAME_ERROR];
      return $response;
    }

    $password = trim(HttpRequestHelper::PostParam('password'));
    if (empty($password)) {
      $response = new Response();
      $response->status = ErrorMsg::USER_PASSWD_EMPTY;
      $response->message = ErrorMsg::$error_msg_array[ErrorMsg::USER_PASSWD_EMPTY];
      return $response;
    } else if (!Utility::ValidatePassword($password)) {
    	$response = new Response();
      $response->status = ErrorMsg::USER_PASSWORD_ERROR;
      $response->message = ErrorMsg::$error_msg_array[ErrorMsg::USER_PASSWORD_ERROR];
      return $response;
    }

    $usergroups = HttpRequestHelper::PostParam('usergroups');
    if (empty($usergroups)) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '所属用户组不能为空';
      return;
    }

    $response = Ucenter::addUser($mobile, $username, $password, $usergroups);

    return $response;
	}
}
