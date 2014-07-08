(function() {

    // Create github service
    var github = function($http) {

        function getUser(username) {
            return $http.get("https://api.github.com/users/" + username)
                        .then(function(response) {
                            return response.data;
                        });
        }

        function getRepos(user) {
            return $http.get(user.repos_url)
                        .then(function(response) {
                            return response.data;
                        });
        }

        return {
            getUser: getUser,
            getRepos: getRepos
        };
    };

    // Get reference to gitHubViewer module 
    var module = angular.module("githubViewer");

    // Register service
    module.factory("github", github);
}());