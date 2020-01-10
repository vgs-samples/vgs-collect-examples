var pii_form = VGSCollect.create('tntq4dwvhri', 'sandbox', function(state) {
  document.getElementById('pii-preview').innerText = JSON.stringify(state, null, '  ');
});

pii_form.field('#pii-first-name .form-control', {
  type: 'text',
  name: 'piiFirstName',
  placeholder: 'Joe',
  validations: ['required'],
});

pii_form.field('#pii-last-name .form-control', {
  type: 'text',
  name: 'piiLastName',
  placeholder: 'Business',
  validations: ['required'],
});

pii_form.field('#ssn .form-control', {
  type: 'text',
  name: 'piiSsn',
  placeholder: 'AAA-GG-SSSS',
  validations: ['required'],
});

document.getElementById('form-pii-info')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    let targetForm = e.target;
    pii_form.submit('/post', {
      headers: {
        'x-custom-header': 'Oh yes. I am a custom header',
      },
    }, function(status, data) {
      cleanErrorMessages(targetForm);
      highlight(targetForm, JSON.stringify(data, null, 4));
    }, function(errors) {
      highlightErrors(targetForm, errors);
    });
  }, false);
