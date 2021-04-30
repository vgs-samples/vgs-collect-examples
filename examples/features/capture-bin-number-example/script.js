let bin;

const form = VGSCollect.create("tntq4dwvhri", "sandbox", function (state) {
  if (Object.keys(state).length === 2 && state["card-number"].bin) {
    bin = state["card-number"].bin;
    console.log(bin);
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
});

const cvc = form.field("#card-cvc", {
  type: "card-security-code",
  name: "cvv",
  validations: ["required", "validCardSecurityCode"],
  autoComplete: "cc-csc",
  css: css,
  placeholder: "CVC",
});

document.getElementById("collect-form").addEventListener(
  "submit",
  function (e) {
    e.preventDefault();
    form.submit("/post", {}, function (status, data) {
      document.getElementById("response").innerText = JSON.stringify(
        data.json,
        null,
        4
      );
    });
  },
  false
);
