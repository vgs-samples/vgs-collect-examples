var pii_form = VGSCollect.create("tntq4dwvhri", "sandbox", function (state) {});
var requestError = $(".request-error");
var requestSuccess = $(".request-success");
var styles = {
  border: "none",
  boxSizing: "border-box",
  padding: "0 15px",
  fontSize: "14px",
  "&::placeholder": {
    fontWeight: "100",
    color: "#BABDB5",
    fontSize: "14px",
  },
};

pii_form.field("#pii-first-name .field-space", {
  type: "text",
  name: "firstName",
  validations: ["required"],
  placeholder: "Full name",
  css: styles,
});

pii_form.field("#pii-ssn .field-space", {
  type: "text",
  name: "piiSsn",
  validations: ["required"],
  placeholder: "XX-XXX-XXXX",
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

document.getElementById("pii-form").addEventListener(
  "submit",
  function (e) {
    e.preventDefault();
    pii_form.submit(
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
