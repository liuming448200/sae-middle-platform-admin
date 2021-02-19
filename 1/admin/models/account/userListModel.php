<?php
require(WEB_ROOT . 'models/extra/AjaxModel.php');

class userListModel extends AjaxModel {

	protected $need_login = true;

	public function GetResponse_ () {
		$limit = (int)HttpRequestHelper::GetParam('limit');
    $offset = (int)HttpRequestHelper::GetParam('offset');

    $fields = HttpRequestHelper::GetParam('fieldsList');

    $params = array();
    if (!empty($limit)) {
      $params['limit'] = $limit;
    }
    if (!empty($offset)) {
      $params['offset'] = $offset;
    }
    if (!empty($fields)) {
      $params['fieldsList'] = $fields;
    }

    $response = Ucenter::getUserList($params);

    return $response;
	}
}
