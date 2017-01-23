(function() {
  angular
    .module('app')
    .config(router);

  function router($urlRouterProvider, $stateProvider) {
    $stateProvider.
        state('home', {
          url:'/home',
          templateUrl: 'app/home/home.html',
          controller: 'home'
        });
  }
})();
