<?php


$serverName = "10.123.0.54";
$username = "tnearmyer1";
$password = "tn42238665";
$databaseName = "ei3";

try {
    $conn = new PDO("mysql:host=$serverName;dbname=$databaseName", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully"; 
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }



?>