/**
 * Requirejs config example
 */

require.config({
    baseUrl: "/",
    paths: {

    },
    shim: {
        "mydemodep": "mydemodep"
    },
    deps: []
});
/**
 * Initialize dependenices registered inside ministack container.
 */
if (typeof window.unittestenvy == "undefined"
    && typeof requirejs != "undefined") {
    if (typeof ministack != "undefined") {
        ministack.amd();
    }

};
