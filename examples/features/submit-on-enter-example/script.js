const form = VGSCollect.create("tntq4dwvhri", "sandbox", function (state) {});

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

const name = form.field("#card-name", {
  type: "text",
  name: "card-name",
  validations: ["required"],
  autoComplete: "cc-name",
  css: css,
  placeholder: "John Doe",
});

const cardNumber = form.field("#card-number", {
  type: "card-number",
  name: "card-number",
  validations: ["required", "validCardNumber"],
  autoComplete: "cc-number",
  showCardIcon: "true",
  css: css,
  placeholder: "1234 1234 1234 1234",
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
  placeholder: "MM / YY",
  yearLength: "2",
});

const handleSubmit = (e) => {
  if (e) {
    e.preventDefault();
  }
  form.submit("/post", {}, (status, data) => {
    document.getElementById("response").innerText = JSON.stringify(
      data.json,
      null,
      " "
    );
  });
};

document.addEventListener("submit", handleSubmit);

form.on("enterPress", (field) => {
  console.log(field);
  handleSubmit();
});
