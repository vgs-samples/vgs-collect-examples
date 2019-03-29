var f = VGSCollect.create('tntq4dwvhri', function(state) {});

f.field('#cc-holder .field-space', {
  type: 'text',
  name: 'card.name',
  placeholder: 'Joe Business',
  validations: ['required'],
  css: {
    'border': 'none',
    'outline': 'none',
    'backgroundColor': '#26A6D4',
    'height': '30px',
    'lineHeight': 'normal',
    'padding': '0 10px',
    'color': 'white',
    'fontSize': '10px',
    'boxSizing': 'border-box',
    'borderRadius': '4px',
    'letterSpacing': '.7px',
    '&::placeholder': {
      'color': 'white',
      'fontSize': '10px',
      'opacity': '.5',
    },
  }
});

f.field('#cc-number .field-space', {
  type: 'card-number',
  name: 'card.number',
  placeholder: '4111 1111 1111 1111',
  validations: ['required', 'validCardNumber'],
  css: {
    'border': 'none',
    'outline': 'none',
    'backgroundColor': '#26A6D4',
    'height': '30px',
    'lineHeight': 'normal',
    'padding': '0 10px',
    'color': 'white',
    'fontSize': '10px',
    'boxSizing': 'border-box',
    'borderRadius': '4px',
    'letterSpacing': '.7px',
    '&::placeholder': {
      'color': 'white',
      'fontSize': '10px',
      'opacity': '.5',
    },
  }
});

f.field('#cc-cvc .field-space', {
  type: 'card-security-code',
  name: 'card.cvc',
  placeholder: '344',
  validations: ['required', 'validCardSecurityCode'],
  css: {
    'border': 'none',
    'outline': 'none',
    'backgroundColor': '#26A6D4',
    'height': '30px',
    'lineHeight': 'normal',
    'padding': '0 10px',
    'color': 'white',
    'fontSize': '10px',
    'boxSizing': 'border-box',
    'borderRadius': '4px',
    'letterSpacing': '.7px',
    '&::placeholder': {
      'color': 'white',
      'fontSize': '10px',
      'opacity': '.5',
    },
  }
});

f.field('#cc-exp .field-space', {
  type: 'card-expiration-date',
  name: 'card.expirationDate',
  placeholder: '01 / 2016',
  validations: ['required', 'validCardExpirationDate'],
  css: {
    'border': 'none',
    'outline': 'none',
    'backgroundColor': '#26A6D4',
    'height': '30px',
    'lineHeight': 'normal',
    'padding': '0 10px',
    'color': 'white',
    'fontSize': '10px',
    'boxSizing': 'border-box',
    'borderRadius': '4px',
    'letterSpacing': '.7px',
    '&::placeholder': {
      'color': 'white',
      'fontSize': '10px',
      'opacity': '.5',
    },
  }
});

document.getElementById('cc-form-submit')
  .addEventListener('click', function(e) {
    e.preventDefault();
    f.submit('/post', {
      headers: {
        'x-custom-header': 'Oh yes. I am a custom header',
      },
    }, function(status, data) {
      let elem = document.getElementsByClassName("card-success")[0];
      elem.classList.remove("hidden");
    }, function(errors) {
    });
  }, false);

