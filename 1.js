// Change background color of input field on focus
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', event => {
      event.target.style.backgroundColor = '#f0f0f0';
    });
    input.addEventListener('blur', event => {
      event.target.style.backgroundColor = 'white';
    });
  });
  
  // Add fade in effect to taglines
  document.querySelectorAll('h2, h3').forEach(tagline => {
    tagline.style.opacity = 0;
    tagline.style.transition = 'opacity 2s';
    setTimeout(() => tagline.style.opacity = 1, 1000);
  });
  
  // Add slide up effect to form on submit
  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.target;
    form.style.transition = 'transform 2s';
    form.style.transform = 'translateY(-100%)';
  });
  