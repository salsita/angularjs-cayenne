(function(ng) {
    "use strict";

    ng.module('persist', []).factory('persistService', function() {
        return {
            /*
             * Store/load the value of element within scope
             *
             * Value is stored using localStorage
             *
             * @param {Object} scope Scope
             * @param {string} key Key
             * @param {string} prefix Custom prefix
             */
            persist: function(scope, key, prefix) {
           
                var name = (prefix ? prefix + '_' : '') + key;

                // History
                scope.$$$persistHistory = scope.$$$persistHistory || {};

                // Restore
                if(!scope.$$$persistHistory[key]) {

                    var value = null;

                    try {
                        value = JSON.parse(localStorage.getItem(name));
                    } catch(e) {}

                    if(value) {
                        scope[key] = value;
                    }

                    scope.$$$persistHistory[key] = true;
                }

                scope.$watch(key, function(newValue) {
                    localStorage.setItem(name, JSON.stringify(newValue));
                }, true);
           }
       };
    });
})(angular);
