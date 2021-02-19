<?php
require(WEB_ROOT . 'models/extra/AjaxModel.php');
require(WEB_ROOT . 'models/api/contentBase.php');

class contentBaseInfoModel extends AjaxModel {

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
		$tid = (int)HttpRequestHelper::GetParam('tid');
    if (empty($tid)) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '内容标识不能为空';
      return $response;
    }

    $fields = HttpRequestHelper::GetParam('fieldsList');

    $params = array();
    $params['tid'] = $tid;
    if (!empty($fields)) {
      $params['fieldsList'] = $fields;
    }

    $response = contentBase::getContentRow($params);

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

    $response = contentBase::getContentList($params);

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
    
    if (empty($info['typename'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '内容名称不能为空';
      return $response;
    }

    $params = array(
      'info'=> json_encode($info)
    );

    $response = contentBase::createContentRow($params);

    return $response;
	}

	private function updateAction () {
		$tid = (int)HttpRequestHelper::PostParam('tid');
    if (empty($tid)) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '内容标识不能为空';
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
    
    if (empty($info['typename'])) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '内容名称不能为空';
      return $response;
    }

    $params = array(
      'tid' => $tid,
      'info'=> json_encode($info)
    );

    $response = contentBase::updateContentRow($params);

    return $response;
	}

	private function deleteAction () {
		$tid = (int)HttpRequestHelper::GetParam('tid');
    if (empty($tid)) {
    	$response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '内容标识不能为空';
      return $response;
    }

    $params = array(
      'tid' => $tid
    );

    $response = contentBase::deleteContentRow($params);
    
    return $response;
	}
}
