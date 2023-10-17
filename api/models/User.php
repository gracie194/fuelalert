<?php
class User{
  
    // database connection and table name
    private $conn;
    private $table_name = "users";
  
    // object properties
    public $id;
    public $firstname;
    public $lastname;
    public $email;
    public $password;
    public $user_code;
    public $verified;
    public $created_at;
    public $updated_at;
  
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }


    // read a single user
    function readUser(){
    
        // select all query
        $query = "SELECT * FROM " . $this->table_name . " WHERE id=" . $this->id;
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // execute query
        $stmt->execute();
    
        return $stmt;
    }

    // read users
    function readUsers(){
    
        // select all query
        $query = "SELECT * FROM " . $this->table_name;
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // execute query
        $stmt->execute();
    
        return $stmt;
    }


    // create user
    function createUser(){
    
        // query to insert record
        $query = "INSERT INTO " . $this->table_name . " (firstname, lastname, email, user_code, verified, password, 
                    created_at, updated_at) VALUES (:firstname, :lastname, :email, :user_code, :verified, :password, 
                    :created_at, :updated_at) ";
    
        // prepare query
        $stmt = $this->conn->prepare($query);
    
        // bind values
        $stmt->bindParam(":firstname", $this->firstname);
        $stmt->bindParam(":lastname", $this->lastname);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":password", $this->password);
        $stmt->bindParam(":user_code", $this->user_code);
        $stmt->bindParam(":verified", $this->verified);
        $stmt->bindParam(":created_at", $this->created_at);
        $stmt->bindParam(":updated_at", $this->updated_at);


    
        // execute query
        if($stmt->execute()){
            return true;
        }
    
        return false;
        
    }

    // update the product
    function updateUser(){

        // update query
        $query = "UPDATE " . $this->table_name . " SET
                    firstname = :firstname,
                    lastname = :lastname,
                    email = :email,
                    verified = :verified,
                    password = :password,
                    updated_at = :updated_at
                WHERE
                    id = :id";
    
        // prepare query statement
        $update_stmt = $this->conn->prepare($query);

   
        // Set and sanitize
        $this->firstname = htmlspecialchars(strip_tags($this->firstname));
        $this->lastname = htmlspecialchars(strip_tags($this->lastname));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->verified = htmlspecialchars(strip_tags($this->verified));
        $this->password = htmlspecialchars(strip_tags($this->password));
        $this->updated_at = date('d-m-Y H:s:ia');

        $this->id=htmlspecialchars(strip_tags($this->id));
    
        // bind new values
        $update_stmt->bindParam(':firstname', $this->firstname);
        $update_stmt->bindParam(':lastname', $this->lastname);
        $update_stmt->bindParam(':email', $this->email);
        $update_stmt->bindParam(':verified', $this->verified);
        $update_stmt->bindParam(':password', $this->password);
        $update_stmt->bindParam(':updated_at', $this->updated_at);
        $update_stmt->bindParam(':id', $this->id);
    
        // execute the query
        if($update_stmt->execute()){
            return true;
        }
    
        return false;
    }

    // delete a user
    function deleteUser($id){
        $this->id = $id;
        // delete query
        $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";
    
        // prepare query
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->id=htmlspecialchars(strip_tags($this->id));
    
        // bind id of record to delete
        $stmt->bindParam(1, $this->id);
    
        // execute query
        if($stmt->execute()){
            return true;
        }
    
        return false;
    }

    // Email verification handler
    public function emailVerify($evcode){

        // update query
        $query = "UPDATE " . $this->table_name . " SET
                    verified = 1
                WHERE
                    user_code = :user_code";
    
        // prepare query statement
        $update_stmt = $this->conn->prepare($query);

   
        // Set and sanitize
        $this->user_code = htmlspecialchars(strip_tags($this->user_code));
    
        // bind new values
        $update_stmt->bindParam(':user_code', $evcode);
    
        // execute the query
        if($update_stmt->execute()){
            return true;
        }
    
        return false;
    }
}
