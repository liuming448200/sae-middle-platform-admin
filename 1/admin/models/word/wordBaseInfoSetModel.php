<?php
require(WEB_ROOT . 'models/extra/AjaxModel.php');
require(WEB_ROOT . 'models/api/wordBase.php');

class wordBaseInfoSetModel extends AjaxModel {

  protected $need_login = true;

  public function GetResponse_ () {
    $uri = $_SERVER['REQUEST_URI'];
    $info = parse_url($uri);
    $action = substr($info['path'], strripos($info['path'], '/') + 1);
    switch ($action) {
      case 'create': //添加详情
        $response = $this->createAction();
        break;
      case 'update': //更新详情
        $response = $this->updateAction();
        break;
      case 'delete': //删除详情
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
    
    if (empty($info['category_id'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词分类标识不能为空';
      return $response;
    }
    if (empty($info['english'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词英文不能为空';
      return $response;
    }
    if (empty($info['chinese'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词中文不能为空';
      return $response;
    }
    if (empty($info['example_en'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词例句不能为空';
      return $response;
    }
    if (empty($info['example_cn'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词例句中文不能为空';
      return $response;
    }
    if (empty($info['pic'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词图片不能为空';
      return $response;
    }

    $params = array(
      'info'=> json_encode($info)
    );

    $response = wordBase::createWordRow($params);

    return $response;
  }

  private function updateAction () {
    $wordId = (int)HttpRequestHelper::PostParam('word_id');
    if (empty($wordId)) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词标识不能为空';
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
    
    if (empty($info['category_id'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词分类标识不能为空';
      return $response;
    }
    if (empty($info['english'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词英文不能为空';
      return $response;
    }
    if (empty($info['chinese'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词中文不能为空';
      return $response;
    }
    if (empty($info['example_en'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词例句不能为空';
      return $response;
    }
    if (empty($info['example_cn'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词例句中文不能为空';
      return $response;
    }
    if (empty($info['pic'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词图片不能为空';
      return $response;
    }

    $params = array(
      'word_id' => $wordId,
      'info'=> json_encode($info)
    );

    $response = wordBase::updateWordRow($params);

    return $response;
  }

  private function deleteAction () {
    $wordId = (int)HttpRequestHelper::GetParam('word_id');
    if (empty($wordId)) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词标识不能为空';
      return $response;
    }

    $params = array(
      'word_id' => $wordId
    );

    $response = wordBase::deleteWordRow($params);
    
    return $response;
  }
}
