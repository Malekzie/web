document.addEventListener('DOMContentLoaded', async () => {

     const form = document.querySelector('form');


     form.addEventListener('submit', async (e) => {
          e.preventDefault();

          const formData = new FormData(form);
          const formDataJson = JSON.stringify(Object.fromEntries(formData.entries()));

          const response = await fetch('/auth/register', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: formDataJson
          });

          const responseData = await response.json();

          document.querySelectorAll('.error-message').forEach(el => el.innerText = '');

          
          if (response.status === 400 && responseData.errors) {
               Object.keys(responseData.errors).forEach(field => {
                    const errorMessage = responseData.errors[field][0];
                    const errorElement = document.getElementById(`${field}-error`);
                    if (errorElement) {
                         errorElement.innerText = errorMessage;
                    }
               });
          } else if (response.status === 500 && responseData.error) {
               alert(responseData.error);
          } else if (response.status === 200 && responseData.message) {
               alert(responseData.message);
               form.reset(); // Optionally reset the form on successful registration
          }
     });
});