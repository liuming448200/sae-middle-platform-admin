<?php

class contentBase {
	public static function getContentRow ($params) {
    $url = APIMap::getAPI(APIConfig::CONTENT_BASE);
    $url = $url . '/get';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url);

    return $response;
  }

  public static function getContentList ($params) {
    $url = APIMap::getAPI(APIConfig::CONTENT_BASE);
    $url = $url . '/getlist';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url);

    return $response;
  }

  public static function createContentRow ($params) {
    $url = APIMap::getAPI(APIConfig::CONTENT_BASE);
    $url = $url . '/create';

    $response = ApiBase::getInstance()->ApiPost($url, $params);

    return $response;
  }

  public static function updateContentRow ($params) {
    $url = APIMap::getAPI(APIConfig::CONTENT_BASE);
    $url = $url . '/update';

    $response = ApiBase::getInstance()->ApiPost($url, $params);

    return $response;
  }

  public static function deleteContentRow ($params) {
    $url = APIMap::getAPI(APIConfig::CONTENT_BASE);
    $url = $url . '/delete';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url);
    
    return $response;
  }
}
