# VGS Collect Login Data Example

## How to set up this example

1. Change link below to your personal VGS Collect library link. You can find it at VGS Collect page of [VGS Dashboard](https://dashboard.verygoodsecurity.com/)

```html
<script src="https://js.verygoodvault.io/vgs-collect/1/<organization-id>.js"></script>
```

2. Change `<vault-id>` to your vault id to initialize your Collect form

```javascript
const form = VGSCollect.create('<vault-id>', function(state) {});
```

3. Integrate with VGS creating [inbound connection](https://www.verygoodsecurity.com/docs/getting-started#securing-your-inbound-connection) (or route) on [VGS Dashboard](https://dashboard.verygoodsecurity.com/) and submit Collect form


[Credit Card Example live view](https://verygoodsecurity.github.io/vgs-collect-examples/#credit-card-example)