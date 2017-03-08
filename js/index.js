/* basic app code (we'll migrate this letter) */
angular.module('FakeBooks', [
    'ngRoute',
    'ngSanitize',
    'angular-storage'
])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/home', {
                templateUrl: 'html/home.html',
                controller: 'HomeController'
            })
            .when('/login', {
                templateUrl: 'html/login.html',
                controller: 'LoginController'
            })
            .when('/search/:searchString', {
                templateUrl: 'html/search.html',
                controller: 'SearchController'
            })
            .when('/search', {
                templateUrl: 'html/search.html',
                controller: 'SearchController'
            })
            .otherwise('/home');
    })
    .controller('AppController', function ($scope) {
        console.log('[AppController]');
        // This will teach you about the scopes and how they work


    })
    .controller('LoginController', function ($scope) {
        console.log('[LoginController]');


    })

    .controller('HomeController', function ($scope) {
        console.log('[HomeController]');

    })

    .controller('SearchController', function ($scope, $http, $routeParams) {
        console.log('[SearchController]');

        $http({
            url: "data/books.json",
            method: "GET"
        }).then(function success(res) {
            // do something when data is loaded
            console.log('Books LTE response -> %o', res.data);

            // assign books data to scope variable for template
            $scope.books = res.data;

        }).catch(function error() {
            // do something if loading fails
        });

        $scope.$on('$routeChangeSuccess', function () {
            // only show if there is a search string
            if ($routeParams.searchString)
                console.warn('Search string: ', $routeParams.searchString);
        });

    })

    .controller('NavController', function ($scope) {
        console.log('[NavController]');


    })
    ;
