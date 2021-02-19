<?php

class wordCategory {
    public static function getWordCategoryRow ($params) {
    	$url = APIMap::getAPI(APIConfig::WORD_CATEGORY);
        $url = $url . '/get';
        $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

        $response = ApiBase::getInstance()->ApiGet($url, false);

        return $response;
    }

	public static function getWordCategoryList ($params) {
		$url = APIMap::getAPI(APIConfig::WORD_CATEGORY);
        $url = $url . '/getlist';
        $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

        $response = ApiBase::getInstance()->ApiGet($url, false);

        return $response;
	}

	public static function createWordCategoryRow ($params) {
		$url = APIMap::getAPI(APIConfig::WORD_CATEGORY_SET);
        $url = $url . '/create';

        $response = ApiBase::getInstance()->ApiPost($url, $params);

        return $response;
	}

	public static function updateWordCategoryRow ($params) {
		$url = APIMap::getAPI(APIConfig::WORD_CATEGORY_SET);
        $url = $url . '/update';

        $response = ApiBase::getInstance()->ApiPost($url, $params);

        return $response;
	}

	public static function deleteWordCategoryRow ($params) {
		$url = APIMap::getAPI(APIConfig::WORD_CATEGORY_SET);
        $url = $url . '/delete';
        $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

        $response = ApiBase::getInstance()->ApiGet($url);
        
        return $response;
	}
}
