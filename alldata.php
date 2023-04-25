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



$resultset=mysqli_query($con,"select * from data");
$json_array=array();


while($row=mysqli_fetch_assoc($resultset)){
    $json_array[]=$row;
   
}
$encoded=json_encode($json_array);
print($encoded);



?>