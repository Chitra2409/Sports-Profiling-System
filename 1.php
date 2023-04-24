

<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$server="saas.cbfa9gloikah.ap-south-1.rds.amazonaws.com";
$username="root";
$password="rootroot";
$dbname="saas";
$conn=mysqli_connect($server,$username,$password,$dbname);

if(!$conn){
    echo"not connected";
}


$name = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$dob = $_POST['dob'];
$education = $_POST['education'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$email = $_POST['email'];
$aadhar = $_POST['aadhar'];
$height = $_POST['height'];
$weight = $_POST['weight'];
$batting = $_POST['batting'];
$runs = $_POST['runs'];
$average = $_POST['average'];
$half = $_POST['half'];
$century = $_POST['century'];
$bowling = $_POST['bowling'];
$wickets = $_POST['wickets'];
$maiden = $_POST['maiden'];
$hattrick = $_POST['hattrick'];
$speed = $_POST['speed'];
$other = $_POST['other'];
$records = $_POST['records-achievements'];
$achievements = $_POST['Achievements'];

$tmp_certificatesname= $_FILES["certificates"]["tmp_name"];
$certificatesname= $_FILES["certificates"]["name"];
$uploadcertificates= 'playercertificates/'.$certificatesname;
move_uploaded_file($tmp_certificatesname,$uploadcertificates);

$tmp_passportphotoname= $_FILES["passportphoto"]["tmp_name"];
$passportphotoname= $_FILES["passportphoto"]["name"];
$uploadpassportphoto= 'playerpassportphoto/'.$passportphotoname;
move_uploaded_file($tmp_passportphotoname,$uploadpassportphoto);

$tmp_aadharphotoname= $_FILES["Aadharphoto"]["tmp_name"];
$aadharphotoname= $_FILES["Aadharphoto"]["name"];
$uploadaadharphoto= 'playeraadharphoto/'.$aadharphotoname;
move_uploaded_file($tmp_aadharphotoname,$uploadaadharphoto);





// Create the SQL query
$sql = "INSERT INTO `data`(`name`, `age`, `gender`, `dob`, `education`, `address`, `city`, `state`, `email`, `Aadhar`, `height`, `weight`, `batting`, `runs`, `average`, `half`, `centuries`, `bowling`, `wickets`, `maiden`, `hattrick`, `speed`, `other`, `records`, `achievements`,`certificates`, `aadharphoto`, `passportphoto`) 
VALUES ('$name','$age','$gender','$dob','$education','$address','$city','$state','$email','$aadhar','$height','$weight','$batting','$runs','$average','$half','$century','$bowling','$wickets','$maiden','$hattrick','$speed','$other','$records','$achievements','$uploadcertificates','$uploadaadharphoto','$uploadpassportphoto')";

// Execute the query
if (mysqli_query($conn, $sql)) {
    echo "<script>alert('Data Submitted');</script>";
    include('home.html');
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);







?>

