<?php
include('../config/autoload.php');
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  
// prepare user object
$user = new User($db);
  
// get user id
$data = json_decode(file_get_contents("php://input"));
  
// set user id to be deleted
$user_id = $data->id;

// Check if user_id provided is valid
if($user_id == null || !is_numeric($user_id)){
    // No valid user id provided
  
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no products found
    echo json_encode(
        array("message" => "Plaese provide a valid User ID")
    );

    return;
}

// Check if user exists
$userCheck = $user->readUser($user_id);

if($userCheck->rowCount() == 0){
    // No valid user id provided
  
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no products found
    echo json_encode(
        array("message" => "User with ID:$user_id does not exist")
    );

    return;
}
  
// delete the user
if($user->deleteUser($user_id)){
  
    // set response code - 200 ok
    http_response_code(200);
  
    // tell the user
    echo json_encode(array("message" => "user was deleted."));
}
  
// if unable to delete the user
else{
  
    // set response code - 503 service unavailable
    http_response_code(503);
  
    // tell the user
    echo json_encode(array("message" => "Unable to delete user."));
}
?>