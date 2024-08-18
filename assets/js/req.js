const url = 'https://3lllp7yp3f.execute-api.us-east-1.amazonaws.com/dev/send_otp';
const form = document.getElementById('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  event.stopPropagation();
  const email = document.getElementById('email').value;
  const data = {
    email_address: email,
  };
  try {
    const response = await fetch(`${url}?email_address=${data.email_address}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
    });
   
  } catch (error) {

  }
});
