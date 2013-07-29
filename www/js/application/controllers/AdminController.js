'use strict';
function AdminController($scope, $routeParams) {
    $scope.employeeList = {};
    $scope.portfolio = {};
    $scope.item = {};
    $scope.item.tech = [];

	$scope.addEmployee = function(employee) {
        $.ajax({
        	url:'http://localhost:1337/person/create',
            data: {
                name: employee.name,
                imageUrl: employee.imageLink,
                shortDesc: employee.desc
            },
			type:'POST',        	
        	success: function(data) {
                $scope.getEmployeeList();
                $('.employee-btn').text('Added!').delay(500).text('Add Employee');
                $scope.$apply();
        	},
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }        	
        });
	};

    $scope.addPortfolioItem = function(item) {

        $.ajax({
            url:'http://localhost:1337/portfolio/create',
            data: {
                title: item.title,
                imageUrl: item.imageUrl,
                liveUrl: item.liveUrl,
                technology: item.tech,
                description: item.desc
            },
            type:'POST',            
            success: function(data) {
                $scope.getPortfolio();
                $('.portfolio-btn').text('Added!').delay(500).text('Add Portfolio Item');
                $scope.$apply();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }           
        });
    };    

    $scope.getEmployeeList = function() {
        $.ajax({
            url: 'http://localhost:1337/person',
            type:'GET',
            success: function(data, textStatus, jqXHR) {
                $scope.employeeList = data;
                $scope.$apply();
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

    $scope.removePerson = function(userId) {
        $.ajax({
            url: 'http://localhost:1337/person/destroy/' + userId,
            type: 'DELETE',         
            success: function(data) {
                $scope.getEmployeeList();
                $scope.$apply();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }           
        });     
    };

    $scope.removePortfolioItem = function(id) {
        $.ajax({
            url: 'http://localhost:1337/portfolio/destroy/' + id,
            type: 'DELETE',         
            success: function(data) {
                $scope.getPortfolio();
                $scope.$apply();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }           
        });     
    };   

    $scope.addAnotherTech = function(item) {
        var newTech = $scope.item.tech.name;

        if ($scope.item.tech.name !== '') {
            $scope.item.tech.push(newTech);
        } else {
            alert('please add a technology name');
        }      
    };

    $scope.removeTech = function(techName) {
        $scope.item.tech.pop();
    };

    // Run On-Load
    $scope.getEmployeeList();
    $scope.getPortfolio();    

};