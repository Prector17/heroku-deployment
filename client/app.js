angular.module('horoku',[
    'ngRoute',
    'horoku.controllers'
])

.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when ('/', {
        templateUrl: 'views/home.html',
        controller:'HomeController'
    })
    .otherwise({
        redirectTo: '/'
})
}])
