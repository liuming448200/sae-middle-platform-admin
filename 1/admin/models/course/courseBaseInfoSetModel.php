<?php
require(WEB_ROOT . 'models/extra/AjaxModel.php');
require(WEB_ROOT . 'models/api/courseBase.php');

class courseBaseInfoSetModel extends AjaxModel {

	protected $need_login = true;

	public function GetResponse_ () {
		$uri = $_SERVER['REQUEST_URI'];
    $info = parse_url($uri);
    $action = substr($info['path'], strripos($info['path'], '/') + 1);
    switch ($action) {
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

	private function createAction () {

	}

	private function updateAction () {

	}

	private function deleteAction () {
		
	}
}
