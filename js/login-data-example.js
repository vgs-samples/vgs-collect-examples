const login_form = SecureForm.create('tntq4dwvhri', function(state) {
  document.getElementById('login-preview').innerText = JSON.stringify(state, null, '  ');
});

login_form.field('#email .form-control', {
  type: 'text',
  name: 'login.email',
  placeholder: 'test@example.com',
  validations: ['required'],
});

login_form.field('#password .form-control', {
  type: 'password',
  name: 'login.password',
  validations: ['required'],
});

document.getElementById('form-login-info')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    let targetForm = e.target;
    login_form.submit('/post', {
      headers: {
        'x-custom-header': 'Oh yes. I am a custom header',
      },
    }, function(status, data) {
      highlight(targetForm, JSON.stringify(data, null, 4));
    });
  }, false);
