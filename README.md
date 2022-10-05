

# VGS Collect Examples

Here you can find examples of use cases for the VGS Collect JS library.

## What is it?

The VGS Collect library is a javascript library that allows you to integrate secure fields with non-secure fields in your page. The secure fields behave like traditional input fields while preventing access to the unsecured data.

Once the fields are initialized the library communicates the state of the fields through a JavaScript callback. The state object includes information about the validity, focused value and if the user has entered information in the field.

<img width="600px" src="https://www.verygoodsecurity.com/docs/vgs_theme/static/img/vgs-collect-diagram.png"/>

## Explore VGS Collect documentation

You can find more useful information about VGS Collect API in our [docs](https://www.verygoodsecurity.com/docs/vgs-collect/what-is-it).

## VGS Collect examples

### Use case examples
| Name | Used data | Code example | Live demo |
|--|--|--|--|
|Credit card|<ul><li>Cardholder name</li><li>Card number</li><li>Expiration date</li><li>CVC</li></ul>| [Code](examples/usecases/credit-card-example) | [Demo](https://vgs-samples.github.io/vgs-collect-examples/#credit-card-example) |
|Login data| <ul><li>Email</li><li>Password</li></ul>| [Code](examples/usecases/login-data-example) | [Demo](https://vgs-samples.github.io/vgs-collect-examples/#login-data-example) |
|PII data| <ul><li>Full name</li><li>SSN</li></ul> | [Code](examples/usecases/pii-example) | [Demo](https://vgs-samples.github.io/vgs-collect-examples/#pii-example) |
|Shipping info| <ul><li>Full name</li><li>Address</li><li>Country</li><li>City</li><li>State</li><li>ZIP code</li></ul>| [Code](examples/usecases/shipping-info-example) | [Demo](https://vgs-samples.github.io/vgs-collect-examples/#shipping-info-example) |
|Multiplexing | <ul><li>Cardholder name</li><li>Card number</li><li>Expiration date</li><li>CVC</li></ul> configured to match multiplexing API | [Code](examples/usecases/multiplexing-example) | [Contact us](mailto:support@verygoodsecurity.com) |

### Feature examples
| Name | Preview | Code example | Live demo |
|--|--|--|--|
|Capture BIN number| ![](https://media.giphy.com/media/aPNbZzj1pztRkgSCt1/giphy.gif) | [Code](examples/features/capture-bin-number-example) | [Demo](https://codepen.io/Averanya/pen/bGgpoME) |
|Compare field values| ![](https://media.giphy.com/media/TXg8ZWI5Wxcoms2ASL/giphy.gif) | [Code](examples/features/compare-field-values-example) | [Demo](https://codepen.io/Averanya/pen/ZEBRYdO) |
|Conditional rendering| ![](https://media.giphy.com/media/0bQ4Gr0sVe9uQgnoOY/giphy.gif) | [Code](examples/features/conditional-rendering-example) | [Demo](https://codepen.io/Averanya/pen/LYbjbBe) |
|Extended card brands| ![]() | [Code](examples/features/extended-card-brands-support-example) | [Demo](https://codepen.io/Averanya/pen/NWxXpKM) |
|Input masking| ![input-masking-example](https://media.giphy.com/media/WmAre8f7ydvm4Qet5D/giphy.gif) | [Code](examples/features/input-masking-example) | [Demo](https://codesandbox.io/s/static-o8njh) |
|Submit on Enter| ![submit-on-enter](https://media.giphy.com/media/iX4C8Ox5wVgV9ExEMn/giphy.gif) | [Code](examples/features/submit-on-enter-example) | [Demo](https://codepen.io/Averanya/pen/RwGRVaz) | 

### Customization examples
| Name | Preview | Code example | Live demo |
|--|--|--|--|
|Floating labels| ![floating-labels](https://media.giphy.com/media/fwhcskQaiffQDGo04c/giphy.gif) | [Code](examples/customization/floating-labels-example) | [Demo](https://codepen.io/Averanya/pen/be03033d57f1498f6230da9c13adf083) |
|Single line payment form| ![single-line-payment-form-](https://camo.githubusercontent.com/d364081f95ed94c412f9b429bdc45c9ae8b89ca45a95e981555e25e7de4becdc/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f446e45346d6450504c6b6249654c4f316c462f67697068792e676966) | [Code](examples/customization/single-line-payment-form-example) | [Demo](https://vgs-samples.github.io/vgs-collect-examples/#credit-card-example) |
