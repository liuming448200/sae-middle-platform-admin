<?php
require(WEB_ROOT . 'models/extra/AjaxModel.php');
require(WEB_ROOT . 'models/api/storyBase.php');

class storyBaseInfoSetModel extends AjaxModel {

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
    $info = HttpRequestHelper::PostParam('info');
    $info = json_decode($info, true);
    if (empty($info)) {
      $response = new Response();
      $response->status = ErrorMsg::REQUEST_PARAM_ERROR;
      $response->message = ErrorMsg::$error_msg_array[ErrorMsg::REQUEST_PARAM_ERROR];
      return;
    }
    
    if (empty($info['name'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '故事名称不能为空';
      return $response;
    }
    if (empty($info['content'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '故事内容不能为空';
      return $response;
    }
    if (empty($info['implication'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '故事寓意不能为空';
      return $response;
    }
    if (empty($info['pic'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '故事图片不能为空';
      return $response;
    }

    $params = array(
      'info'=> json_encode($info)
    );

    $response = storyBase::createStoryRow($params);

    return $response;
  }

  private function updateAction () {
    $storyId = (int)HttpRequestHelper::PostParam('story_id');
    if (empty($storyId)) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '故事标识不能为空';
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
    
    if (empty($info['name'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '故事名称不能为空';
      return $response;
    }
    if (empty($info['content'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '故事内容不能为空';
      return $response;
    }
    if (empty($info['implication'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '故事寓意不能为空';
      return $response;
    }
    if (empty($info['pic'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '故事图片不能为空';
      return $response;
    }

    $params = array(
      'story_id' => $storyId,
      'info'=> json_encode($info)
    );

    $response = storyBase::updateStoryRow($params);

    return $response;
  }

  private function deleteAction () {
    $storyId = (int)HttpRequestHelper::GetParam('story_id');
    if (empty($storyId)) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '故事标识不能为空';
      return $response;
    }

    $params = array(
      'story_id' => $storyId
    );

    $response = storyBase::deleteStoryRow($params);
    
    return $response;
  }
}
