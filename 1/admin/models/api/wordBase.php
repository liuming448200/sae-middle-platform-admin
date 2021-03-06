<?php

class wordBase {
	public static function getWordRow ($params) {
		$url = APIMap::getAPI(APIConfig::WORD_BASE);
                $url = $url . '/get';
                $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

                $response = ApiBase::getInstance()->ApiGet($url, false);

                return $response;
	}

	public static function getWordList ($params) {
		$url = APIMap::getAPI(APIConfig::WORD_BASE);
                $url = $url . '/getlist';
                $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

                $response = ApiBase::getInstance()->ApiGet($url, false);

                return $response;
	}

	public static function createWordRow ($params) {
		$url = APIMap::getAPI(APIConfig::WORD_BASE_SET);
                $url = $url . '/create';

                $response = ApiBase::getInstance()->ApiPost($url, $params);

                return $response;
	}

	public static function updateWordRow ($params) {
		$url = APIMap::getAPI(APIConfig::WORD_BASE_SET);
                $url = $url . '/update';

                $response = ApiBase::getInstance()->ApiPost($url, $params);

                return $response;
	}

	public static function deleteWordRow ($params) {
		$url = APIMap::getAPI(APIConfig::WORD_BASE_SET);
                $url = $url . '/delete';
                $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

                $response = ApiBase::getInstance()->ApiGet($url);
                
                return $response;
	}
}
