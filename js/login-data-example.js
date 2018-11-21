const login_form = SecureForm.create('development', function(state) {
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
    login_form.submit('/post', {
      headers: {
        'x-custom-header': 'Oh yes. I am a custom header',
      },
      data: {
        type: 'card',
      },
    }, function(status, data) {
      document.getElementById('login-response').innerText = JSON.stringify(data, null, '  ');
    });
  }, false);
