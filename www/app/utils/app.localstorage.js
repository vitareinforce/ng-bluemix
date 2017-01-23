(function() {

    angular.module("app")
    .factory("$localstorage", localStorage);

    function localStorage($window) {
        var service = {
            set: set,
            get: get,
            setObject: setObject,
            getObject: getObject,
            del: del,
            clear: clear,
            check: check
        }

        return service;

        function set(key, value) {
            $window.localStorage[key] = value;
        }

        function get(key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        }

        function setObject(key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        }

        function getObject(key) {
            return JSON.parse($window.localStorage[key] || "{}");
        }

        function del(key) {
            $window.localStorage.removeItem(key);
        }

        function clear() {
            $window.localStorage.clear();
        }

        function check(key) {
            if ($window.localStorage[key] === null) {
                return false;
            } else {
                return true;
            }
        }
    }

})();
