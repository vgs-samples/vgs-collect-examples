const f = VGSCollect.create("tntq4dwvhri", function (state) {});

const css = {
  fontSize: "16px",
  fontFamily: "Helvetica Neue, sans-serif",
  fontWeight: "200",
  "&:placeholder": {
    fontSize: "16px",
    fontFamily: "Helvetica Neue, sans-serif",
    fontWeight: "200",
    color: "#756bb1",
  },
  color: "#756bb1",
};

f.field("#cc-holder .field-space", {
  type: "text",
  name: "card-name",
  placeholder: "Joe Business",
  validations: ["required"],
  ariaLabel: "Card holder name input",
  css: css,
}).replacePattern("/[^a-zA-Z\\s]+/g");

f.field("#zip-code .field-space", {
  type: "zip-code",
  name: "zip-code",
  placeholder: "Zip code",
  validations: ["required"],
  css: css,
}).replacePattern("/[^\\d]+/g");

f.field("#phone-number .field-space", {
  type: "text",
  name: "phone-number",
  placeholder: "+1 (XXX) XXX-XX-XX",
  validations: ["required"],
  css: css,
}).mask("+1 (999) 999-99-99");

f.field("#ssn .field-space", {
  type: "text",
  name: "ssn",
  placeholder: "SSN",
  validations: ["required"],
  css: css,
}).mask("999-99-9999", "*");

f.field("#birth-date .field-space", {
  type: "text",
  name: "password",
  placeholder: "mm/dd/yyyy",
  validations: ["required"],
  css: css,
}).mask("99/99/9999", "_");

f.field("#cc-exp-short .field-space", {
  type: "card-expiration-date",
  name: "card-expirationDate-short",
  placeholder: "01 / 22",
  autoComplete: "cc-exp",
  validations: ["validCardExpirationDate"],
  yearLength: "2",
  css: css,
});

f.field("#cc-exp-full .field-space", {
  type: "card-expiration-date",
  name: "card-expirationDate-full",
  placeholder: "01 / 2020",
  autoComplete: "cc-exp",
  validations: ["validCardExpirationDate"],
  css: css,
});

document.getElementById("masked-inputs-form").addEventListener(
  "submit",
  function (e) {
    e.preventDefault();
    f.submit("/post", {}, function (status, data) {
      document.getElementById("response").innerText = JSON.stringify(
        data.json,
        null,
        "  "
      );
    });
  },
  false
);
