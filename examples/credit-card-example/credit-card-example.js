/*  VGS Collect form initialization
*   VGSCollect.create(environment, onUpdateCallback) → Form
*     @constructor VGSCollect
*     @param {string} environment - your `vault id`, that this form will submit to.
*                                   https://www.verygoodsecurity.com/docs/terminology/nomenclature#vault
*     @param {function} onUpdateCallback - callback that will be called whenever the form state changes
*                                          It receives the state object representing the current state
*     @returns {object} Form
* */

const form = VGSCollect.create('tntgwauwbm1', function(state) {
  /* @returns {object} state - state object represents the current form state */
});

/*  Create VGS Collect field for credit card name
*   Form#field(selector, properties) → Field
*     @param {string} selector - CSS Selector that points to the element where the field will be added
*     @param {object} properties - set of configurable options
*     @returns {object} Field
* */
form.field('#cc-name', {
  type: 'text',
  name: 'card.name',
  placeholder: 'Joe Business',
  validations: ['required'],
});

/*  Create VGS Collect field for credit card number
*   Form#field(selector, properties) → Field
*     @param {string} selector - CSS Selector that points to the element where the field will be added
*     @param {object} properties - set of configurable options
*     @returns {object} Field
* */
form.field('#cc-number', {
  type: 'card-number',
  name: 'card.number',
  successColor: '#4F8A10',
  errorColor: '#D8000C',
  placeholder: '4111 1111 1111 1111',
  validations: ['required', 'validCardNumber'],
});

/*  Create VGS Collect field for CVC
*   Form#field(selector, properties) → Field
*     @param {string} selector - CSS Selector that points to the element where the field will be added
*     @param {object} properties - set of configurable options
*     @returns {object} Field
* */
form.field('#cc-cvc', {
  type: 'card-security-code',
  name: 'card.cvc',
  placeholder: '344',
  validations: ['required', 'validCardSecurityCode'],
});

/*  Create VGS Collect field for credit card expiration date
*   Form#field(selector, properties) → Field
*     @param {string} selector - CSS Selector that points to the element where the field will be added
*     @param {object} properties - set of configurable options
*     @returns {object} Field
* */
form.field('#cc-expiration-date', {
  type: 'card-expiration-date',
  name: 'card.expirationDate',
  placeholder: '01 / 2016',
  validations: ['required', 'validCardExpirationDate']
});

/*  Submits all of the form fields by executing a POST request.
*   Form#submit(path, options, callback, errorCallback) → Form
*     @param {string} path - path that the form will be submitted to
*     @param {object} options - options object that can include additional 'serializer', 'data' and request 'headers'
*     @param {function} callback - will be executed when the HTTPRequest is finished
*     @param {function} errorCallback(optional) - error handling callback
* */
document.getElementById('cc-form')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    form.submit('/post', {
      headers: {
        'x-custom-header': 'Oh yes. I am a custom header',
      },
      data: {
        type: 'card',
      },
    }, function(status, data) {
      /*  @callback
       *  @param {number} status - status code
       *  @param {object} data - response data
       * */
    });
  }, function (errors) {
      /*  @callback errorCallback
      *   @param {object} errors - returned errors
      *   */
  });
