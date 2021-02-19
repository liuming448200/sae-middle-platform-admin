<?php
require(WEB_ROOT . 'models/extra/AjaxModel.php');
require(WEB_ROOT . 'models/api/songBase.php');

class songBaseInfoSetModel extends AjaxModel {

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
    $language = HttpRequestHelper::GetParam('language');
    if (empty($language)) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '儿歌语言不能为空';
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
      $response->message = '儿歌名称不能为空';
      return $response;
    }
    if (empty($info['content'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '儿歌歌词不能为空';
      return $response;
    }
    if (empty($info['song'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '儿歌歌曲不能为空';
      return $response;
    }
    if (empty($info['pic'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '儿歌图片不能为空';
      return $response;
    }

    $params = array(
      'info'=> json_encode($info)
    );

    $response = songBase::createSongRow($language, $params);

    return $response;
  }

  private function updateAction () {
    $language = HttpRequestHelper::GetParam('language');
    if (empty($language)) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '儿歌语言不能为空';
      return $response;
    }

    $songId = (int)HttpRequestHelper::PostParam('song_id');
    if (empty($songId)) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '儿歌标识不能为空';
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
      $response->message = '儿歌名称不能为空';
      return $response;
    }
    if (empty($info['content'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '儿歌歌词不能为空';
      return $response;
    }
    if (empty($info['song'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '儿歌歌曲不能为空';
      return $response;
    }
    if (empty($info['pic'])) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '儿歌图片不能为空';
      return $response;
    }

    $params = array(
      'song_id' => $songId,
      'info'=> json_encode($info)
    );

    $response = songBase::updateSongRow($language, $params);

    return $response;
  }

  private function deleteAction () {
    $language = HttpRequestHelper::GetParam('language');
    if (empty($language)) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '儿歌语言不能为空';
      return $response;
    }

    $songId = (int)HttpRequestHelper::GetParam('song_id');
    if (empty($songId)) {
      $response = new Response();
      $response->status = ErrorMsg::SORRY_MESSAGE;
      $response->message = '儿歌标识不能为空';
      return $response;
    }

    $params = array();
    $params['language'] = $language;
    $params['song_id'] = $songId;

    $response = songBase::deleteSongRow($params);
    
    return $response;
  }
}
