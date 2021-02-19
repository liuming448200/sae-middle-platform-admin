<?php

class authAction {
	public static function getActionRow ($params) {
    $url = APIMap::getAPI(APIConfig::AUTH_ACTION);
    $url = $url . '/get';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url);

    return $response;
  }

  public static function getActionList ($params) {
    $url = APIMap::getAPI(APIConfig::AUTH_ACTION);
    $url = $url . '/getlist';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url);

    return $response;
  }

  public static function createAcitonRow ($params) {
    $url = APIMap::getAPI(APIConfig::AUTH_ACTION);
    $url = $url . '/create';

    $response = ApiBase::getInstance()->ApiPost($url, $params);

    return $response;
  }

  public static function updateActionRow ($params) {
    $url = APIMap::getAPI(APIConfig::AUTH_ACTION);
    $url = $url . '/update';

    $response = ApiBase::getInstance()->ApiPost($url, $params);

    return $response;
  }

  public static function deleteActionRow ($params) {
    $url = APIMap::getAPI(APIConfig::AUTH_ACTION);
    $url = $url . '/delete';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url);
    
    return $response;
  }
}
