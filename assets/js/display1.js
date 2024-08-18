const url='api.php';
getdata();

async function getdata(){
    const response= await fetch(url);
    const data= await response.json();
  

    document.getElementById('name').innerHTML=data[0].name;
    document.getElementById('age').innerHTML=data[0].age;
    document.getElementById('gender').innerHTML=data[0].gender;
    document.getElementById('dob').innerHTML=data[0].dob;
    document.getElementById('education').innerHTML=data[0].education;
    document.getElementById('address').innerHTML=data[0].address;
    document.getElementById('city').innerHTML=data[0].city;
    document.getElementById('state').innerHTML=data[0].state;
    document.getElementById('email').innerHTML=data[0].email;
    document.getElementById('aadhar').innerHTML=data[0].aadhar;
    document.getElementById('height').innerHTML=data[0].height;
    document.getElementById('weight').innerHTML=data[0].weight;
    document.getElementById('batting').innerHTML=data[0].batting;
    document.getElementById('runs').innerHTML=data[0].runs;
    document.getElementById('average').innerHTML=data[0].average;
    document.getElementById('half').innerHTML=data[0].half;

    document.getElementById('centuries').innerHTML=data[0].centuries;
    document.getElementById('bowling').innerHTML=data[0].bowling;
    document.getElementById('wickets').innerHTML=data[0].wickets;
    document.getElementById('maiden').innerHTML=data[0].maiden;
    document.getElementById('hattrick').innerHTML=data[0].hattrick;
    document.getElementById('speed').innerHTML=data[0].speed;
    document.getElementById('other').innerHTML=data[0].other;
    document.getElementById('records').innerHTML=data[0].records;
    document.getElementById('achievements').innerHTML=data[0].achievements;
    document.getElementById('certificates').href=data[0].certificates;
    document.getElementById('aadharphoto').href=data[0].aadharphoto;
    document.getElementById('passportphoto').href=data[0].passportphoto;
    }