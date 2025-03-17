document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // Handle form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      emailjs.send("service_avzyapw","template_n1zdd0a", {
        from_name: name,
        from_email: email,
        message: message
      }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again later.');
      });
    });
  });