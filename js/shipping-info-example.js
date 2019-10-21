var shipping_form = VGSCollect.create('57ba9c6dc96c10354fcc16a21a5600d4af275fbc024668e69e01706d30e94f1e', function(state) {
  document.getElementById('shipping-preview').innerText = JSON.stringify(state, null, '  ');
});

shipping_form.field('#cc-first-name .form-control', {
  type: 'text',
  name: 'shippingFirstName',
  placeholder: 'Joe',
  validations: ['required'],
});

shipping_form.field('#cc-last-name .form-control', {
  type: 'text',
  name: 'shippingLastName',
  placeholder: 'Business',
  validations: ['required'],
});

shipping_form.field('#cc-address .form-control', {
  type: 'text',
  name: 'shippingAddress',
  placeholder: 'Address',
  validations: ['required'],
});

shipping_form.field('#cc-country .form-control', {
  type: 'dropdown',
  name: 'shippingCountry',
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
  name: 'shippingCity',
  placeholder: 'City',
  validations: ['required'],
});

shipping_form.field('#cc-region .form-control', {
  type: 'text',
  name: 'shippingRegion',
  placeholder: 'Region',
  validations: ['required'],
});

shipping_form.field('#cc-zip .form-control', {
  type: 'zip-code',
  name: 'shippingZip',
  placeholder: 'Zip Code',
  validations: ['required'],
});

document.getElementById('cc-form-shipping-info')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    let targetForm = e.target;
    shipping_form.submit('/post', {
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
