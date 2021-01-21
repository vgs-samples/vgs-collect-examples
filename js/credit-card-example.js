var f = VGSCollect.create('tntq4dwvhri', 'sandbox', function(state) {
  document.getElementById('card-preview').innerText = JSON.stringify(state, null, '  ');
});

const cardHolderName = f.field('#cc-name .form-control', {
  type: 'text',
  name: 'cardName',
  placeholder: 'Joe Business',
  validations: ['required'],
});

const cardNumber = f.field('#cc-number .form-control', {
  type: 'card-number',
  name: 'cardNumber',
  successColor: '#4F8A10',
  errorColor: '#D8000C',
  placeholder: '4111 1111 1111 1111',
  validations: ['required', 'validCardNumber'],
  showCardIcon: true,
});

const cvv = f.field('#cc-cvc .form-control', {
  type: 'card-security-code',
  name: 'cardCvc',
  placeholder: '344',
  validations: ['required', 'validCardSecurityCode'],
});

const expDate = f.field('#cc-expiration-date .form-control', {
  type: 'card-expiration-date',
  name: 'cardExpirationDate',
  placeholder: '01 / 2022',
  validations: ['required', 'validCardExpirationDate']
});

cardNumber.setCVCDependency(cvv);

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
