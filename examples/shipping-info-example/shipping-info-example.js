/*  VGS Collect form initialization
 *   VGSCollect.create(environment, onUpdateCallback) → Form
 *     @constructor VGSCollect
 *     @param {string} environment - your `vault id`, that this form will submit to.
 *                                   https://www.verygoodsecurity.com/docs/terminology/nomenclature#vault
 *     @param {function} onUpdateCallback - callback that will be called whenever the form state changes
 *                                          It receives the state object representing the current state
 *     @returns {object} Form
 * */

const shipping_form = VGSCollect.create('tntgwauwbm1', function(state) {
  /* @returns {object} state - state object represents the current form state */
});

/*  Create VGS Collect field for the first name
*   Form#field(selector, properties) → Field
*     @param {string} selector - CSS Selector that points to the element where the field will be added
*     @param {object} properties - set of configurable options
*     @returns {object} Field
* */
shipping_form.field('#cc-first-name', {
  type: 'text',
  name: 'shipping.first_name',
  placeholder: 'Joe',
  validations: ['required'],
});

/*  Create VGS Collect field for the last name
*   Form#field(selector, properties) → Field
*     @param {string} selector - CSS Selector that points to the element where the field will be added
*     @param {object} properties - set of configurable options
*     @returns {object} Field
* */
shipping_form.field('#cc-last-name', {
  type: 'text',
  name: 'shipping.last_name',
  placeholder: 'Business',
  validations: ['required'],
});

/*  Create VGS Collect field for an address
*   Form#field(selector, properties) → Field
*     @param {string} selector - CSS Selector that points to the element where the field will be added
*     @param {object} properties - set of configurable options
*     @returns {object} Field
* */
shipping_form.field('#cc-address', {
  type: 'text',
  name: 'shipping.address',
  placeholder: 'Address',
  validations: ['required'],
});

/*  Create VGS Collect field for country
*   Form#field(selector, properties) → Field
*     @param {string} selector - CSS Selector that points to the element where the field will be added
*     @param {object} properties - set of configurable options
*     @returns {object} Field
* */
shipping_form.field('#cc-country', {
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

/*  Create VGS Collect field for the city
*   Form#field(selector, properties) → Field
*     @param {string} selector - CSS Selector that points to the element where the field will be added
*     @param {object} properties - set of configurable options
*     @returns {object} Field
* */
shipping_form.field('#cc-city', {
  type: 'text',
  name: 'shipping.city',
  placeholder: 'City',
  validations: ['required'],
});

/*  Create VGS Collect field for the region
*   Form#field(selector, properties) → Field
*     @param {string} selector - CSS Selector that points to the element where the field will be added
*     @param {object} properties - set of configurable options
*     @returns {object} Field
* */
shipping_form.field('#cc-region', {
  type: 'text',
  name: 'shipping.region',
  placeholder: 'Region',
  validations: ['required'],
});

/*  Create VGS Collect field for zip code
*   Form#field(selector, properties) → Field
*     @param {string} selector - CSS Selector that points to the element where the field will be added
*     @param {object} properties - set of configurable options
*     @returns {object} Field
* */
shipping_form.field('#cc-zip', {
  type: 'zip-code',
  name: 'shipping.zip',
  placeholder: 'Zip Code',
  validations: ['required'],
});

/*  Submits all of the form fields by executing a POST request.
*   Form#submit(path, options, callback, errorCallback) → Form
*     @param {string} path - path that the form will be submitted to
*     @param {object} options - options object that can include additional 'serializer', 'data' and request 'headers'
*     @param {function} callback - will be executed when the HTTPRequest is finished
*     @param {function} errorCallback(optional) - error handling callback
* */
document.getElementById('cc-form-shipping-info')
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
