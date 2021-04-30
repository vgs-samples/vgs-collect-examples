var payment_form = VGSCollect.create(
  "tntq4dwvhri",
  "sandbox",
  function (state) {}
);
var requestError = $(".request-error");
var requestSuccess = $(".request-success");
var styles = {
  background: "#FFFFFF",
  border: "1px solid #CED7E6",
  boxSizing: "border-box",
  borderRadius: "4px",
  height: "40px",
  padding: "0 16px",
};

payment_form.field("#payment-cc-holder .field-space", {
  type: "text",
  name: "cardName",
  validations: ["required"],
  css: styles,
});

payment_form.field("#payment-cc-number .field-space", {
  type: "card-number",
  name: "cardNumber",
  validations: ["required", "validCardNumber"],
  showCardIcon: {
    right: "10px",
  },
  css: Object.assign(styles, { paddingRight: "45px" }),
});

payment_form.field("#payment-cc-cvc .field-space", {
  type: "card-security-code",
  name: "cardCvc",
  validations: ["required", "validCardSecurityCode"],
  css: styles,
});

payment_form.field("#payment-cc-exp .field-space", {
  type: "card-expiration-date",
  name: "cardExpirationDate",
  validations: ["required", "validCardExpirationDate"],
  css: styles,
});

function showAlert(elem) {
  elem.fadeTo(2000, 500).slideUp(500, function () {
    elem.slideUp(500);
    if (elem === requestError) {
      requestError.find("strong").html("");
    }
  });
}

document.getElementById("payment-form-submit").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    payment_form.submit(
      "/post",
      {
        headers: {
          "x-custom-header": "Oh yes. I am a custom header",
        },
      },
      function (status, data) {
        showAlert(requestSuccess);
      },
      function (errors) {
        for (var error in errors) {
          var errorMessage = errors[error].errorMessages[0];
          requestError
            .find("strong")
            .append(`<span>${errors[error].name} ${errorMessage}</span><br/>`);
        }
        showAlert(requestError);
      }
    );
  },
  false
);
