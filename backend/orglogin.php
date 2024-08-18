

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

$check= "select * from  `orgcredentials` where username= '$username'  ";

   

$resultset = mysqli_query($con,$check);

$count= mysqli_num_rows($resultset);
$row=mysqli_fetch_assoc($resultset);




if($username==$row['username']and password_verify($password,$row['password'])){

    header("Location: http://localhost/saas/orglogin_otp.html");
    echo "<script>alert('Login successful');</script>";
   
}
else{
    echo "<script>alert('Invalid username or password');</script>";
    include('orglogin.html');
}


?>
