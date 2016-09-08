(function(){

	angular.module("DreamTeam", ['CoreLogin'])

		.controller("ApplicationController", ['auth', function(auth){
			this.isLogined = auth.isLogined();
			this.username = "";
			this.password = "";

			this.login = function(){
				auth.login(this.username, this.password);
				this.isLogined = auth.isLogined();
			};
		}]);

})();