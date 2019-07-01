var f = VGSCollect.create('tntq4dwvhri', function(state) {});
var requestError = $(".request-error");
var requestSuccess = $(".request-success");
var styles = {
  border: 'none',
  background: 'rgba(215, 224, 235, 0.18);',
  height: '40px',
  lineHeight: 'normal',
  padding: '0 10px',
  color: 'white',
  fontSize: '12px',
  boxSizing: 'border-box',
  borderRadius: '4px',
  letterSpacing: '.7px',
  '&::placeholder': {
    color: 'white',
    fontSize: '12px',
    opacity: '.5',
  },
};

f.field('#cc-holder .field-space', {
  type: 'text',
  name: 'cardName',
  placeholder: 'Joe Business',
  validations: ['required'],
  css: styles,
});

f.field('#cc-number .field-space', {
  type: 'card-number',
  name: 'cardNumber',
  placeholder: 'Card number',
  validations: ['required', 'validCardNumber'],
  css: styles,
});

f.field('#cc-cvc .field-space', {
  type: 'card-security-code',
  name: 'cardCvc',
  placeholder: '344',
  validations: ['required', 'validCardSecurityCode'],
  css: styles,
});

f.field('#cc-exp .field-space', {
  type: 'card-expiration-date',
  name: 'cardExpirationDate',
  placeholder: '01 / 2016',
  validations: ['required', 'validCardExpirationDate'],
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

document.getElementById('cc-form-submit')
  .addEventListener('click', function(e) {
    e.preventDefault();
    f.submit('/post', {
      headers: {
        'x-custom-header': 'Oh yes. I am a custom header',
      },
    }, function(status, data) {
      showAlert(requestSuccess);
    }, function(errors) {
      for(var error in errors) {
        var errorMessage = errors[error].errorMessages[0];
        requestError.find('strong').append(`<span>${errors[error].name} ${errorMessage}</span><br/>`);
      }
      showAlert(requestError);
    });
  }, false);

