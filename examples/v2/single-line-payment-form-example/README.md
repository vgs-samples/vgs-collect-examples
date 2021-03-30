# VGS Collect Single Line Credit Card Example

<p align="center">
  <img src="https://media.giphy.com/media/DnE4mdPPLkbIeLO1lF/giphy.gif"/>
</p>

## How to set up this example

1. `Copy` and `Paste` the content of an `.html` file into you application.

2. Change link below to the latest VGS Collect library link. You can find it at VGS Collect page of [VGS Dashboard](https://dashboard.verygoodsecurity.com/)

```html
<script src="https://js.verygoodvault.com/vgs-collect/<version>/vgs-collect.js"></script>
```
Full list of available versions with release notes you can find in our [Changelog](https://www.verygoodsecurity.com/docs/vgs-collect/js/changelog).

3. Change `<vault-id>` to your vault id to initialize your Collect form

```javascript
const form = VGSCollect.create('<vault-id>', '<environment>', function(state) {});
```

4. Integrate with VGS creating [inbound connection](https://www.verygoodsecurity.com/docs/getting-started#securing-your-inbound-connection) (or route) on [VGS Dashboard](https://dashboard.verygoodsecurity.com/) and submit Collect form


[Credit Card Example live view](https://verygoodsecurity.github.io/vgs-collect-examples/#credit-card-example)
