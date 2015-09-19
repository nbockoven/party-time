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
      "home": {
        controller: "home",
        templateUrl: "app/components/home/view.html"
      }
    }
  })

  .state('questionnaire', {
    url: "/questionnaire",
    data: {
      pagetitle: 'Welcome'
    },
    views: {
      "questionnaire": {
        controller: "questionnaire",
        templateUrl: "app/components/questionnaire/view.html"
      }
    }
  })

  .state('search', {
    url: "/search",
    data: {
      pagetitle: 'Search'
    },
    views: {
      "search": {
        controller: "search",
        templateUrl: "app/components/search/view.html"
      }
    }
  })

  ;
});
