'use strict';

angular.module('hopsWorksApp')
    .controller('MainCtrl', ['$scope', '$location', 'AuthService', function ($scope, $location, AuthService) {

        var self = this;
        self.authService = AuthService;

        self.isLoggedIn = AuthService.isLoggedIn;

        self.logout = function () {
            console.log(self.user);
            AuthService.logout(self.user).then(function (success) {
                $location.url('/login');
            }, function (error) {
                self.errorMessage = error.data.msg;
            });
        };


        $scope.projects = [
            {name: 'HumanGenome', 'private': true},
            {name: 'DNACalc', 'private': false},
            {name: 'FinanceDepartment', 'private': true},
            {name: 'StatisticsHops', 'private': false}
        ];

    }]);
