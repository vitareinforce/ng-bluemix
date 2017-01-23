(function() {

    angular
      .module('app')
      .filter('encode_HTML',['$sce', encode_HTML])
      .filter('capitalize', capitalize);

    function encode_HTML($sce){
      return function(text) {
        return $sce.trustAsHtml(text);
      };
    }

    function capitalize() {
      return function(input, all) {
        var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
        return (!!input) ? input.replace(
          reg, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        ) : '';
      }
    }

})();
