(function() {

    angular.module("app")
    .factory("homeService", homeService);

    function homeService(httpService) {
        var service = {
            getAllData: getAllData,
        }

        return service;

        function getAllData() {
          var data = httpService.get("people");
          return data;
        }

    }

})();
