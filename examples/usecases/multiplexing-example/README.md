<p align="center"><a href="https://www.verygoodsecurity.com/"><img src="https://avatars0.githubusercontent.com/u/17788525" width="128" alt="VGS Logo"></a></p>
<p align="center"><i>Integration of VGS Collect.js with VGS Muptiplexing App</i></p>

The [VGS Multiplexing](https://github.com/verygoodsecurity/multiplexing/blob/master/integration/README.md) app facilitates payment multiplexing with integrations to 120+ gateways. This example shows how you can secure data through VGS Collect.js while using our payment gateway multiplexer.

## Flow diagram

<p align="center">
  <img src="https://i.ibb.co/RT250qB/multiplexing-runtime-flow.png" />
</p>

## 1. Run Multiplexing application

Follow the instructions and run
<a href="https://github.com/verygoodsecurity/multiplexing/blob/master/integration/README.md" taraget="_blank">Multiplexing</a> app.
Please reach out to our <a href="mailto:support@verygoodsecurity.com">support@verygoodsecurity.com</a> and request access to the repo if you're interested in the product.

## 2. Setup Collect.js Form

- Download and open locally `multiplexing.html` file in the browser.

- Change the link below to the latest VGS Collect library link:

```html
<script src="https://js.verygoodvault.com/vgs-collect/<version>/vgs-collect.js"></script>
```

Full list of available versions with release notes you can find in our [Changelog](https://www.verygoodsecurity.com/docs/vgs-collect/js/changelog).

- Replace the placeholders to your vault id and environment in order to use Collect form:

```javascript
const form = VGSCollect.create(
  "<vault-id>",
  "<environment>",
  function (state) {}
);
```

## 3. Setup Inbound Route

Skip this step if you already have configured Inbound Route for the Multiplexing app.

- Download `inbound.yaml` provided above and replace `destination_override_endpoint` in line 3 with the Multiplexing app <a href="https://github.com/verygoodsecurity/multiplexing/blob/master/integration/README.md#deployment" target="blank">public URL</a>.

- Import fixed `inbound.yaml` file to the <a href="https://dashboard.verygoodsecurity.com/" target="_blank">Dashboard</a>. Navigate to the `Dashboard` -> `Routes` -> `Add Route` -> `YAML file`:

<p align="center">
<img src="https://media.giphy.com/media/OgBQvlslOaDMeFrHJE/giphy.gif" />
</p>

## 3. Submit Form

Fill in and submit the form with the test data. With provided Collect.js setup, a secure form will make a request to the `/api/v1/financial_instruments` endpoint with the following data structure:

```
{
  "data": {
    "type":"financial_instruments",
    "attributes": {
      "instrument_type":"card",
      "details": {
        "first_name":"John",
        "last_name":"Doe",
        "number":"4111111111111111",
        "month":"1",
        "year":"2029",
        "verification_value":"111"
      }
    }
  }
}
```

The response should contain aliased card number:

```
"number": "XXXX-XXXX-XXXX-1111"
```
