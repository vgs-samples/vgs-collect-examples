const login_form = VGSCollect.create('tntq4dwvhri', 'sandbox', function(state) {
  document.getElementById('login-preview').innerText = JSON.stringify(state, null, '  ');
  if (state) {
    for (let field in state) {
      if (state[field].errorMessages && !state[field].isValid && state[field].isTouched) {
        const error = state[field].errorMessages[0];
        document.querySelector(`[data-name='${field}']`).innerHTML = error;
      } else {
        document.querySelector(`[data-name='${field}']`).innerHTML = '';
      }
    }
  }
});

const email = login_form.field('#email .form-control', {
  type: 'text',
  name: 'loginEmail',
  placeholder: 'test@example.com',
  validations: ['required'],
  autoComplete: 'email',
  css,
});

const pswd = login_form.field('#password .form-control', {
  type: 'password',
  name: 'loginPassword',
  validations: ['required'],
  autoComplete: 'current-password',
  css,
});

login_form.on('enterPress', function () {
  const targetForm = document.getElementById('form-login-info');
  submitForm(login_form, targetForm);
});

Promise.all([email.promise, pswd.promise]).then(function () {
  const fields = document.querySelectorAll('#form-login-info .loading');
  for (var i = 0; i < fields.length; i++) {
    fields[i].classList.remove('loading');
  }
});

document.getElementById('form-login-info')
.addEventListener('submit', function(e) {
  let targetForm = e.target;
  e.preventDefault();
  submitForm(login_form, targetForm);
}, false);
