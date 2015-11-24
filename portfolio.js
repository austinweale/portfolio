var myApp = angular.module('myApp', ['firebase']);

myApp.controller('myCtrl', function($scope, $firebaseAuth, $firebaseArray, $firebaseObject
){
	$scope.ref = new Firebase("https://info343portfolio.firebaseio.com/");
	//var test = ref.child('Portfolio');

	$scope.data = $firebaseArray($scope.ref);




	$scope.toggle = function(id){
		var curr = $scope.ref.child(id);

		$scope.current = $firebaseArray(curr);
		$scope.current.$loaded().then(function(){
			angular.forEach($scope.current, function(key) {
				console.log(key); //add to array instead
			});
		});

		if(!$scope.$$phase) {
          $scope.$apply();
        }

	}


	$scope.toggle("Dawg Coffee");


});