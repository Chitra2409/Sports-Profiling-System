const url='api.php';
getdata();

async function getdata(){
    const response= await fetch(url);
    const data= await response.json();
 

    document.getElementById('name').innerHTML=data[1].name;
    document.getElementById('age').innerHTML=data[1].age;
    document.getElementById('gender').innerHTML=data[1].gender;
    document.getElementById('dob').innerHTML=data[1].dob;
    document.getElementById('education').innerHTML=data[1].education;
    document.getElementById('address').innerHTML=data[1].address;
    document.getElementById('city').innerHTML=data[1].city;
    document.getElementById('state').innerHTML=data[1].state;
    document.getElementById('email').innerHTML=data[1].email;
    document.getElementById('aadhar').innerHTML=data[1].aadhar;
    document.getElementById('height').innerHTML=data[1].height;
    document.getElementById('weight').innerHTML=data[1].weight;
    document.getElementById('batting').innerHTML=data[1].batting;
    document.getElementById('runs').innerHTML=data[1].runs;
    document.getElementById('average').innerHTML=data[1].average;
    document.getElementById('half').innerHTML=data[1].half;

    document.getElementById('centuries').innerHTML=data[1].centuries;
    document.getElementById('bowling').innerHTML=data[1].bowling;
    document.getElementById('wickets').innerHTML=data[1].wickets;
    document.getElementById('maiden').innerHTML=data[1].maiden;
    document.getElementById('hattrick').innerHTML=data[1].hattrick;
    document.getElementById('speed').innerHTML=data[1].speed;
    document.getElementById('other').innerHTML=data[1].other;
    document.getElementById('records').innerHTML=data[1].records;
    document.getElementById('achievements').innerHTML=data[1].achievements;
    document.getElementById('certificates').href=data[1].certificates;
    document.getElementById('aadharphoto').href=data[1].aadharphoto;
    document.getElementById('passportphoto').href=data[1].passportphoto;
    
}