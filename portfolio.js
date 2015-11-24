var myApp = angular.module('myApp', ['firebase']);

myApp.controller('myCtrl', function($scope, $firebaseAuth, $firebaseArray, $firebaseObject
){
	$scope.ref = new Firebase("https://info343portfolio.firebaseio.com/");
	//var test = ref.child('Portfolio');

	$scope.data = $firebaseArray($scope.ref);

	$scope.descriptionData = {"description": "", 
								"link": "",
								"title":""};



	$scope.toggle = function(id){
		var curr = $scope.ref.child(id);

		$scope.current = $firebaseArray(curr);
		var i = 0;
		$scope.current.$loaded().then(function(i){
			angular.forEach($scope.current, function(key, i) {
				console.log(i + " " + key.$value); //add to array instead
				$scope.descriptionData[key.$id] = key.$value;
				if(!$scope.$$phase) {
		          $scope.$apply();
		        }

			});
			if(!$scope.$$phase) {
		          $scope.$apply();
		    }
		    console.log($scope.descriptionData)
		});

		if(!$scope.$$phase) {
          $scope.$apply();
        }
        

	}


	$scope.toggle("Dawg Coffee");
	


});