

var mainPageController = function ($scope, $http){

    $scope.sk = [];
    $http.get('app/data/skills.json').success(function(data) {
      $scope.sk = data;
    });

};

var templateController = function($scope){
	$scope.templates = [
		{
			name: 'mainHeader.html', url: 'templates/mainHeader.html'
		}
	];
	
}
