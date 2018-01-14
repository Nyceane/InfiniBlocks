// This file for polyfills should be loaded in the header of any JavaScript document.

// Object.keys polyfill. Taken from ES5-Shim: https://github.com/es-shims/es5-shim/blob/v2.0.5/es5-shim.js#L544
if (!Object.keys) {
    Object.keys = function keys(object) {
        if ((typeof object != "object" && typeof object != "function") || object === null) {
            throw new TypeError("Object.keys called on a non-object");
        }

        var keys = [];
        for (var name in object) {
            if (object.hasOwnProperty(name)) {
                keys.push(name);
            }
        }

        return keys;
    };
}

// startsWith polyfill
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}