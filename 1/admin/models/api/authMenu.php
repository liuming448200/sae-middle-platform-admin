<?php

class authMenu {
	public static function getMenuRow ($params) {
    $url = APIMap::getAPI(APIConfig::AUTH_MENU);
    $url = $url . '/get';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url);

    return $response;
  }

  public static function getMenuList ($params) {
    $url = APIMap::getAPI(APIConfig::AUTH_MENU);
    $url = $url . '/getlist';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url);

    return $response;
  }

  public static function createMenuRow ($params) {
    $url = APIMap::getAPI(APIConfig::AUTH_MENU);
    $url = $url . '/create';

    $response = ApiBase::getInstance()->ApiPost($url, $params);

    return $response;
  }

  public static function updateMenuRow ($params) {
    $url = APIMap::getAPI(APIConfig::AUTH_MENU);
    $url = $url . '/update';

    $response = ApiBase::getInstance()->ApiPost($url, $params);

    return $response;
  }

  public static function deleteMenuRow ($params) {
    $url = APIMap::getAPI(APIConfig::AUTH_MENU);
    $url = $url . '/delete';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url);
    
    return $response;
  }
}
