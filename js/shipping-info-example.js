const shipping_form = VGSCollect.create(
  "tntq4dwvhri",
  "sandbox",
  function (state) {
    document.getElementById("shipping-preview").innerText = JSON.stringify(
      state,
      null,
      "  "
    );
    if (state) {
      for (let field in state) {
        if (
          state[field].errorMessages &&
          !state[field].isValid &&
          !state[field].isFocused &&
          state[field].isDirty
        ) {
          const error = state[field].errorMessages[0];
          document.querySelector(`[data-name='${field}']`).innerText = error;
        } else if (state[field].isValid || state[field].isFocused) {
          document.querySelector(`[data-name='${field}']`).innerText = "";
          const frame = document.querySelector(`[data-name='${field}']`)
            .previousElementSibling;
          frame.classList.remove("invalid-field");
        }
      }
    }
  }
);

const shippingName = shipping_form.field("#shipping-full-name .form-control", {
  type: "text",
  name: "shippingFirstName",
  placeholder: "Joe Business",
  validations: ["required"],
  autoComplete: "name",
  css,
});

const address = shipping_form.field("#shipping-address .form-control", {
  type: "text",
  name: "shippingAddress",
  placeholder: "Address",
  validations: ["required"],
  css,
});

const country = shipping_form.field("#shipping-country .form-control", {
  type: "dropdown",
  name: "shippingCountry",
  placeholder: "Select Country",
  validations: ["required"],
  autoComplete: "country",
  options: [
    { value: "USA", text: "United States of America" },
    { value: "Canada", text: "Canada" },
    { value: "Mexica", text: "Mexica" },
  ],
  css,
});

const city = shipping_form.field("#shipping-city .form-control", {
  type: "text",
  name: "shippingCity",
  placeholder: "City",
  validations: ["required"],
  autoComplete: "city",
  css,
});

const region = shipping_form.field("#shipping-region .form-control", {
  type: "text",
  name: "shippingRegion",
  placeholder: "State",
  validations: ["required"],
  autoComplete: "region",
  css,
});

const zip = shipping_form.field("#shipping-zip .form-control", {
  type: "zip-code",
  name: "shippingZip",
  placeholder: "ZIP code",
  validations: ["required"],
  autoComplete: "postal-code",
  css,
});

Promise.all([
  shippingName.promise,
  address.promise,
  country.promise,
  city.promise,
  region.promise,
  zip.promise,
]).then(function () {
  const fields = document.querySelectorAll("#form-shipping-info .loading");
  for (var i = 0; i < fields.length; i++) {
    fields[i].classList.remove("loading");
  }
});

shipping_form.on("enterPress", function () {
  const targetForm = document.getElementById("form-shipping-info");
  submitForm(shipping_form, targetForm);
});

document.getElementById("form-shipping-info").addEventListener(
  "submit",
  function (e) {
    let targetForm = e.target;
    e.preventDefault();
    submitForm(shipping_form, targetForm);
  },
  false
);
