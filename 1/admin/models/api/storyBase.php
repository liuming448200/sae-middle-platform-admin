<?php

class storyBase {
  public static function getStoryRow ($params) {
    $url = APIMap::getAPI(APIConfig::STORY_BASE);
    $url = $url . '/get';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url, false);

    return $response;
  }

  public static function getStoryList ($params) {
    $url = APIMap::getAPI(APIConfig::STORY_BASE);
    $url = $url . '/getlist';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url, false);

    return $response;
  }

  public static function createStoryRow ($params) {
    $url = APIMap::getAPI(APIConfig::STORY_BASE_SET);
    $url = $url . '/create';

    $response = ApiBase::getInstance()->ApiPost($url, $params);

    return $response;
  }

  public static function updateStoryRow ($params) {
    $url = APIMap::getAPI(APIConfig::STORY_BASE_SET);
    $url = $url . '/update';

    $response = ApiBase::getInstance()->ApiPost($url, $params);

    return $response;
  }

  public static function deleteStoryRow ($params) {
    $url = APIMap::getAPI(APIConfig::STORY_BASE_SET);
    $url = $url . '/delete';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url);
    
    return $response;
  }
}
