const url='api.php';
getdata();

async function getdata(){
    const response= await fetch(url);
    const data= await response.json();
    

    document.getElementById('name').innerHTML=data[4].name;
    document.getElementById('age').innerHTML=data[4].age;
    document.getElementById('gender').innerHTML=data[4].gender;
    document.getElementById('dob').innerHTML=data[4].dob;
    document.getElementById('education').innerHTML=data[4].education;
    document.getElementById('address').innerHTML=data[4].address;
    document.getElementById('city').innerHTML=data[4].city;
    document.getElementById('state').innerHTML=data[4].state;
    document.getElementById('email').innerHTML=data[4].email;
    document.getElementById('aadhar').innerHTML=data[4].aadhar;
    document.getElementById('height').innerHTML=data[4].height;
    document.getElementById('weight').innerHTML=data[4].weight;
    document.getElementById('batting').innerHTML=data[4].batting;
    document.getElementById('runs').innerHTML=data[4].runs;
    document.getElementById('average').innerHTML=data[4].average;
    document.getElementById('half').innerHTML=data[4].half;

    document.getElementById('centuries').innerHTML=data[4].centuries;
    document.getElementById('bowling').innerHTML=data[4].bowling;
    document.getElementById('wickets').innerHTML=data[4].wickets;
    document.getElementById('maiden').innerHTML=data[4].maiden;
    document.getElementById('hattrick').innerHTML=data[4].hattrick;
    document.getElementById('speed').innerHTML=data[4].speed;
    document.getElementById('other').innerHTML=data[4].other;
    document.getElementById('records').innerHTML=data[4].records;
    document.getElementById('achievements').innerHTML=data[4].achievements;
    document.getElementById('certificates').href=data[4].certificates;
    document.getElementById('aadharphoto').href=data[4].aadharphoto;
    document.getElementById('passportphoto').href=data[4].passportphoto;
    
}