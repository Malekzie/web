document.addEventListener('DOMContentLoaded', () => {
     const form = document.querySelector('form');
     form.addEventListener('submit', async (event) => {
         event.preventDefault();
 
         const formData = new FormData(form);
         const formDataJson = JSON.stringify(Object.fromEntries(formData.entries()));
 
         try {
             const response = await fetch(form.action, {
                 method: form.method,
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: formDataJson
             });
 
             if (response.ok) {
                 const result = await response.json();
                 console.log('Success:', result);
                 // handle successful registration, e.g., redirect to login page
             } else {
                 const errorData = await response.json();
                 console.error('Error:', errorData);
                 displayErrors(errorData);
             }
         } catch (error) {
             console.error('Network error:', error);
             // handle network errors
         }
     });
 
     function displayErrors(errors) {
         const errorFields = ['name', 'email', 'password', 'confirmPassword'];
         errorFields.forEach(field => {
             const errorDiv = document.getElementById(`${field}-error`);
             if (errors[field]) {
                 errorDiv.textContent = errors[field];
                 errorDiv.style.display = 'block';
             } else {
                 errorDiv.textContent = '';
                 errorDiv.style.display = 'none';
             }
         });
     }
 });
 