app.factory('shopcarServer', ['baseConfig', function(baseConfig) {
    return {
        getProducts: function() {
            return baseConfig.Common.ajax("http://localhost:8008/data/");
        }
    };
}])