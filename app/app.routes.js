party.config(function( $stateProvider, $urlRouterProvider ){

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider

  .state('lost', {
    url: "/lost",
    templateUrl: "app/components/lost/view.html",
    data: {
      pagetitle: 'Page Not Found'
    }
  })

  .state('home', {
    url: "/",
    data: {
      pagetitle: 'Welcome'
    },
    views: {
      "": {
        controller: "home",
        templateUrl: "app/components/home/view.html"
      }
    }
  })

  .state('search', {
    url: "/search",
    data: {
      pagetitle: 'Search'
    },
    views: {
      "": {
        controller: "search",
        templateUrl: "app/components/search/view.html"
      }
    }
  })

  ;
});
