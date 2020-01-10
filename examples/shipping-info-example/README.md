# VGS Collect Shipping Info Example

## How to set up this example

1. `Copy` and `Paste` the content of an `.html` file into you application.

2. Change link below to your personal VGS Collect library link. You can find it at VGS Collect page of [VGS Dashboard](https://dashboard.verygoodsecurity.com/)

```html
<script src="https://js.verygoodvault.io/vgs-collect/2.0/vgs-collect.js"></script>
```

3. Change `<vault-id>` to your vault id to initialize your Collect form

```javascript
const form = VGSCollect.create('<vault-id>', function(state) {});
```

4. Integrate with VGS creating [inbound connection](https://www.verygoodsecurity.com/docs/getting-started#securing-your-inbound-connection) (or route) on [VGS Dashboard](https://dashboard.verygoodsecurity.com/) and submit Collect form


[Shipping Info Example live view](https://verygoodsecurity.github.io/vgs-collect-examples/#shipping-info-example)
