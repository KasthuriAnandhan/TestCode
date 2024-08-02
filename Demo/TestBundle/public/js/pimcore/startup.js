pimcore.registerNS("pimcore.plugin.DemoTestBundle");

pimcore.plugin.DemoTestBundle = Class.create({

    initialize: function () {
        document.addEventListener(pimcore.events.pimcoreReady, this.pimcoreReady.bind(this));
    },

    pimcoreReady: function (e) {
        // alert("DemoTestBundle ready!");
    }
});

var DemoTestBundlePlugin = new pimcore.plugin.DemoTestBundle();
