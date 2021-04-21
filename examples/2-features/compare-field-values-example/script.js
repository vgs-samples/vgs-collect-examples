const form = VGSCollect.create('tntq4dwvhri', 'sandbox', function(state) {});

const css = {
  'font-family': '"Helvetica Neue", Helvetica',
  'box-sizing': 'border-box',
  'line-height': '1.5em',
  'font-size': '14px',
  'font-weight': '200',
  'border': 'none',
  'color': 'red',
  'width': '100%',
  'height': '100%',
  '&::placeholder': {
    'color': '#CFD7E0',
  },
  '&.invalid.touched': {
    'color': 'red',
  },
  '&.valid': {
    'color': 'green',
  },
};

const classes = {
  'invalid': 'field-invalid',
  'valid': 'form__valid',
  'touched': 'form__touched',
};

const ssn = form.field('#ssn', {
  type: 'ssn',
  name: 'ssn',
  validations: ['required', 'validSSN'],
  css: css,
  placeholder: 'SSN',
  classes,
});

const ssn2 = form.field('#ssn-confirm', {
  type: 'ssn',
  name: 'ssn-confirmation',
  validations: ['required', 'validSSN', {
    type: 'compareValue',
    params: {
      field: 'ssn',
      function: 'match',
    },
  }],
  css: css,
  placeholder: 'SSN',
  classes,
});

const handleSubmit = (e) => {   
  e.preventDefault();
  form.submit('/post', {
  }, (status, data) => {
      document.getElementById('response').innerText = JSON.stringify(data.json, null, ' ');
  });
};

document.addEventListener('submit', handleSubmit);