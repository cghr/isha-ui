(function (app) {

    app
        .config(function ($stateProvider) {

            $stateProvider
                .state('enum', {url: '/enum', templateUrl: 'enum.html', controller: 'enumCtrl'});

        })
        .controller('enumCtrl', function ($scope) {


        });

})(angular.module('enum', ['ui.router', 'angularCharts']));