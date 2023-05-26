// Add hover effect to rectangular sections
const boxes = document.querySelectorAll('.section');
boxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'scale(1.1)';
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'scale(1)';
  });
});

// Select elements to apply effects to
const quoteSections = document.querySelectorAll('.quote');


// Add mouseover effect to quote sections
quoteSections.forEach(section => {
  section.addEventListener('mouseover', () => {
    section.style.background = 'rgba(0,0,0,0.7)';
    section.style.color = '#fff';
  });
  section.addEventListener('mouseout', () => {
    section.style.background = 'none';
    section.style.color = '#333';
  });
});



// Smooth scrolling effect for navigation links
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  });
  

  