document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    
    if (name === '' || email === '' || phone === '') {
        alert('Please fill in all fields.');
        return;
    }

   
    const responseMessage = document.getElementById('responseMessage');
    
    responseMessage.innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;
    
   
    document.getElementById('contactForm').reset();
});
