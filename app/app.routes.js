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
    controller: "home",
    templateUrl: "app/components/home/view.html",
    data: {
      pagetitle: 'Welcome'
    }
  })

  .state('questionnaire', {
    url: "/questionnaire",
    controller: "questionnaire",
    templateUrl: "app/components/questionnaire/view.html",
    data: {
      pagetitle: 'Questions'
    }
  })

  .state('candidates', {
    url: "/candidates",
    controller: "candidates",
    templateUrl: "app/components/candidates/view.listing.html",
    data: {
      pagetitle: 'Candidates'
    }
  })
  .state('candidates.detail', {
    url: "/candidates/{candidateID:int}",
    controller: function( $scope, $stateParams ){
      $scope.candidateID = $stateParams.candidateID;
    },
    templateUrl: "app/components/candidates/view.detail.html",
    data: {
      pagetitle: 'Candidate'
    }
  })

  ;
});
