(function() {

    angular.module("app")
    .factory("tweetsService", tweetsService);

    function tweetsService(httpService) {
        var service = {
            getAllData: getAllData,
        }

        return service;

        function getAllData() {
          var data = httpService.getFullLinks("http://bustercrimson.mybluemix.net/showtweet");
          return data;
        }

    }

})();
