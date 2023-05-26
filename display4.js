const url='api.php';
getdata();

async function getdata(){
    const response= await fetch(url);
    const data= await response.json();

    document.getElementById('name').innerHTML=data[3].name;
    document.getElementById('age').innerHTML=data[3].age;
    document.getElementById('gender').innerHTML=data[3].gender;
    document.getElementById('dob').innerHTML=data[3].dob;
    document.getElementById('education').innerHTML=data[3].education;
    document.getElementById('address').innerHTML=data[3].address;
    document.getElementById('city').innerHTML=data[3].city;
    document.getElementById('state').innerHTML=data[3].state;
    document.getElementById('email').innerHTML=data[3].email;
    document.getElementById('aadhar').innerHTML=data[3].aadhar;
    document.getElementById('height').innerHTML=data[3].height;
    document.getElementById('weight').innerHTML=data[3].weight;
    document.getElementById('batting').innerHTML=data[3].batting;
    document.getElementById('runs').innerHTML=data[3].runs;
    document.getElementById('average').innerHTML=data[3].average;
    document.getElementById('half').innerHTML=data[3].half;

    document.getElementById('centuries').innerHTML=data[3].centuries;
    document.getElementById('bowling').innerHTML=data[3].bowling;
    document.getElementById('wickets').innerHTML=data[3].wickets;
    document.getElementById('maiden').innerHTML=data[3].maiden;
    document.getElementById('hattrick').innerHTML=data[3].hattrick;
    document.getElementById('speed').innerHTML=data[3].speed;
    document.getElementById('other').innerHTML=data[3].other;
    document.getElementById('records').innerHTML=data[3].records;
    document.getElementById('achievements').innerHTML=data[3].achievements;
    document.getElementById('certificates').href=data[3].certificates;
    document.getElementById('aadharphoto').href=data[3].aadharphoto;
    document.getElementById('passportphoto').href=data[3].passportphoto;
    
}