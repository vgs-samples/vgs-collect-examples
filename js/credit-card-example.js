const f = VGSCollect.create('tntq4dwvhri', 'sandbox', function(state) {
  document.getElementById('card-preview').innerText = JSON.stringify(state, null, '  ');
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

const cardHolderName = f.field('#cc-name .form-control', {
  type: 'text',
  name: 'cardName',
  placeholder: 'Joe Business',
  validations: ['required'],
  autoComplete: 'cc-name',
  css,
});

const cardNumber = f.field('#cc-number .form-control', {
  type: 'card-number',
  name: 'cardNumber',
  placeholder: '0000 0000 0000 0000',
  validations: ['required', 'validCardNumber'],
  autoComplete: 'cc-number',
  showCardIcon: {
    'width': '39px',
    'height': '24px'
  },
  css,
});

const cvv = f.field('#cc-cvc .form-control', {
  type: 'card-security-code',
  name: 'cardCvc',
  placeholder: 'cvc',
  validations: ['required', 'validCardSecurityCode'],
  autoComplete: 'cc-csc',
  css,
});

const expDate = f.field('#cc-expiration-date .form-control', {
  type: 'card-expiration-date',
  name: 'cardExpirationDate',
  placeholder: 'MM / YY',
  validations: ['required', 'validCardExpirationDate'],
  autoComplete: 'cc-exp',
  css,
});

cardNumber.setCVCDependency(cvv);

Promise.all([cardHolderName.promise, cardNumber.promise, cvv.promise, expDate.promise]).then(function () {
    const fields = document.querySelectorAll('#cc-form .loading');
    for (var i = 0; i < fields.length; i++) {
      fields[i].classList.remove('loading');
    }
});

var elements = document.querySelectorAll('label');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function(t) {
    cardHolderName.focus();
  });
}
 
f.on('enterPress', function () {
  const targetForm = document.getElementById('cc-form');
  submitForm(f, targetForm);
});

document.getElementById('cc-form')

.addEventListener('submit', function(e) {
  e.preventDefault();
  let targetForm = e.target;
  submitForm(f, targetForm);
}, false);
