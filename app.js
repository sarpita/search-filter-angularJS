'use strict';

angular.module('searchFilter', [])
.controller('searchFilter.ctrl',['$http','$scope','$window','$interval',
 function($http,$scope,$window,$interval) {
 	$scope.showDetails = function showDetails(){
 	$scope.fullDetails=[];
 	$http.get('https://data.cityofnewyork.us/resource/5scm-b38n.json').then(function(response) {
 		showProgress(response.data); 
    });
 	}
 	$scope.isShowProgressbar= false;
 	$scope.Math = window.Math;
 	function showProgress(data){
 		var width= 0;
 		$scope.isShowProgressbar = true;
 		var id= $interval(function(){
 		var elem = angular.element(document.getElementById('mybar'));
 		if(width >=100){
 			$interval.cancel(id);
 			$scope.isShowProgressbar =false;
			$scope.fullDetails = data;
 		}
	 	else{
	 		width+= $scope.Math.round($scope.Math.random())
	 		elem[0].style.width =width+ "%";
	 		elem[0].innerHTML = width+ "%";
	 	}
 	},10);
 	}
 		
}]);