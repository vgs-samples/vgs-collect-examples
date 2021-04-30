const f = VGSCollect.create("tntq4dwvhri", "sandbox", function (state) {});

f.field("#cc-holder .field-space", {
  type: "text",
  name: "card-name",
  placeholder: "Joe Business",
  validations: ["required"],
  ariaLabel: "Card holder name input",
  css,
}).replacePattern("/[^a-zA-Z\\s]+/g");

f.field("#cc-exp-short .field-space", {
  type: "card-expiration-date",
  name: "card-expirationDate-short",
  placeholder: "01 / 22",
  validations: ["validCardExpirationDate"],
  yearLength: "2",
  css,
});

f.field("#cc-exp-full .field-space", {
  type: "card-expiration-date",
  name: "card-expirationDate-full",
  placeholder: "01 / 2020",
  validations: ["validCardExpirationDate"],
  yearLength: "4",
  css,
});

f.field("#phone-number .field-space", {
  type: "text",
  name: "phone-number",
  placeholder: "+1 (XXX) XXX-XX-XX",
  validations: ["required"],
  css,
}).mask("+1 (999) 999-99-99");

f.field("#ssn .field-space", {
  type: "text",
  name: "ssn",
  placeholder: "SSN",
  validations: ["required"],
  css,
}).mask("999-99-9999", "*");

f.field("#zip-code .field-space", {
  type: "zip-code",
  name: "zip-code",
  placeholder: "ZIP code",
  validations: ["required"],
  css,
}).replacePattern("/[^\\d]+/g");

f.field("#birth-date .field-space", {
  type: "text",
  name: "password",
  placeholder: "mm/dd/yyyy",
  validations: ["required"],
  css,
}).mask("99/99/9999", "_");
