<?php
require(WEB_ROOT . 'models/extra/AjaxModel.php');
require(WEB_ROOT . 'models/api/authAction.php');

class actionModel extends AjaxModel {

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
		$action_id = (int)HttpRequestHelper::GetParam('action_id');
    if (empty($action_id)) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '权限标识不能为空';
      return $response;
    }

    $fields = HttpRequestHelper::GetParam('fieldsList');

    $params = array();
    $params['action_id'] = $action_id;
    if (!empty($fields)) {
      $params['fieldsList'] = $fields;
    }

    $response = authAction::getActionRow($params);

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

    $response = authAction::getActionList($params);

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
    
    if (empty($info['menu_id'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '菜单标识不能为空';
      return $response;
    }
    if (empty($info['action_name'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '权限名称不能为空';
      return $response;
    }
    if (empty($info['action'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '权限字符串不能为空';
      return $response;
    }

    $params = array(
      'info'=> json_encode($info)
    );

    $response = authAction::createAcitonRow($params);

    return $response;
	}

	private function updateAction () {
		$action_id = (int)HttpRequestHelper::PostParam('action_id');
    if (empty($action_id)) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '权限标识不能为空';
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
    
    if (empty($info['menu_id'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '菜单标识不能为空';
      return $response;
    }
    if (empty($info['action_name'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '权限名称不能为空';
      return $response;
    }
    if (empty($info['action'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '权限字符串不能为空';
      return $response;
    }

    $params = array(
      'action_id' => $action_id,
      'info'=> json_encode($info)
    );

    $response = authAction::updateActionRow($params);

    return $response;
	}

	private function deleteAction () {
		$action_id = (int)HttpRequestHelper::GetParam('action_id');
    if (empty($action_id)) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '权限标识不能为空';
      return $response;
    }

    $params = array(
      'action_id' => $action_id
    );

    $response = authAction::deleteActionRow($params);
    
    return $response;
	}
}
