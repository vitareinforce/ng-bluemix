(function() {
  angular
    .module('app')
    .config(router);

  function router($urlRouterProvider, $stateProvider) {
    $stateProvider.
        state('tweets', {
          url:'/tweets',
          templateUrl: 'app/tweets/tweets.html',
          controller: 'tweets'
        });
  }
})();
