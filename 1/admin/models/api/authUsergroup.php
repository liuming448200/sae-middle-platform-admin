<?php

class authUsergroup {
	public static function getUsergroupRow ($params) {
    $url = APIMap::getAPI(APIConfig::AUTH_USER_GROUP);
    $url = $url . '/get';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url);

    return $response;
  }

  public static function getUsergroupList ($params) {
    $url = APIMap::getAPI(APIConfig::AUTH_USER_GROUP);
    $url = $url . '/getlist';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url);

    return $response;
  }

  public static function createUsergroupRow ($params) {
    $url = APIMap::getAPI(APIConfig::AUTH_USER_GROUP);
    $url = $url . '/create';

    $response = ApiBase::getInstance()->ApiPost($url, $params);

    return $response;
  }

  public static function updateUsergroupRow ($params) {
    $url = APIMap::getAPI(APIConfig::AUTH_USER_GROUP);
    $url = $url . '/update';

    $response = ApiBase::getInstance()->ApiPost($url, $params);

    return $response;
  }

  public static function deleteUsergroupRow ($params) {
    $url = APIMap::getAPI(APIConfig::AUTH_USER_GROUP);
    $url = $url . '/delete';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url);
    
    return $response;
  }
}
