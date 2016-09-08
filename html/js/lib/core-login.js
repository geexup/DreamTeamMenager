angular.module("CoreLogin", ["CoreUsers"])

	.factory("auth", ["users", function(usersFactory){
		var logined = false;

		function login(username, password){
			var users = usersFactory.getUsers();
			var fined_user = null;

			users.forEach(function(user){
				if(user.login.username === username){
					fined_user = user;
					if(user.login.password === password)
						logined = true;

					return false;
				}
			});

			//logined = true;

			console.log(username, fined_user, logined);
		}

		function logout(){
			logined = false;
		}


		function isLogined(){
			return logined;
		}

		return {
			login: login,
			logout: logout,
			isLogined: isLogined
		};

	}]);