const pii_form = SecureForm.create('development', function(state) {
  document.getElementById('pii-preview').innerText = JSON.stringify(state, null, '  ');
});

pii_form.field('#pii-first-name .form-control', {
  type: 'text',
  name: 'pii.first_name',
  placeholder: 'Joe',
  validations: ['required'],
});

pii_form.field('#pii-last-name .form-control', {
  type: 'text',
  name: 'pii.last_name',
  placeholder: 'Business',
  validations: ['required'],
});

pii_form.field('#ssn .form-control', {
  type: 'text',
  name: 'pii.ssn',
  placeholder: 'AAA-GG-SSSS',
  validations: ['required'],
});

document.getElementById('form-pii-info')
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
      document.getElementById('pii-response').innerText = JSON.stringify(data, null, '  ');
    });
  }, false);
