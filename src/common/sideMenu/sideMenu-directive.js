(function (app) {

    app.directive('sideMenu', function () {

        return {
            restrict: 'E',
            scope: {config: '='},
            templateUrl: 'sideMenu/sideMenu.html'
        }
    })

})(angular.module('sideMenu', []));
