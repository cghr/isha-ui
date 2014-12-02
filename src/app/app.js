(function (app) {

    app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

        if (isDevEnv())
            $httpProvider.interceptors.push(reqInterceptor);

        function reqInterceptor() {
            return {'request': reqConfig};
        }

        function reqConfig(config) {
            config.url = isRESTRequest(config.url) ? ('http://localhost:8080/services/' + config.url) : config.url
            return config;
        }

        function isDevEnv() {
            var pattern=/900*/
            return pattern.test(window.location.href);
            
        }

        function isRESTRequest(url) {
            return (url.indexOf("api/") !== -1);
        }

        $urlRouterProvider.otherwise('/home')
    })


}(angular.module("myApp", [
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
    'lodash',
    'security',
    'sideMenu',
    'home'
])));
