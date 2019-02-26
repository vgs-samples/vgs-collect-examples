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

$(function () {
  $('[data-toggle="popover"]').popover();
});
