<?php

    class Database{
    
        // specify your own database credentials
        private $host = "";
        private $db_name = "";
        private $username = "";
        private $password = "";
        public $conn;
    
        // get the database connection
        public function getConnection(){

            include_once('dotenv.php');
            $this->host = $HOST;
            $this->db_name = $DB_NAME;
            $this->username = $USERNAME;
            $this->password = $PASSWORD;

            $this->conn = null;
    
            try{
                $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
                $this->conn->exec("set names utf8");
            }catch(PDOException $exception){
                echo "Connection error: " . $exception->getMessage();
            }
    
            return $this->conn;
        }
    }
?>