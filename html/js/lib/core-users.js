angular.module("CoreUsers", [])
	
	.factory("users", ["$http", function($http){
		var users = [];

		$http({
		  method: 'GET',
		  url: '/data/users.json'
		}).then(function successCallback(response) {
			users = response.data.results;
		}, function errorCallback(response) {});

		var getUsers = function getUsers(){
			return users;
		}

		var addUser = function addUser(user){
			users.push(user);
		}

		return {
			getUsers: getUsers,
			addUser: addUser
		};
	}]);