var login_form = VGSCollect.create('tntq4dwvhri', function(state) {});

login_form.field('#login .field-space', {
  type: 'text',
  name: 'login.email',
  placeholder: 'Email',
  validations: ['required'],
  css: {
    'position': 'static',
    'border': '0',
    'padding': '7px 0',
    'width': '100%',
    'backgroundColor': '#1f8ab0',
    'borderBottom': '2px solid white',
    'color': 'white',
    '&::placeholder': {
      'color': 'white',
      'fontSize': '12px',
      'opacity': '.5',
    },
  }
});

login_form.field('#password .field-space', {
  type: 'password',
  name: 'login.password',
  placeholder: 'Password',
  validations: ['required'],
  css: {
    'position': 'static',
    'border': '0',
    'padding': '7px 0',
    'width': '100%',
    'backgroundColor': '#1f8ab0',
    'borderBottom': '2px solid white',
    'color': 'white',
    '&::placeholder': {
      'color': 'white',
      'fontSize': '12px',
      'opacity': '.5',
    },
  }
});

document.getElementById('login-form')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    login_form.submit('/post', {
      headers: {
        'x-custom-header': 'Oh yes. I am a custom header',
      },
    }, function(status, data) {
      let elem = document.getElementsByClassName("login-success")[0];
      elem.classList.remove("hidden");
    }, function(errors) {
    });
  }, false);
