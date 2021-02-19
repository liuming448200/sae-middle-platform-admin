<?php
require(WEB_ROOT . 'models/extra/AjaxModel.php');
require(WEB_ROOT . 'models/api/authMenu.php');

class menuModel extends AjaxModel {

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
		$menu_id = (int)HttpRequestHelper::GetParam('menu_id');
		if (empty($menu_id)) {
			$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '菜单标识不能为空';
      return $response;
    }

    $fields = HttpRequestHelper::GetParam('fieldsList');

    $params = array();
    $params['menu_id'] = $menu_id;
    if (!empty($fields)) {
      $params['fieldsList'] = $fields;
    }

    $response = authMenu::getMenuRow($params);

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

    $response = authMenu::getMenuList($params);

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
    
    if (empty($info['tid'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '内容标识不能为空';
      return $response;
    }
    if (empty($info['menu_name'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '菜单名称不能为空';
      return $response;
    }

    $params = array(
      'info'=> json_encode($info)
    );

    $response = authMenu::createMenuRow($params);

    return $response;
	}

	private function updateAction () {
		$menu_id = (int)HttpRequestHelper::PostParam('menu_id');
		if (empty($menu_id)) {
			$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '菜单标识不能为空';
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
    
    if (empty($info['tid'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '内容标识不能为空';
      return $response;
    }
    if (empty($info['menu_name'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '菜单名称不能为空';
      return $response;
    }

    $params = array(
      'menu_id' => $menu_id,
      'info'=> json_encode($info)
    );

    $response = authMenu::updateMenuRow($params);

    return $response;
	}

	private function deleteAction () {
		$menu_id = (int)HttpRequestHelper::GetParam('menu_id');
    if (empty($menu_id)) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '菜单标识不能为空';
      return $response;
    }

    $params = array(
      'menu_id' => $menu_id
    );

    $response = authMenu::deleteMenuRow($params);
    
    return $response;
	}
}
