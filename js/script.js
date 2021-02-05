var highlight = function(targetForm, jsonString) {
  jsonString = jsonString.replace(/(\: )(\"tok_.+\")/g, '$1<span class="highlighted">$2</span>');
  $(targetForm).closest('.example-container').find('.response').html(jsonString);
};

var cleanErrorMessages = function(targetForm) {
  $(targetForm).find('.error-message').text('');
};

var highlightErrors = function(targetForm, errors) {
  cleanErrorMessages(targetForm);
  for(var error in errors) {
    let errorMessage = errors[error].errorMessages[0];
    $(targetForm).find('[data-name="'+ error +'"]').append(errorMessage);
  }
};

const submitForm = function (form, targetForm) {
  form.submit('/post', {}, function(status, data) {
    cleanErrorMessages(targetForm);
    highlight(targetForm, JSON.stringify(data, null, 4));
  }, function (errors) {
    highlightErrors(targetForm, errors);
  });
}

const enableButton = function (form) {
  $(`#${form} button`).prop('disabled', false);
} 

const disableButton = function (form) {
  $(`#${form} button`).prop('disabled', true);
}

$(function () {
  $('[data-toggle="popover"]').popover();
});

const css = {
  '@font-face': {
    'font-family': 'Inter',
    'font-style': 'normal',
    'font-weight': '400',
    'font-display': 'swap',
    'src': 'url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZthjp-Ek-_EeAmM.woff) format("woff")',
    'unicode-range': 'U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
  },
  '&::placeholder': {
    'color': '#C8D0DB',
    'line-height': '16px'
  },
  '&::-webkit-input-placeholder': {
    'line-height': 'normal!important',
  },
  'font-family': '"Inter", sans-serif',
  'font-size': '16px',
}
