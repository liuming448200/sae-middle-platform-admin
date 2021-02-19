<?php
require(WEB_ROOT . 'models/extra/PageModel.php');

class IndexModel extends PageModel {
  public function GetResponse_ () {
    $response = new Response();
    $response->data = array('app_role' => 'admin');
    return $response;
  }
}
