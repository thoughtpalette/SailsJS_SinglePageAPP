'use strict';
function AdminController($scope, $routeParams) {
    $scope.employeeList = {};
    $scope.portfolio = {};
    $scope.item = {};
    $scope.item.tech = [];

	$scope.addEmployee = function(employee) {
        $.ajax({
        	url:'/person/create',
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
            url:'/portfolio/create',
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
            url: '/person',
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
            url: '/portfolio',
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
            url: '/person/destroy/' + userId,
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
            url: '/portfolio/destroy/' + id,
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

    $scope.logout = function() {
        $.ajax({
            url: '/logout',
            success: function(data) {
                window.location.href = '/';
            },
            error: function(textError) {
                alert('failed to logout :{');
            }
        });
    }

    // Run On-Load
    $scope.getEmployeeList();
    $scope.getPortfolio();    

};