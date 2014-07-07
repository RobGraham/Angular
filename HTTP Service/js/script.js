// Code goes here

var MainController = function($scope, $http) {
    
    var onUserComplete = function(response){
        $scope.user = response.data;
    }
    
    var onError = function(reason){
        $scope.error = "Could not fetch the user";
    }
    
    $http.get("https://api.github.com/users/RobGraham")
        .then(onUserComplete, onError)
    
    $scope.message = "Hello world";
}