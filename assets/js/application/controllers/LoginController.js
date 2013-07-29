'use strict';
function LoginController($scope, $routeParams) {

  $scope.login = function(user) {

    $.ajax({
        url: 'http://localhost:1337/auth/login',
        data: {
            username: user.name,
            password: user.password
        },
        success: function(data) {
            window.location.href = 'http://localhost:1337/admin';
        },
        error: function(textError) {
            alert('failed to login :{');
        }
    });

  };

};