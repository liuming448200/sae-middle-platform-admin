<?php
require(WEB_ROOT . 'models/extra/AjaxModel.php');

class setUserStatusModel extends AjaxModel {

	protected $need_login = true;

	public function GetResponse_ () {
		$uid = HttpRequestHelper::PostParam('uid');
    if (empty($uid)) {
    	$response = new Response();
      $response->status = ErrorMsg::USER_UID_EMPTY;
      $response->message = ErrorMsg::$error_msg_array[ErrorMsg::USER_UID_EMPTY];
      return $response;
    }

    $status = HttpRequestHelper::PostParam('status');
    if (!isset($status)) {
    	$response = new Response();
    	$response->status = ErrorMsg::SORRY_MESSAGE;
    	$response->message = '用户状态信息不能为空';
      return $response;
    }

    $response = Ucenter::setUserStatus($uid, $status);

    return $response;
	}
}
