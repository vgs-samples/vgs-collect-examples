# VGS Collect Login Data Example

## How to set up this example

1. `Copy` and `Paste` the content of an `.html` file into you application.

2. Change link below to your personal VGS Collect.js library link. You can find it at VGS Collect page of [VGS Dashboard](https://dashboard.verygoodsecurity.com/)

VGS Collect.js v1.0

```html
<script src="https://js.verygoodvault.io/vgs-collect/1/<organization-id>.js"></script>
```

VGS Collect.js v2.0

```html
<script src="https://js.verygoodvault.com/vgs-collect/2/vgs-collect.js"></script>
```

3. Change `<environment>` to your `vault id` if you're using VGS Collect.js v1.0 or generated hash access key in 
case you're using v2.0 to initialize your form.

*Example v1.0:*

```javascript
const form = VGSCollect.create('<vault-id>', function(state) {});
```

*Example v2.0:*

```javascript
const form = VGSCollect.create('<access-key>', function(state) {});
```

4. Integrate with VGS creating [inbound connection](https://www.verygoodsecurity.com/docs/getting-started#securing-your-inbound-connection) (or route) on [VGS Dashboard](https://dashboard.verygoodsecurity.com/) and submit Collect form


[Login data Example live view](https://verygoodsecurity.github.io/vgs-collect-examples/#login-data-example)
