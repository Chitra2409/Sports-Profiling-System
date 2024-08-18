

<?php

$server="saas.cbfa9gloikah.ap-south-1.rds.amazonaws.com";
$username="root";
$password="rootroot";
$dbname="saas";
$con=mysqli_connect($server,$username,$password,$dbname);
if(!$con){
    echo"not connected";
}


$username=$_POST['username'];
$password=$_POST['password'];
$email=$_POST['email'];


$check=  "select * from  `credentials` where username='$username'";
$resultset1 = mysqli_query($con,$check);
$count= mysqli_num_rows($resultset1);

if($count==0){
    $hash=password_hash($password,PASSWORD_DEFAULT);
    $credentials= "INSERT INTO `credentials`(`username`, `password`,`email`) VALUES ('$username','$hash','$email')";


    $resultset = mysqli_query($con,$credentials);
     
  }
  else{
      echo "<script>alert('username already exists');</script>";
      include('create.html');
  }





if($resultset){
    echo "<script>alert('Submitted');</script>";
    include('playersignup_otp.html');
}




?>
