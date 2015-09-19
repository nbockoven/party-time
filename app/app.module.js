var party = angular.module('party', ['ui.router', 'ngSanitize', 'angular.filter']);

party.run(['$rootScope', '$state', '$stateParams', function( $rootScope, $state, $stateParams ){

  $rootScope.$on('$stateNotFound', function (event, toState, toParams) {
    event.preventDefault();
    $state.go("lost");
  });

  $rootScope.$state       = $state;
  $rootScope.$stateParams = $stateParams;
}]);
