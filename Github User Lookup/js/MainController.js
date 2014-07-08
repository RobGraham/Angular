(function() {
    
    var app = angular.module("githubViewer");
    
    var MainController = function($scope, $location) {
        
        $scope.search = function() {
            $location.path("/user/" + $scope.username);
        };
    };
    
    app.controller("MainController", MainController);

}());