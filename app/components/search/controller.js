party.controller('search', ['$scope', 'candidates', function( $scope, candidates ){

  $scope.candidates = candidates;

  $scope.useParties = {};
  $scope.useGenders = {};

  $scope.$watch(function(){
    return {
      candidates: $scope.candidates,
      useParties: $scope.useParties,
      useGenders: $scope.useGenders
    }
  }, function( value ){
    var selected;

    $scope.partiesGroup = uniqueItems($scope.candidates, 'party');

    var filterAfterParties = [];

    selected = false;

    for( var j in $scope.candidates ){
      var p = $scope.candidates[j];
      for( var i in $scope.useParties ){
        if( $scope.useParties[i] ){
          selected = true;
          if( i == p.party ){
            filterAfterParties.push(p);
            break;
          }
        }
      }
    }

    if( !selected ){
      filterAfterParties = $scope.candidates;
    }

    $scope.gendersGroup = uniqueItems( filterAfterParties, 'gender' );

    var filterAfterGenders = [];

    selected = false;

    for( var j in filterAfterParties ){
      var p = filterAfterParties[j];
      for( var i in $scope.useGenders ){
        if( $scope.useGenders[i] ){
          selected = true;
          if( i == p.gender ){
            filterAfterGenders.push(p);
            break;
          }
        }
      }
    }

    if( !selected ){
      filterAfterGenders = filterAfterParties;
    }

    $scope.filteredCandidates = filterAfterGenders;
  }, true);

  $scope.$watch('filtered', function( newValue ){
    if( angular.isArray( newValue ) ){
      console.log(newValue.length);
    }
  }, true);


}]);


party.filter('count', function(){
  return function( collection, key ){
    var out = "test";
    for( var i = 0; i < collection.length; i++ ){
      //console.log(collection[i].pants);
      //var out = party.filter('filter')(collection[i].pants, "42", true);
    }
    return out;
  }
});

party.filter('groupBy', function(){
  return function ( collection, key ){
    if( collection === null ) return;
    return uniqueItems( collection, key );
  }
});


var uniqueItems = function( data, key ){
    var result = new Array();
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];

        if (result.indexOf(value) == -1) {
            result.push(value);
        }

    }
    return result;
};
