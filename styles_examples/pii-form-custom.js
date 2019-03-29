var pii_form = VGSCollect.create('tntq4dwvhri', function(state) {});

pii_form.field('#first-name .field-space', {
  type: 'text',
  name: 'first.name',
  validations: ['required'],
  css: {
    'border': 'none',
    'boxSizing': 'border-box',
    'padding': '0 15px',
  }
});

pii_form.field('#ssn .field-space', {
  type: 'text',
  name: 'ssn',
  validations: ['required'],
  css: {
    'border': 'none',
    'boxSizing': 'border-box',
    'padding': '0 15px',
  }
});

document.getElementById('pii-form')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    pii_form.submit('/post', {
      headers: {
        'x-custom-header': 'Oh yes. I am a custom header',
      },
    }, function(status, data) {
      let elem = document.getElementsByClassName("pii-success")[0];
      elem.classList.remove("hidden");
    }, function(errors) {
    });
  }, false);
