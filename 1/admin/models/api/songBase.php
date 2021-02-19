<?php

class songBase {
  public static function getSongRow ($params) {
    $url = APIMap::getAPI(APIConfig::SONG_BASE);
    $url = $url . '/get';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url, false);

    return $response;
  }

  public static function getSongList ($params) {
    $url = APIMap::getAPI(APIConfig::SONG_BASE);
    $url = $url . '/getlist';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url, false);

    return $response;
  }

  public static function createSongRow ($language, $params) {
    $url = APIMap::getAPI(APIConfig::SONG_BASE_SET);
    $url = $url . '/create' . '?language=' . $language;

    $response = ApiBase::getInstance()->ApiPost($url, $params);

    return $response;
  }

  public static function updateSongRow ($language, $params) {
    $url = APIMap::getAPI(APIConfig::SONG_BASE_SET);
    $url = $url . '/update' . '?language=' . $language;

    $response = ApiBase::getInstance()->ApiPost($url, $params);

    return $response;
  }

  public static function deleteSongRow ($params) {
    $url = APIMap::getAPI(APIConfig::SONG_BASE_SET);
    $url = $url . '/delete';
    $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

    $response = ApiBase::getInstance()->ApiGet($url);
    
    return $response;
  }
}
