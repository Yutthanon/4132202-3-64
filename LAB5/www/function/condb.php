<?php

$host = "mysql";
$user ="root";
$pass ="1234";
$db = "db_test";

try{
    $mysql = new mysqli($host, $user, $pass, $db);
    $mysql->query("SET NAMES utf8");
}
catch(Exception $e){
    echo $e->getMessage();
}
