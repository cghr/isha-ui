(function (app) {

    app
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $provide) {


            $provide.factory('errorInterceptor', function ($location, $q) {

                return {
                    responseError: function (response) {

                        if (response.status === 401)
                            $location.path('/login')
                        return $q.reject(response)
                    }
                };

            });

            $httpProvider.interceptors.push('errorInterceptor');

        })
        .run(function ($rootScope, $location, Auth, $cookieStore, $timeout, routingConfig) {

            $rootScope.accessLevels = routingConfig.accessLevels()

            $rootScope.$on("$stateChangeStart", function (event, next, current) {
                next.access = next.access || routingConfig.accessLevels().user

                $rootScope.error = null
                if (!Auth.authorize(next.access)) {

                    var redirectPath = Auth.isLoggedIn() ? '/' : '/login'
                    $location.path(redirectPath)

                }
            })
        })

})(angular.module('security', [
    'ui.router',
    'ngCookies',
    'auth',
    'login',
    'forgotPassword',
    'register',
    'navigation'
]));
