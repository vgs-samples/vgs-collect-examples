const form = VGSCollect.create("tntq4dwvhri", "sandbox", function (state) {});

let activeFields = [];
let activeForm = "payment";

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

const handleFormSelect = () => {
  const value = document.getElementById("form-selector").value;
  if (value === activeForm) return;
  switch (value) {
    case "payment":
      destroyActiveForm(value);
      initPaymentForm();
      break;
    case "login":
      destroyActiveForm(value);
      initLoginForm();
      break;
    default:
      console.log("Incorrect form type");
  }
};

const destroyActiveForm = (value) => {
  const prevActiveFormNode = document.getElementById(activeForm);
  const currActiveFormNode = document.getElementById(value);
  prevActiveFormNode.classList.add("hidden");
  activeFields.forEach((field) => field.delete());
  currActiveFormNode.classList.remove("hidden");
  activeForm = value;
};

// initialize fields for the payment form
const initPaymentForm = () => {
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

  activeFields = [name, cardNumber, cvc, expDate];
};

// initialize fields for the login form
const initLoginForm = () => {
  const login = form.field("#username", {
    type: "text",
    name: "login",
    validations: ["required"],
    css: css,
    placeholder: "Username",
  });

  const password = form.field("#password", {
    type: "password",
    name: "password",
    validations: ["required"],
    placeholder: "*********",
    css: css,
  });

  activeFields = [login, password];
};

initPaymentForm();

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

document
  .getElementById("submit")
  .addEventListener("click", () => handleSubmit());
