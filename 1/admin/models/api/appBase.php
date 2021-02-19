<?php

class appBase {
	public static function getAppList ($params) {
		$url = APIMap::getAPI(APIConfig::APP_BASE);
        $url = $url . '/getlist';
        $url = is_array($params) ? $url.'?'.http_build_query($params) : $url.'?'.$params;

        $response = ApiBase::getInstance()->ApiGet($url);

        return $response;
	}
}
