(function() {
    
    var app = angular.module("githubViewer");
    
    var UserController = function($scope, github, $routeParams) {
        
        $scope.repoOrderBy = "name";
        $scope.username = $routeParams.username;
        
        function onUserComplete(data) {
            $scope.user = data;
            $scope.error = "";

            github.getRepos($scope.user).then(onRepos, onError);
        }
        
        function onRepos(data){
            $scope.user.repos = data;
        }

        function onError(reason) {
            $scope.error = "Could not fetch data";
        }
        
        
        github.getUser($scope.username).then(onUserComplete, onError);

    };
    
    app.controller("UserController", UserController);

}());