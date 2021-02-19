<?php
require(WEB_ROOT . 'controllers/extra/WebAjaxController.php');
require(WEB_ROOT . 'models/account/userListModel.php');

class userListController extends WebAjaxController {

	protected function GetResponse_ () {
    $model = new userListModel();
    return $model->GetResponse();
  }
}
