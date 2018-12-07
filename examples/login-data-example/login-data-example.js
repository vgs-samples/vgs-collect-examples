/*  VGS Collect form initialization
*   SecureForm.create(environment, onUpdateCallback)→ Form
*     @constructor SecureForm
*     @param {string} environment - name of one of the domains in the whitelist that this form will submit to
*     @param {function} onUpdateCallback - callback that will be called whenever the form state changes
*                                          It receives the state object representing the current state
*     @returns {object} Form
* */

const login_form = SecureForm.create('development', function(state) {
  /* @returns {object} state - state object represents the current form state */
});

/*  Create VGS Collect field for email
*   Form#field(selector, properties) → Field
*     @param {string} selector - CSS Selector that points to the element where the field will be added
*     @param {object} properties - set of configurable options
*     @returns {object} Field
* */
login_form.field('#email', {
  type: 'text',
  name: 'login.email',
  placeholder: 'test@example.com',
  validations: ['required'],
});

/*  Create VGS Collect field for password
*   Form#field(selector, properties) → Field
*     @param {string} selector - CSS Selector that points to the element where the field will be added
*     @param {object} properties - set of configurable options
*     @returns {object} Field
* */
login_form.field('#password', {
  type: 'password',
  name: 'login.password',
  validations: ['required'],
});

/*  Submits all of the form fields by executing a POST request.
*   Form#submit(path, options, callback, errorCallback) → Form
*     @param {string} path - path that the form will be submitted to
*     @param {object} options - options object that can include additional 'serializer', 'data' and request 'headers'
*     @param {function} callback - will be executed when the HTTPRequest is finished
*     @param {function} errorCallback(optional) - error handling callback
* */
document.getElementById('form-login-info')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    login_form.submit('/post', {
      headers: {
        'x-custom-header': 'Oh yes. I am a custom header',
      },
      data: {
        type: 'login',
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
