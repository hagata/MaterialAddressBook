

var makeBookApp = angular.module('makeBookApp', ['ngRoute']);

makeBookApp.controller('CardController', ['$scope','$http', function($scope, $http){
// ======= Development
	// $scope.breakout = true;
	$scope.msg='no message';
	// $scope.name = "angular is up!";
// ======= Development


// Data
//	

	$scope.contacts =[];

	$http.get('js/contacts.js').success(function(data){
		//breakout data
		$scope.rawData = data;
		$scope.rawLength = data.contacts.length;
		$scope.rawObj = data.contacts[0].name;
		//

		$scope.contacts = data.contacts;

	});

// addContact
	$scope.addContact = function(){

		$scope.contacts.push({
			name: $scope.createname,
			number: $scope.createnumber,
			picture: "http://placehold.it/200x200"
			
		}).then(function(){
	    		$scope.createname = ''; 
	    	});

		// $scope.showCreate = !$scope.showCreate;
	};

// Remove/Delete contact
	$scope.contactDelete = function(index){
		$scope.contacts.splice(index,1);
	};

}]);

makeBookApp.controller('EditController', ['$scope', function($scope){

	$scope.nested="unconfirmed";
	// Set Default Values
	$scope.editContactName = $scope.contact.name;
	$scope.editContactNumber = $scope.contact.number;
	$scope.editSubmit = function(index){
		

		$scope.contacts[index] = {

			name: $scope.editContactName,
			number:$scope.editContactNumber,
			picture:"http://placehold.it/200x200"
		};

	};

	$scope.contactEditConfirm = function(){
		$scope.nested="confirm";
		// $scope.editShow = false;
	};
	
}]);