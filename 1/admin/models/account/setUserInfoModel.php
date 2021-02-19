<?php
require(WEB_ROOT . 'models/extra/AjaxModel.php');

class setUserInfoModel extends AjaxModel {

	protected $need_login = true;

	public function GetResponse_ () {
		$uid = HttpRequestHelper::PostParam('uid');
    if (empty($uid)) {
    	$response = new Response();
      $response->status = ErrorMsg::USER_UID_EMPTY;
      $response->message = ErrorMsg::$error_msg_array[ErrorMsg::USER_UID_EMPTY];
      return $response;
    }

    $usergroups = HttpRequestHelper::PostParam('usergroups');
    if (empty($usergroups)) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '所属用户组不能为空';
      return;
    }

    $response = Ucenter::setUserInfo($uid, $usergroups);

    return $response;
	}
}
