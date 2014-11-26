(function (app) {

    app.factory('Auth', function ($http, $cookieStore, routingConfig, AuthDefaultConfig, $rootScope) {


        var accessLevels = routingConfig.accessLevels(),
            userRoles = routingConfig.userRoles()

        var currentUser = $cookieStore.get('user') || {username: '', role: userRoles.public}
        currentUser = angular.fromJson(currentUser)
        $rootScope.user = currentUser
        $cookieStore.remove('user')

        function changeUser(user) {
            angular.extend(currentUser, user)
        }

        return {
            authorize: function (accessLevel, role) {
                if (role === undefined)
                    role = currentUser.role


                return accessLevel.bitMask & role.bitMask
            },
            isLoggedIn: function (user) {
                if (user === undefined)
                    user = currentUser


                return user.role.title == userRoles.user.title || user.role.title == userRoles.manager.title
            },
            register: function (user, success, error) {

                $http.post(AuthDefaultConfig.registerUrl, user).success(function (res) {
                    changeUser(res)
                    success()
                }).error(error)
            },
            login: function (user, success, error) {

                $http.post(AuthDefaultConfig.authUrl, user).success(function (user) {
                    changeUser(user)
                    success(user)
                }).error(error)
            },
            logout: function (success, error) {
                $http.get(AuthDefaultConfig.logoutUrl).success(function () {
                    changeUser({
                        username: '',
                        role: userRoles.public
                    })
                    success()
                }).error(error)
            },
            accessLevels: accessLevels,
            userRoles: userRoles,
            user: currentUser
        }
    })
})(angular.module('authService', ['routingConfig', 'authDefaultConfig']));

