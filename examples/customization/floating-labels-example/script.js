function collectInit() {
  const f = VGSCollect.create("tntqhq6lasi", "sandbox", function (state) {});

  const classes = {
    empty: "field--empty",
    valid: "field--valid",
    invalid: "field--invalid",
    focused: "field--focused",
    dirty: "field--dirty",
    touched: "field--touched",
  };

  const css = {
    fontSize: "16px",
    "&:focus": {
      outline: "none",
    },
  };

  f.field("#cc-name", {
    type: "text",
    name: "holder_name",
    validations: ["required"],
    css: css,
    classes: classes,
  });

  f.field("#cc-number", {
    type: "card-number",
    name: "vault_pan_token",
    validations: ["required", "validCardNumber"],
    showCardIcon: {
      width: "38px",
      height: "100%",
    },
    css: css,
    classes: classes,
  });

  function addListener(node, type, cb, opts) {
    if (node.attachEvent) {
      node.attachEvent(type, cb, opts);
    } else {
      node.addEventListener(type, cb, opts);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    f.submit(
      "/post",
      {
        method: "POST",
      },
      function (status, data) {
        console.log(status, data);
      }
    );
  }

  addListener(
    document.getElementById("cc-form"),
    "submit",
    handleSubmit,
    false
  );
}

collectInit();
