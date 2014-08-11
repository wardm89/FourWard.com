

var mainPageController = function ($scope, $http){

    $scope.sk = [];
    $http.get('app/data/skills.json').success(function(data) {
      $scope.sk = data;
    });

};
