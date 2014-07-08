(function() {

    var app = angular.module("githubViewer", []);

    var MainController = function($scope, $http) {
        
        $scope.search = function() {
            $http.get("https://api.github.com/users/" + $scope.username)
                .then(onUserComplete, onError);
        }

        var onUserComplete = function(response) {
            $scope.user = response.data;
            $scope.error = "";
            
            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        };
        
        var onRepos = function(response){
            $scope.user.repos = response.data;
        }

        var onError = function(reason) {
            $scope.error = "Could not fetch data";
        };
        
        $scope.repoOrderBy = "name";
    };

    app.controller("MainController", ["$scope", "$http", MainController]);

}());