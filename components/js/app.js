

var makeBookApp = angular.module('makeBookApp', ['ngRoute','firebase','ngMaterial','ngAnimate']);

makeBookApp.controller('CardController', ['$scope','$http','$firebase','$mdDialog', function($scope, $http,$firebase,$mdDialog){
// ======= Development
	$scope.breakout = true;
	// $scope.msg='no message';
	// $scope.name = "angular is up!";
// ======= Development

$scope.contacts = [];
// ===============================
// =======	 FIREBASE 		=======

 var ref = new Firebase("https://makecontacts.firebaseio.com/contacts");
	 var contacts = $firebase(ref);
		$scope.contacts = contacts.$asArray();
	
// ===============================
// ===============================


//addContact
	$scope.addContact = function(){

		contacts.$push({
			name: $scope.createname,
			number: $scope.createnumber,
			picture: "http://placehold.it/200x200"
			
		}).then(function(){
	    		$scope.createname = ''; 
	    		$scope.createnumber = '';
	    	});

	};
// 
 $scope.showConfirm = function(ev,index) {
 	var deleteitem = index;
    var confirm = $mdDialog.confirm()
    
      .title('Delete Confirmation')
      .content('Are you Sure you want to Delete this Contact?')
      .ariaLabel('Confirm Deletion')
      .ok('Yes, Please!')
      .cancel('Nooo!')
      .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {
	  $scope.contacts.$remove(deleteitem);
    });
  };

// 
$scope.createShown = false;
$scope.toggleCreate = function(){
	$scope.createShown = !$scope.createShown;
};

$scope.searchShown = false;
$scope.toggleSearch = function(){
		$scope.searchShown = !$scope.searchShown;
	};

}]);

  
