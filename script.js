document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const loginToggle = document.getElementById('loginToggle');
  const registerToggle = document.getElementById('registerToggle');

  loginToggle.addEventListener('click', function() {
      loginForm.classList.remove('hidden');
      registerForm.classList.add('hidden');
  });

  registerToggle.addEventListener('click', function() {
      loginForm.classList.add('hidden');
      registerForm.classList.remove('hidden');
  });
})
