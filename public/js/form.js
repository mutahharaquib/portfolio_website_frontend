const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // Stop normal form submit
    
        const formData = new FormData(form);
    
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
    
            if (response.ok) {
                form.reset(); // Clear the form
                successMessage.classList.remove('hidden'); // Show success message
            } else {
                alert('Oops! Something went wrong. Please try again.');
            }
        } catch (error) {
            alert('Oops! Something went wrong. Please try again.');
        }
    });