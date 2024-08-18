

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
$name=$_POST['name'];
$email=$_POST['email'];
$check=  "select * from  `orgcredentials` where username='$username'";
$resultset1 = mysqli_query($con,$check);
$count= mysqli_num_rows($resultset1);

if($count==0){
    $hash=password_hash($password,PASSWORD_DEFAULT);
    $orgcredentials= "INSERT INTO `orgcredentials`(`username`, `password`, `name`,`email`) VALUES ('$username','$hash','$name','$email')";


    $resultset = mysqli_query($con,$orgcredentials);
     
  }
  else{
      echo "<script>alert('username already exists');</script>";
      include('orgsignup.html');
  }





if($resultset){
    echo "<script>alert('Submitted');</script>";
    header("Location: http://localhost/saas/orgsignup_otp.html");
}


?>

