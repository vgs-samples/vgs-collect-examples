const form = VGSCollect.create("tntq4dwvhri", "sandbox", function (state) {
  if (state["card-name"]) {
    document.getElementById("state").innerText = JSON.stringify(
      { "card-number": state["card-number"] },
      null,
      "  "
    );
  }
});

const css = {
  "font-family": '"Helvetica Neue", Helvetica',
  "box-sizing": "border-box",
  "line-height": "1.5em",
  "font-size": "14px",
  "font-weight": "200",
  border: "none",
  color: "#31325F",
  width: "100%",
  height: "100%",
  "&::placeholder": {
    color: "#CFD7E0",
  },
};

const cardNumber = form.field("#card-number", {
  type: "card-number",
  name: "card-number",
  validations: ["required", "validCardNumber"],
  autoComplete: "cc-number",
  showCardIcon: "true",
  css: css,
  placeholder: "1234 1234 1234 1234",
  addCardBrands: [
    {
      type: "fsebt",
      pattern: /^6(0|1)/,
      format: /(\d{1,6})(\d{1,4})?(\d{1,4})?(\d{1,3})?(\d{1,2})?/,
      length: [16, 19],
      luhn: true,
    },
  ],
});

const cvc = form.field("#card-cvc", {
  elementId: "cc-cvc-field",
  type: "card-security-code",
  name: "card-cvc",
  validations: ["required", "validCardSecurityCode"],
  autoComplete: "cc-csc",
  css: css,
  placeholder: "CVC",
});

const expDate = form.field("#card-expiry", {
  type: "card-expiration-date",
  name: "card-expiry",
  validations: ["required", "validCardExpirationDate"],
  autoComplete: "cc-exp",
  css: css,
  placeholder: "MM / YYYY",
});

const name = form.field("#card-name", {
  type: "text",
  name: "card-name",
  validations: ["required"],
  autoComplete: "cc-name",
  css: css,
  placeholder: "John Doe",
});

cardNumber.setCVCDependency(cvc);

document.getElementById("collect-form").addEventListener(
  "submit",
  function (e) {
    e.preventDefault();
    form.submit("/post", {}, function (status, data) {
      document.getElementById("message").innerText =
        "Request was submitted successfully!";
    });
  },
  false
);
