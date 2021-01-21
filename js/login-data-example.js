var login_form = VGSCollect.create('tntq4dwvhri', 'sandbox', function(state) {
  document.getElementById('login-preview').innerText = JSON.stringify(state, null, '  ');
});

login_form.field('#email .form-control', {
  type: 'text',
  name: 'loginEmail',
  placeholder: 'test@example.com',
  validations: ['required'],
});

login_form.field('#password .form-control', {
  type: 'password',
  name: 'loginPassword',
  validations: ['required'],
});

login_form.on('enterPress', function () {
  const targetForm = document.getElementById('form-login-info');
  submitForm(login_form, targetForm);
});

document.getElementById('form-login-info')
.addEventListener('submit', function(e) {
  let targetForm = e.target;
  e.preventDefault();
  submitForm(login_form, targetForm);
}, false);
