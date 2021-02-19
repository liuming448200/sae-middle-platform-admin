<?php

abstract class RouterConfig {
  const INDEX = '/';
  const USER_MOBILE_CHECK = '/account/mobileCheck';
  const ADD_USER = '/account/addUser';
  const USER_LOGIN = '/account/login';
  const USER_LOGOUT = '/account/logout';
  const USER_INFO = '/account/userInfo';
  const USER_LIST = '/account/userList';
  const SET_USER_STATUS = '/account/setUserStatus';
  const SET_USER_INFO = '/account/setUserInfo';
  const USER_RESET_PASSWORD = '/account/resetPassword';
  const USER_MEMU = '/account/userMenu';
  const STORY_BASE = '/story/storyBaseInfo';
  const STORY_BASE_SET = '/story/storyBaseInfoSet';
  const SONG_BASE = '/song/songBaseInfo';
  const SONG_BASE_SET = '/song/songBaseInfoSet';
  const WORD_CATEGORY = '/word/category';
  const WORD_CATEGORY_SET = '/word/categorySet';
  const WORD_BASE = '/word/wordBaseInfo';
  const WORD_BASE_SET = '/word/wordBaseInfoSet';
  const COURSE_BASE = '/course/courseBaseInfo';
  const COURSE_BASE_SET = '/course/courseBaseInfoSet';
  const ACTIVITY_BASE = '/activity/activityBaseInfo';
  const ACTIVITY_BASE_SET = 'activity/activityBaseInfoSet';
  const UPLOAD_PIC = '/general/uploadpicture';
  const UPLOAD_FILE = '/general/uploadfile';
  const DOWNLOAD_FILE = '/general/downloadfile';
  const APP_BASE = '/app/appBaseInfo';
  const CONTENT_BASE = '/content/contentBaseInfo';
  const AUTH_MENU = '/auth/menu';
  const AUTH_ACTION = '/auth/action';
  const AUTH_USER_GROUP = '/auth/usergroup';
  const USER_SEND_SMS = '/general/sendSMS';
  const USER_VERIFY_SMS = '/general/verifySMS';
}

abstract class RouterMap {
  public static $router = array(
    RouterConfig::INDEX  => 'IndexController',
    RouterConfig::USER_MOBILE_CHECK => 'account/mobileCheckController',
    RouterConfig::ADD_USER => 'account/addUserController',
    RouterConfig::USER_LOGIN => 'account/LoginController',
    RouterConfig::USER_LOGOUT => 'account/LogoutController',
    RouterConfig::USER_INFO => 'account/userInfoController',
    RouterConfig::USER_LIST => 'account/userListController',
    RouterConfig::SET_USER_STATUS => 'account/setUserStatusController',
    RouterConfig::SET_USER_INFO => 'account/setUserInfoController',
    RouterConfig::USER_RESET_PASSWORD => 'account/resetPasswordController',
    RouterConfig::USER_MEMU => 'account/userMenuController',
    RouterConfig::STORY_BASE => 'story/storyBaseInfoController',
    RouterConfig::STORY_BASE_SET => 'story/storyBaseInfoSetController',
    RouterConfig::SONG_BASE => 'song/songBaseInfoController',
    RouterConfig::SONG_BASE_SET => 'song/songBaseInfoSetController',
    RouterConfig::WORD_CATEGORY => 'word/wordCategoryController',
    RouterConfig::WORD_CATEGORY_SET => 'word/wordCategorySetController',
    RouterConfig::WORD_BASE => 'word/wordBaseInfoController',
    RouterConfig::WORD_BASE_SET => 'word/wordBaseInfoSetController',
    RouterConfig::COURSE_BASE => 'course/courseBaseInfoController',
    RouterConfig::COURSE_BASE_SET => 'course/courseBaseInfoSetController',
    RouterConfig::ACTIVITY_BASE => 'activity/activityBaseInfoController',
    RouterConfig::ACTIVITY_BASE_SET => 'activity/activityBaseInfoSetController',
    RouterConfig::UPLOAD_PIC => 'general/UploadPictureController',
    RouterConfig::UPLOAD_FILE => 'general/UploadFileController',
    RouterConfig::DOWNLOAD_FILE => 'general/DownloadFileController',
    RouterConfig::APP_BASE => 'app/appBaseInfoController',
    RouterConfig::CONTENT_BASE => 'content/contentBaseInfoController',
    RouterConfig::AUTH_MENU => 'auth/menuController',
    RouterConfig::AUTH_ACTION => 'auth/actionController',
    RouterConfig::AUTH_USER_GROUP => 'auth/usergroupController',
    RouterConfig::USER_SEND_SMS => 'general/sendSMSController',
    RouterConfig::USER_VERIFY_SMS => 'general/verifySMSController'
  );
}

abstract class APIConfig {
  const USER_MOBILE_CHECK = 'account/admin/v1/mobileCheck';
  const ADD_USER = 'account/admin/v1/addUser';
  const USER_LOGIN = 'account/admin/v1/login';
  const USER_INFO = 'account/admin/v1/userInfo';
  const USER_LIST = 'account/admin/v1/userList';
  const SET_USER_STATUS = 'account/admin/v1/setUserStatus';
  const SET_USER_INFO = 'account/admin/v1/setUserInfo';
  const USER_RESET_PASSWORD = 'account/admin/v1/resetPassword';
  const USER_MEMU = 'account/admin/v1/userMenu';
  const STORY_BASE = 'story/v1/baseinfo';
  const STORY_BASE_SET = 'story/v1/baseinfoSet';
  const SONG_BASE = 'song/v1/baseinfo';
  const SONG_BASE_SET = 'song/v1/baseinfoSet';
  const WORD_CATEGORY = 'word/v1/category';
  const WORD_CATEGORY_SET = 'word/v1/categorySet';
  const WORD_BASE = 'word/v1/baseinfo';
  const WORD_BASE_SET = 'word/v1/baseinfoSet';
  const COURSE_BASE = 'course/v1/baseinfo';
  const COURSE_BASE_SET = 'course/v1/baseinfoSet';
  const ACTIVITY_BASE = 'activity/v1/baseinfo';
  const ACTIVITY_BASE_SET = 'activity/v1/baseinfoSet';
  const UPLOAD_PIC = 'general/uploadpicture';
  const UPLOAD_FILE = 'general/uploadfile';
  const DOWNLOAD_FILE = 'general/downloadfile';
  const APP_BASE = 'app/baseinfo';
  const CONTENT_BASE = 'content/baseinfo';
  const AUTH_MENU = 'auth/menu';
  const AUTH_ACTION = 'auth/action';
  const AUTH_USER_GROUP = 'auth/usergroup';
  const USER_SEND_SMS = 'general/sendSMS';
  const USER_VERIFY_SMS = 'general/verifySMS';
}

abstract class APIMap {
  public static function getAPI ($name) {
    return GATEWAY_URL_ROOT . $name;
  }
}
