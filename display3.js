const url='api.php';
getdata();

async function getdata(){
    const response= await fetch(url);
    const data= await response.json();
   

    document.getElementById('name').innerHTML=data[2].name;
    document.getElementById('age').innerHTML=data[2].age;
    document.getElementById('gender').innerHTML=data[2].gender;
    document.getElementById('dob').innerHTML=data[2].dob;
    document.getElementById('education').innerHTML=data[2].education;
    document.getElementById('address').innerHTML=data[2].address;
    document.getElementById('city').innerHTML=data[2].city;
    document.getElementById('state').innerHTML=data[2].state;
    document.getElementById('email').innerHTML=data[2].email;
    document.getElementById('aadhar').innerHTML=data[2].aadhar;
    document.getElementById('height').innerHTML=data[2].height;
    document.getElementById('weight').innerHTML=data[2].weight;
    document.getElementById('batting').innerHTML=data[2].batting;
    document.getElementById('runs').innerHTML=data[2].runs;
    document.getElementById('average').innerHTML=data[2].average;
    document.getElementById('half').innerHTML=data[2].half;

    document.getElementById('centuries').innerHTML=data[2].centuries;
    document.getElementById('bowling').innerHTML=data[2].bowling;
    document.getElementById('wickets').innerHTML=data[2].wickets;
    document.getElementById('maiden').innerHTML=data[2].maiden;
    document.getElementById('hattrick').innerHTML=data[2].hattrick;
    document.getElementById('speed').innerHTML=data[2].speed;
    document.getElementById('other').innerHTML=data[2].other;
    document.getElementById('records').innerHTML=data[2].records;
    document.getElementById('achievements').innerHTML=data[2].achievements;
    document.getElementById('certificates').href=data[2].certificates;
    document.getElementById('aadharphoto').href=data[2].aadharphoto;
    document.getElementById('passportphoto').href=data[2].passportphoto;
    
}