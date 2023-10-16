<?php 

// $db = new PDO("sqlite:".__DIR__."/fuelalert_db.sqlite3");

    try {

        include_once('dotenv.php');

        $db = new PDO("sqlite:".__DIR__.$DBSEED);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }   catch (Exception $e) {
        echo "Unable to connect";
        echo $e->getMessage();
        exit;
    }
     
    //  echo "Connected to the database"; 

?>