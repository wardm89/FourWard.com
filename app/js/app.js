

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

function MainController($scope, $timeout) {
 var slidesInSlideshow = 3;
 var time = 5000; 
  
  $scope.slideshow = 1;
  var slideTimer =
    $timeout(function interval() {
      $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
      slideTimer = $timeout(interval, time);
    }, time);
}