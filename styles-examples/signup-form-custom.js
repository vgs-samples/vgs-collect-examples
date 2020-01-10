var signup_form = VGSCollect.create('tntq4dwvhri', '<sandbox || live>', function(state) {});
var requestError = $(".request-error");
var requestSuccess = $(".request-success");
var styles = {
  background: '#C0B1DE',
  borderRadius: '128px',
  width: '100%',
  height: '40px',
  color: '#563A92',
  fontSize: '16px',
  padding: '0 16px',
  boxSizing: 'border-box',
  '&::placeholder': {
    fontSize: '16px',
    color: '#563A92',
    opacity: '0.6',
  }
};

signup_form.field('#signup-email .field-space', {
  type: 'text',
  name: 'signupEmail',
  validations: ['required'],
  placeholder: 'Email or phone',
  css: styles,
});

signup_form.field('#signup-password .field-space', {
  type: 'password',
  name: 'signupPassword',
  validations: ['required'],
  placeholder: 'Password',
  css: styles,
});

signup_form.field('#signup-name .field-space', {
  type: 'text',
  name: 'signupName',
  validations: ['required'],
  placeholder: 'Name',
  css: styles,
});

signup_form.field('#signup-birthday .field-space', {
  type: 'text',
  name: 'signupName',
  validations: ['required'],
  placeholder: 'Birthday',
  css: styles,
});

function showAlert(elem) {
  elem.fadeTo(2000, 500).slideUp(500, function() {
    elem.slideUp(500);
    if(elem === requestError){
      requestError.find('strong').html('');
    }
  });
}

document.getElementById('signup-form')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    signup_form.submit('/post', {
      headers: {
        'x-custom-header': 'Oh yes. I am a custom header',
      },
    }, function(status, data) {
      showAlert(requestSuccess)
    }, function(errors) {
      for(var error in errors) {
        var errorMessage = errors[error].errorMessages[0];
        requestError.find('strong').append(`<span>${errors[error].name} ${errorMessage}</span><br/>`);
      }
      showAlert(requestError);
    });
  }, false);
