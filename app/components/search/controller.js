party.controller('search', ['$scope', function( $scope ){

  $scope.candidates = [
    // REPUBLICAN
    {
      'first_name': 'Jeb',
      'last_name': 'Bush',
      'party': 'Republican',
      'experience': 'Former Governor of Florida',
      'image': 'https://s2.graphiq.com/sites/default/files/980/media/images/t2/Jeb_Bush_1786288.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'Ben',
      'last_name': 'Carson',
      'party': 'Republican',
      'experience': 'Former Neurosurgeon',
      'image': 'https://s.graphiq.com/sites/default/files/980/media/images/t2/Ben_Carson_6036997.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'Donald',
      'last_name': 'Trump',
      'party': 'Republican',
      'experience': 'President, Trump Organization',
      'image': 'https://s2.graphiq.com/sites/default/files/980/media/images/t2/Donald_Trump_6522122.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'Ted',
      'last_name': 'Cruz',
      'party': 'Republican',
      'experience': 'U.S. Senator of Texas',
      'image': 'https://s3.graphiq.com/sites/default/files/980/media/images/t2/Ted_Cruz_1786303.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'Marco',
      'last_name': 'Rubio',
      'party': 'Republican',
      'experience': 'U.S. Senator of Florida',
      'image': 'https://s.graphiq.com/sites/default/files/980/media/images/t2/Marco_Rubio_1786292.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'Mike',
      'last_name': 'Huckabee',
      'party': 'Republican',
      'experience': 'Former Governor of Arkansas',
      'image': 'https://s2.graphiq.com/sites/default/files/980/media/images/t2/Mike_Huckabee_1786294.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'Rand',
      'last_name': 'Paul',
      'party': 'Republican',
      'experience': 'U.S. Senator of Kentucky',
      'image': 'https://s3.graphiq.com/sites/default/files/980/media/images/t2/Rand_Paul_5645560.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'Carly',
      'last_name': 'Fiorina',
      'party': 'Republican',
      'experience': 'Former CEO of HP',
      'image': 'https://s.graphiq.com/sites/default/files/980/media/images/t2/Carly_Fiorina_6036992.jpg',
      'gender': 'Female'
    },
    {
      'first_name': 'Scott',
      'last_name': 'Walker',
      'party': 'Republican',
      'experience': 'Governor of Wisconsin',
      'image': 'https://s2.graphiq.com/sites/default/files/980/media/images/t2/Scott_Walker_1786302.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'John',
      'last_name': 'Kasich',
      'party': 'Republican',
      'experience': 'Governor of Ohio',
      'image': 'https://s3.graphiq.com/sites/default/files/980/media/images/t2/John_Kasich_1786289.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'Chris',
      'last_name': 'Christie',
      'party': 'Republican',
      'experience': 'Governor of New Jersey',
      'image': 'https://s2.graphiq.com/sites/default/files/980/media/images/t2/Chris_Christie_1786282.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'Rick',
      'last_name': 'Santorum',
      'party': 'Republican',
      'experience': 'Former U.S. Senator of Pennsylvania',
      'image': 'https://s.graphiq.com/sites/default/files/980/media/images/t2/Rick_Santorum_1786299.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'Bobby',
      'last_name': 'Jindal',
      'party': 'Republican',
      'experience': 'Governor of Louisiana',
      'image': 'https://s2.graphiq.com/sites/default/files/980/media/images/t2/Bobby_Jindal_1786297.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'Lindsey',
      'last_name': 'Graham',
      'party': 'Republican',
      'experience': 'U.S. Senator of South Carolina',
      'image': 'https://s.graphiq.com/sites/default/files/980/media/images/t2/Lindsey_Graham_6387899.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'George',
      'last_name': 'Pataki',
      'party': 'Republican',
      'experience': 'Former Governor of New York',
      'image': 'https://s2.graphiq.com/sites/default/files/980/media/images/t2/George_Pataki_6502634.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'Jim',
      'last_name': 'Gilmore',
      'party': 'Republican',
      'experience': 'Former Governor of Virginia',
      'image': 'https://s3.graphiq.com/sites/default/files/980/media/images/t2/Jim_Gilmore_6638843.jpg',
      'gender': 'Male'
    },

    // DEMOCRATIC
    {
      'first_name': 'Hillary',
      'last_name': 'Clinton',
      'party': 'Democratic',
      'experience': 'Former Secretary of State',
      'image': 'https://s.graphiq.com/sites/default/files/980/media/images/t2/Hillary_Clinton_1786283.jpg',
      'gender': 'Female'
    },
    {
      'first_name': 'Bernie',
      'last_name': 'Sanders',
      'party': 'Democratic',
      'experience': 'U.S. Senator of Vermont',
      'image': 'https://s3.graphiq.com/sites/default/files/980/media/images/t2/Bernie_Sanders_1786280.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'Martin',
      'last_name': 'O\'Malley',
      'party': 'Democratic',
      'experience': 'Former Governor of Maryland',
      'image': 'https://s.graphiq.com/sites/default/files/980/media/images/t2/Martin_OMalley_1786293.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'Jim',
      'last_name': 'Webb',
      'party': 'Democratic',
      'experience': 'Former U.S. Senator of Virginia',
      'image': 'https://s3.graphiq.com/sites/default/files/980/media/images/t2/Jim_Webb_6387898.jpg',
      'gender': 'Male'
    },
    {
      'first_name': 'Lincoln',
      'last_name': 'Chafee',
      'party': 'Democratic',
      'experience': 'Former Governor of Rhode Island',
      'image': 'https://s3.graphiq.com/sites/default/files/980/media/images/t2/Lincoln_Chafee_6387900.jpg',
      'gender': 'Male'
    }
  ];

  $scope.genders = { Female: true, Male: true };

  $scope.parties = { Democratic: true, Republican: true };

  $scope.filterByGender = function( candidate ) {
    return $scope.genders[candidate.gender];
  }

  $scope.filterByParty = function( candidate ){
    return $scope.parties[candidate.party]
  }
}]);
