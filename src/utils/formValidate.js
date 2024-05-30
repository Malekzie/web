// TODO: Validate Register and Login forms

// Login Form
const loginForm = document.querySelector('form')
      loginEmail = document.querySelector('input[name="email"]');
      loginPassword = document.querySelector('input[name="password"]');
     // p tags for alerts
      loginBlankEmailAlert = document.getElementById('invalidBlank')
      loginInvalidEmailAlert = document.getElementById('invalidEmail')
      loginInvalidPassword = document.getElementById('invalidPassword')

// Register Form
const registerForm = document.querySelector('form')
      registerName = document.querySelector('input[name="name"]');
      registerEmail = document.querySelector('input[name="email"]');
      registerPassword = document.querySelector('input[name="password"]');
      registerConfirmPassword = document.querySelector('input[name="confirmPassword"]');
      registerMinName = document.getElementById('minName')
     //  p tags for alerts
      registerBlankEmailAlert = document.getElementById('invalidBlank')
      registerInvalidEmailAlert = document.getElementById('invalidEmail')
      invalidPassword = document.querySelector('.invalidPassword')
      notMatching = document.getElementById('notMatching')

// Validate if forms are empty
loginForm.addEventListener('submit', (e) => {
     if (loginEmail.value === '' || loginPassword.value === '') {
          e.preventDefault();
          loginBlankEmailAlert.style.display = 'block';
          loginInvalidPassword.style.display = 'block';
     }
     else if (loginEmail.value !== typeof String || loginPassword.value < 6) {
          e.preventDefault();
          loginInvalidEmailAlert.style.display = 'block';
          loginInvalidPassword.style.display = 'block';
     }
})


// Make two, one for when its submits and one to check password parameters against regex
registerForm.addEventListener('submit', (e) => {
     if (registerName.value === '' || registerEmail.value === '' || registerPassword.value === '' || registerConfirmPassword.value === '' ) {
          e.preventDefault();
          registerMinName.style.display = 'block';
          registerBlankEmailAlert.style.display = 'block';
          invalidPassword.style.display = 'block';
     }
     else if (registerPassword.value.length < 6 || registerConfirmPassword.value.length < 6) {
          e.preventDefault();
          invalidPassword.style.display = 'block';
     }
     else if (registerPassword.value != registerConfirmPassword.value ) {
          e.preventDefault();
          notMatching.style.display = 'block';
     }
})
