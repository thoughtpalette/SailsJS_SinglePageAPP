'use strict';
function HomeController($scope, $routeParams) {
    $scope.employeeList = {};
    $scope.portfolio = {};
    $scope.tech = {};

	$scope.getEmployeeList = function() {
        $.ajax({
            url: 'http://localhost:1337/person',
            type:'GET',
            success: function(data, textStatus, jqXHR) {
            	$scope.employeeList = data;
            	$scope.$apply();
                $scope.insertClear();                
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });		

    };

    $scope.getPortfolio = function() {
        $.ajax({
            url: 'http://localhost:1337/portfolio',
            type:'GET',
            success: function(data, textStatus, jqXHR) {
                $scope.portfolio = data;
                $scope.$apply();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });     

    };

    // Would really need to be refactored out into an Angular Directive
    // as it's just DOM manipulation.
    $scope.insertClear = function() {
        $('.person:nth-of-type(4n)').after("<div class='clear'></div>");        
    };

	// Run On-Load
	$scope.getEmployeeList();
    $scope.getPortfolio();
};