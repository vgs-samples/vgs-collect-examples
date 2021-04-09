<p align="center"><a href="https://www.verygoodsecurity.com/"><img src="https://avatars0.githubusercontent.com/u/17788525" width="128" alt="VGS Logo"></a></p>
<p align="center"><i>Integration of VGS Collect.js with VGS Muptiplexing App</i></p>

The [VGS Multiplexing](https://github.com/verygoodsecurity/multiplexing/blob/master/integration/README.md) app facilitates payment multiplexing with integrations to 120+ gateways. This example shows how you can secure data through VGS Collect.js while using our payment gateway multiplexer.

## Flow

<p align="center">
  <img src="https://api.media.atlassian.com/file/804e00b0-78b7-4738-b6f5-a82224a5e8af/binary?token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5N2Y2ODMyNS0yNTlhLTQxZjAtYWQyNi1iYjA4ZmVjZWQyZGQiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOjgwNGUwMGIwLTc4YjctNDczOC1iNmY1LWE4MjIyNGE1ZThhZiI6WyJyZWFkIl19LCJleHAiOjE2MTgwMDYyMjUsIm5iZiI6MTYxNzkyMzI0NX0.FGxs70deJGR5iqb1Ew7Bz467E2KxpTkURST0o5OTUiE&client=97f68325-259a-41f0-ad26-bb08feced2dd&name=multiplexing-runtime-flow.png" />
</p>

## 1. Run Mulptiplexing application

Follow the instructions and install 
<a href="https://github.com/verygoodsecurity/multiplexing/blob/master/integration/README.md" taraget="_blank"></a> app. 
Please reach out to our <a href="mailto:support@verygoodsecurirty.com">support@verygoodsecurirty.com</a> and request access to the repo if you're interested in the product.

## 2. Setup Collect.js Form

1. Open `multiplexing.html` file and follow instructions on the screen.

2. Change the link below to the latest VGS Collect library link. You can find it at VGS Collect page of [VGS Dashboard](https://dashboard.verygoodsecurity.com/)

```html
<script src="https://js.verygoodvault.com/vgs-collect/<version>/vgs-collect.js"></script>
```
Full list of available versions with release notes you can find in our [Changelog](https://www.verygoodsecurity.com/docs/vgs-collect/js/changelog).

3. Change `<vault-id>` to your vault id to initialize your Collect form:

```javascript
const form = VGSCollect.create('<vault-id>', '<environment>', function(state) {});
```

## 3. Setup Inbound Route

Follow instructions below if you don't have Inbound Route configured yet.

1. Download `inbound.yaml` provided above and replace `destination_override_endpoint` in line 3 with the Multiplexing app <a href="https://github.com/verygoodsecurity/multiplexing/blob/master/integration/README.md#deployment" target="blank">public URL</a>.

2. Import fixed `inbound.yaml` file to the <a href="https://dashboard.verygoodsecurity.com/" target="_blank">Dashboard</a>. Navigate to the `Dashboard` -> `Routes` -> `Add Route` -> `YAML file`:

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
