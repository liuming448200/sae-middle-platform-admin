<?php
require(WEB_ROOT . 'models/extra/AjaxModel.php');
require(WEB_ROOT . 'models/api/wordCategory.php');

class wordCategorySetModel extends AjaxModel {

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
    
    if (empty($info['english'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词分类英文不能为空';
      return $response;
    }
    if (empty($info['chinese'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词分类中文不能为空';
      return $response;
    }

    $params = array(
      'info'=> json_encode($info)
    );

    $response = wordCategory::createWordCategoryRow($params);

    return $response;
  }

  private function updateAction () {
    $categoryId = (int)HttpRequestHelper::PostParam('category_id');
    if (empty($categoryId)) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词分类标识不能为空';
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
    
    if (empty($info['english'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词分类英文不能为空';
      return $response;
    }
    if (empty($info['chinese'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词分类中文不能为空';
      return $response;
    }

    $params = array(
      'category_id' => $categoryId,
      'info'=> json_encode($info)
    );

    $response = wordCategory::updateWordCategoryRow($params);

    return $response;
  }

  private function deleteAction () {
    $categoryId = (int)HttpRequestHelper::GetParam('category_id');
    if (empty($categoryId)) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '单词分类标识不能为空';
      return $response;
    }

    $params = array(
      'category_id' => $categoryId
    );

    $response = wordCategory::deleteWordCategoryRow($params);
    
    return $response;
  }
}
