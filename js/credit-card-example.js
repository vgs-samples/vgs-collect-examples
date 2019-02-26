var f = VGSCollect.create('tntq4dwvhri', function(state) {
    document.getElementById('card-preview').innerText = JSON.stringify(state, null, '  ');
  });
  
var field = f.field('#cc-name .form-control', {
  type: 'text',
  name: 'card.name',
  placeholder: 'Joe Business',
  validations: ['required'],
});

f.field('#cc-number .form-control', {
  type: 'card-number',
  name: 'card.number',
  successColor: '#4F8A10',
  errorColor: '#D8000C',
  placeholder: '4111 1111 1111 1111',
  validations: ['required', 'validCardNumber'],
});

f.field('#cc-cvc .form-control', {
  type: 'card-security-code',
  name: 'card.cvc',
  placeholder: '344',
  validations: ['required', 'validCardSecurityCode'],
});

f.field('#cc-expiration-date .form-control', {
  type: 'card-expiration-date',
  name: 'card.expirationDate',
  placeholder: '01 / 2016',
  validations: ['required', 'validCardExpirationDate']
});

var elements = document.querySelectorAll('label');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function(t) {
    field.focus();
  });
}

document.getElementById('cc-form')
  .addEventListener('submit', function(e) {
    let targetForm = e.target;
    e.preventDefault();
    f.submit('/post', {
      headers: {
        'x-custom-header': 'Oh yes. I am a custom header',
      },
    }, function(status, data) {
      cleanErrorMessages(targetForm);
      highlight(targetForm, JSON.stringify(data, null, 4));
    }, function (errors) {
      highlightErrors(targetForm, errors);
    });
  }, false);
