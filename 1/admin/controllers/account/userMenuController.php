<?php
require(WEB_ROOT . 'controllers/extra/WebAjaxController.php');
require(WEB_ROOT . 'models/account/userMenuModel.php');

class userMenuController extends WebAjaxController {

	protected function GetResponse_ () {
    $model = new userMenuModel();
    return $model->GetResponse();
  }
}
