(function (app) {

    app.config(function ($stateProvider) {

        $stateProvider.state('home', {
            url:'/home',
            templateUrl: 'home/home.html'
        });
    });

})(angular.module('home', ['ui.router']));