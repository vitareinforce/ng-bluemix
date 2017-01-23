(function() {

    angular.module("app")
    .factory("httpService", httpService);

    function httpService($http, $q, config) {
        var service = {
            get: get,
            post: post,
            put: put,
            patch: patch,
            update: update,
            del: del,
        }

        return service;

        function get(link) {
          var request = $http({
            url: config.apiAddress+"/"+link,
            method: "GET",
            headers: {
              "Content-type": "application/json"
            }
          });
          return(request.then(handleSuccess,handleError));
        }

        function post(link, jsonData) {
          var request = $http({
            url: config.apiAddress+"/"+link,
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            data: jsonData
          });
          return(request.then(handleSuccess,handleError));
        }

        function put(link, jsonData) {
          var request = $http({
            url: config.apiAddress+"/"+link,
            method: "PUT",
            headers: {
              "Content-type": "application/json"
            },
            data: jsonData
          });
          return(request.then(handleSuccess,handleError));
        }

        function patch(link, jsonData) {
          var request = $http({
            url: config.apiAddress+"/"+link,
            method: "PATCH",
            headers: {
              "Content-type": "application/json"
            },
            data: jsonData
          });
          return(request.then(handleSuccess,handleError));
        }

        function update(link, jsonData) {
          var request = $http({
            url: config.apiAddress+"/"+link,
            method: "UPDATE",
            headers: {
              "Content-type": "application/json"
            },
            data: jsonData
          });
          return(request.then(handleSuccess,handleError));
        }

        function del(link, jsonData) {
          var request = $http({
            url: config.apiAddress+"/"+link,
            method: "DELETE",
            headers: {
              "Content-type": "application/json"
            },
            data: jsonData
          });
          return(request.then(handleSuccess,handleError));
        }

        function handleSuccess(response) {
          return(response.data);
        }

        function handleError(response) {
          if(!angular.isObject(response.data) || !response.data.message) {
            return $q.reject("Unknown Error");
          }
          return $q.reject(response.message);
        }

    }

})();
