var myApp = angular.module('myApp', ['ui.router', 'firebase']);

myApp.controller('myCtrl', function($scope, $firebaseAuth, $firebaseArray, $firebaseObject
){
	$scope.ref = new Firebase("https://info343portfolio.firebaseio.com/");
	//var test = ref.child('Portfolio');

	$scope.data = $firebaseArray($scope.ref);

	$scope.desData = {"description": "", 
								"link": "",
								"title":""};

	/*$scope.toggle = function(id){
		var curr = $scope.ref.child(id);

		$scope.current = $firebaseArray(curr);
		var i = 0;
		$scope.current.$loaded().then(function(i){
			angular.forEach($scope.current, function(key, i) {
				
				$scope.desData[key.$id] = key.$value;
				if(!$scope.$$phase) {
		          $scope.$apply();
		        }

			});
			if(!$scope.$$phase) {
		          $scope.$apply();
		    }   
		});

		if(!$scope.$$phase) {
          $scope.$apply();
        }
	}
	$scope.toggle("Dawg Coffee");*/
	
});

myApp.config(function($stateProvider) {
	$stateProvider.state('home', { // Landing page
  	url:'/',
  	templateUrl: 'templates/home.html', // HTML fragment
  	controller: 'HomeController', // Which controller 
	})
	.state('dawgcoffee', { // Landing page
  	url:'/coffee',
  	templateUrl: 'templates/dawgcoffee.html', // HTML fragment
  	controller: 'CoffeeController', // Which controller 
	})
	.state('listening', { // Landing page
  	url:'/listening',
  	templateUrl: 'templates/listening.html', // HTML fragment
  	controller: 'ListeningController', // Which controller 
	})
	.state('review', { // Landing page
  	url:'/review',
  	templateUrl: 'templates/review.html', // HTML fragment
  	controller: 'ReviewController', // Which controller 
	})
	.state('police', { // Landing page
  	url:'/police',
  	templateUrl: 'templates/police.html', // HTML fragment
  	controller: 'PoliceController', // Which controller 
	})
})
.controller('HomeController', function($scope){

})
.controller('CoffeeController', function($scope){

})
.controller('ListeningController', function($scope){

})
.controller('ReviewController', function($scope){

})
.controller('PoliceController', function($scope){

})







