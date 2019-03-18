var shipping_form = VGSCollect.create('tntq4dwvhri', function(state) {});

shipping_form.field('#full-name .field-space', {
  type: 'text',
  name: 'shipping.name',
  validations: ['required'],
  css: {
    'box-sizing': 'border-box',
    'border': '0',
    'padding': '0 15px',
    'background-color': 'white',
    'border-radius': '20px',
    'width': '100%',
    'color': '#576f7f',
    '&::placeholder': {
      'margin': '0 30px',
    },
  }
});

shipping_form.field('#address .field-space', {
  type: 'text',
  name: 'shipping.address',
  validations: ['required'],
  css: {
    'boxSizing': 'border-box',
    'border': '0',
    'padding': '0 15px',
    'backgroundColor': 'white',
    'borderRadius': '20px',
    'width': '100%',
    'color': '#576f7f',
    '&::placeholder': {
      'margin': '0 30px',
    },
  }
});

shipping_form.field('#zip-code .field-space', {
  type: 'text',
  name: 'shipping.zip',
  validations: ['required'],
  css: {
    'boxSizing': 'border-box',
    'border': '0',
    'padding': '0 15px',
    'backgroundColor': 'white',
    'borderRadius': '20px',
    'width': '100%',
    'color': '#576f7f',
    '&::placeholder': {
      'margin': '0 30px',
    },
  }
});

document.getElementById('shipping-form')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    shipping_form.submit('/post', {
      headers: {
        'x-custom-header': 'Oh yes. I am a custom header',
      },
    }, function(status, data) {
      let elem = document.getElementsByClassName("shipping-success")[0];
      elem.classList.remove("hidden");
    }, function(errors) {
    });
  }, false);
