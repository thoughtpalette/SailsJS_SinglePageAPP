'use strict';
function LoginController($scope, $routeParams, $rootScope) {

  $scope.login = function(user) {

    $.ajax({
        url: '/auth/login',
        data: {
            username: user.name,
            password: user.password
        },
        success: function(data) {
            window.location.href = '/admin';
        },
        error: function(textError) {
            alert('failed to login :{');
        }
    });

  };

};