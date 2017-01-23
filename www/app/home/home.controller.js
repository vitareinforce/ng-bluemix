(function() {
  angular
    .module('app')
    .controller('home', home);

  function home(homeService) {
    var h = this;

    homeService.getAllData().then(
			function(allData) {
				h.datas = allData;
			}
		);
  }
})();
