# MinistackJS 
MinistackJS helps to invoke any dependency from requirejs library even before requirejs is loaded itself. This is quite useful when your app is rendered  from  server side components to be used before requirejs is loaded.

## USAGE
``` JS
   ministack.require(["mydemodep"], function (mydemodep) {
        console.log(mydemodep.sayhi());
    });
```
## EXAMPLE
**Load ministack library before requirejs**
``` html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Example</title>
    <script src="../src/ministack.min.js"></script>
</head>
```

**Configure requirejs**
``` js
// config.js
require.config({
        baseUrl: "/",
        shim: {
            "mydemodep": "mydemodep"
        }
});
/**
 * Initialize dependenices registered 
 * inside ministack container.
 */
if (typeof window.unittestenvy == "undefined"
    && typeof requirejs != "undefined") {
    if (typeof ministack != "undefined") {
        ministack.amd();
    }

};


```

**Load requirejs**
``` html
<body>
 ...
 <script data-main="config" src="require.js"></script>
</body>

```

**Invoke your dependencies before requirejs**
``` html
<body>
    <script>
    ministack.require(["mydemodep"], function (mydemodep) {
        console.log(mydemodep.sayhi());
    });
    </script>
 ...
</body>
```

:p have fun...