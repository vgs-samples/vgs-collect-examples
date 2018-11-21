const shipping_form = SecureForm.create('development', function(state) {
  document.getElementById('shipping-preview').innerText = JSON.stringify(state, null, '  ');
});

shipping_form.field('#cc-first-name .form-control', {
  type: 'text',
  name: 'shipping.first_name',
  placeholder: 'Joe',
  validations: ['required'],
});

shipping_form.field('#cc-last-name .form-control', {
  type: 'text',
  name: 'shipping.last_name',
  placeholder: 'Business',
  validations: ['required'],
});

shipping_form.field('#cc-address .form-control', {
  type: 'text',
  name: 'shipping.address',
  placeholder: 'Address',
  validations: ['required'],
});

shipping_form.field('#cc-country .form-control', {
  type: 'dropdown',
  name: 'shipping.country',
  placeholder: 'Select Country',
  validations: ['required'],
  options: [
    {value: 'USA', text: 'United States of America'},
    {value: 'Canada', text: 'Canada'},
    {value: 'Mexica', text: 'Mexica'},
  ]
});

shipping_form.field('#cc-city .form-control', {
  type: 'text',
  name: 'shipping.city',
  placeholder: 'City',
  validations: ['required'],
});

shipping_form.field('#cc-region .form-control', {
  type: 'text',
  name: 'shipping.region',
  placeholder: 'Region',
  validations: ['required'],
});

shipping_form.field('#cc-zip .form-control', {
  type: 'zip-code',
  name: 'shipping.zip',
  placeholder: 'Zip Code',
  validations: ['required'],
});

document.getElementById('cc-form-shipping-info')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    shipping_form.submit('/post', {
      headers: {
        'x-custom-header': 'Oh yes. I am a custom header',
      },
      data: {
        type: 'card',
      },
    }, function(status, data) {
      document.getElementById('shipping-response').innerText = JSON.stringify(data, null, '  ');
    });
  }, false);
