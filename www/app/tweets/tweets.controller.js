(function() {
  angular
    .module('app')
    .controller('tweets', tweets);

  function tweets(tweetsService) {
    var t = this;

    tweetsService.getAllData().then(
			function(allData) {
				t.datas = allData;
			}
		);

  }
})();
