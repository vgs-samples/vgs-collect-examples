var pii_form = VGSCollect.create('tntq4dwvhri', 'sandbox', function(state) {
  document.getElementById('pii-preview').innerText = JSON.stringify(state, null, '  ');
  if (state) {
    for (let field in state) {
      if (state[field].errorMessages && !state[field].isValid && !state[field].isFocused&& state[field].isDirty) {
        const error = state[field].errorMessages[0];
        document.querySelector(`[data-name='${field}']`).innerHTML = error;
      } else if (state[field].isValid || state[field].isFocused) {
        document.querySelector(`[data-name='${field}']`).innerHTML = '';
        const frame = document.querySelector(`[data-name='${field}']`).previousElementSibling;
        frame.classList.remove('invalid-field');
      }
    }
  }
});

const fullName = pii_form.field('#pii-full-name .form-control', {
  type: 'text',
  name: 'piiFullName',
  placeholder: 'Joe Business',
  validations: ['required'],
  autoComplete: 'name',
  css,
});

const ssn = pii_form.field('#ssn .form-control', {
  type: 'ssn',
  name: 'piiSsn',
  placeholder: 'AAA-GG-SSSS',
  validations: ['required'],
  css,
});

pii_form.on('enterPress', function () {
  const targetForm = document.getElementById('form-pii-info');
  submitForm(pii_form, targetForm);
});

Promise.all([fullName.promise, ssn.promise]).then(function () {
  const fields = document.querySelectorAll('#form-pii-info .loading');
  for (var i = 0; i < fields.length; i++) {
    fields[i].classList.remove('loading');
  }
});

document.getElementById('form-pii-info')
.addEventListener('submit', function(e) {
  let targetForm = e.target;
  e.preventDefault();
  submitForm(pii_form, targetForm);
}, false);
