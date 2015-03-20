var app = angular.module("NodeLogin",[]);

app.controller("loginCtrl",function($scope,$http){
	console.log('This is from Angular');
	$scope.validate = function(){
		console.log($scope.login);
		$http.post('/login',$scope.login).success(function(response){
			console.log(response);
		});
	}
});