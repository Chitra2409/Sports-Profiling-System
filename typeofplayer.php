<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$server="saas.cbfa9gloikah.ap-south-1.rds.amazonaws.com";
$username="root";
$password="rootroot";
$dbname="saas";
$con=mysqli_connect($server,$username,$password,$dbname);
if(!$con){
    echo"not connected";
}


$playertype= $_POST['playertype'];

if($playertype =='batsman'){
    include('batsman.html');
   
    
}
else if($playertype=='bowler'){
    include('bowling.html');
}
else{
    include('allrounder.html');
}



?>