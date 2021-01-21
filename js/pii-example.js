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
  type: 'ssn',
  name: 'piiSsn',
  placeholder: 'AAA-GG-SSSS',
  validations: ['required'],
});

pii_form.on('enterPress', function () {
  const targetForm = document.getElementById('form-pii-info');
  submitForm(pii_form, targetForm);
});

document.getElementById('form-pii-info')
.addEventListener('submit', function(e) {
  let targetForm = e.target;
  e.preventDefault();
  submitForm(pii_form, targetForm);
}, false);
