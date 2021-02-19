<?php
require(WEB_ROOT . 'models/extra/AjaxModel.php');

class userMenuModel extends AjaxModel {

	protected $need_login = true;

	public function GetResponse_ () {
		$usergroups = HttpRequestHelper::GetParam('usergroups');
		if (empty($usergroups)) {
			$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '用户所属的用户组不能为空';
      return $response;
    }

    $response = Ucenter::getUserMenu($usergroups);

    return $response;
	}
}
