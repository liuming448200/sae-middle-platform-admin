<?php
require(WEB_ROOT . 'models/extra/AjaxModel.php');
require(WEB_ROOT . 'models/api/authUsergroup.php');

class usergroupModel extends AjaxModel {

	protected $need_login = true;

	public function GetResponse_ () {
		$uri = $_SERVER['REQUEST_URI'];
		$info = parse_url($uri);
		$action = substr($info['path'], strripos($info['path'], '/') + 1);
		switch ($action) {
      case 'get':
        $response = $this->getAction();
        break;
      case 'getlist':
        $response = $this->getListAction();
        break;
      case 'create':
        $response = $this->createAction();
        break;
      case 'update':
        $response = $this->updateAction();
        break;
      case 'delete':
        $response = $this->deleteAction();
        break;
      default:
        $response = new Response();
        $response->status = ErrorMsg::REQUEST_URL_ERROR;
        $response->message = ErrorMsg::$error_msg_array[ErrorMsg::REQUEST_URL_ERROR];
        break;
    }

    return $response;
	}

	private function getAction () {
		$group_id = (int)HttpRequestHelper::GetParam('group_id');
    if (empty($group_id)) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '用户组标识不能为空';
      return $response;
    }

    $fields = HttpRequestHelper::GetParam('fieldsList');

    $params = array();
    $params['group_id'] = $group_id;
    if (!empty($fields)) {
      $params['fieldsList'] = $fields;
    }

    $response = authUsergroup::getUsergroupRow($params);

    return $response;
	}

	private function getListAction () {
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

    $response = authUsergroup::getUsergroupList($params);

    return $response;
	}

	private function createAction () {
		$info = HttpRequestHelper::PostParam('info');
    $info = json_decode($info, true);
    if (empty($info)) {
      $response = new Response();
      $response->status = ErrorMsg::REQUEST_PARAM_ERROR;
      $response->message = ErrorMsg::$error_msg_array[ErrorMsg::REQUEST_PARAM_ERROR];
      return;
    }
    
    if (empty($info['group_name'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '用户组名不能为空';
      return $response;
    }
    if (empty($info['group_info'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '用户组信息不能为空';
      return $response;
    }
    if (empty($info['actions'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '用户组权限不能为空';
      return $response;
    }

    $params = array(
      'info'=> json_encode($info)
    );

    $response = authUsergroup::createUsergroupRow($params);

    return $response;
	}

	private function updateAction () {
		$group_id = (int)HttpRequestHelper::PostParam('group_id');
    if (empty($group_id)) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '用户组标识不能为空';
      return $response;
    }

    $info = HttpRequestHelper::PostParam('info');
    $info = json_decode($info, true);
    if (empty($info)) {
      $response = new Response();
      $response->status = ErrorMsg::REQUEST_PARAM_ERROR;
      $response->message = ErrorMsg::$error_msg_array[ErrorMsg::REQUEST_PARAM_ERROR];
      return;
    }
    
    if (empty($info['group_name'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '用户组名不能为空';
      return $response;
    }
    if (empty($info['group_info'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '用户组信息不能为空';
      return $response;
    }
    if (empty($info['actions'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '用户组权限不能为空';
      return $response;
    }

    $params = array(
      'group_id' => $group_id,
      'info'=> json_encode($info)
    );

    $response = authUsergroup::updateUsergroupRow($params);

    return $response;
	}

	private function deleteAction () {
		$group_id = (int)HttpRequestHelper::GetParam('group_id');
    if (empty($group_id)) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '用户组标识不能为空';
      return $response;
    }

    $params = array(
      'group_id' => $group_id
    );

    $response = authUsergroup::deleteUsergroupRow($params);
    
    return $response;
	}
}
