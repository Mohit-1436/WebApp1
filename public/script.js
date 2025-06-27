
// function showLogin() {
//   document.getElementById('loginForm').classList.add('active-form');
//   document.getElementById('signupForm').classList.remove('active-form');
//   document.getElementById('loginBtn').classList.add('active');
//   document.getElementById('signupBtn').classList.remove('active');
// }

// function showSignup() {
//   document.getElementById('signupForm').classList.add('active-form');
//   document.getElementById('loginForm').classList.remove('active-form');
//   document.getElementById('signupBtn').classList.add('active');
//   document.getElementById('loginBtn').classList.remove('active');
// }
function showLogin() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  loginForm.classList.add('active-form');
  signupForm.classList.remove('active-form');
  document.getElementById('loginBtn').classList.add('active');
  document.getElementById('signupBtn').classList.remove('active');
  animateFormHeight();
}

function showSignup() {
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');
  signupForm.classList.add('active-form');
  loginForm.classList.remove('active-form');
  document.getElementById('signupBtn').classList.add('active');
  document.getElementById('loginBtn').classList.remove('active');
  animateFormHeight();
}


function togglePassword(inputId, iconEl) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    iconEl.textContent = "🙈";
  } else {
    input.type = "password";
    iconEl.textContent = "👁";
  }
}

function validateLogin() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;
  if (!email.includes('@') || pass.length < 6) {
    alert('Invalid login credentials.');
    return false;
  }
  alert('Login successful!');
  return false;
}

function validateSignup() {
  const email = document.getElementById('signupEmail').value;
  const pass = document.getElementById('signupPassword').value;
  const confirm = document.getElementById('confirmPassword').value;
  if (!email.includes('@') || pass.length < 6 || pass !== confirm) {
    alert('Invalid signup details.');
    return false;
  }
  alert('Signup successful!');
  return false;
}
function animateFormHeight() {
  const wrapper = document.querySelector('.form-wrapper');
  const activeForm = wrapper.querySelector('.active-form');
  wrapper.style.height = activeForm.offsetHeight + "px";
}

window.addEventListener("load", animateFormHeight);

