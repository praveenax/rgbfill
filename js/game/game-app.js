var env = "http://127.0.0.1:8000/"
/*"staging.braingain.co"
"app.braingain.co"
*/
var myApp = angular.module('exchangerpg', ['ngRoute']);


myApp.config(function ($routeProvider, $sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self'
//        ,
        // Allow loading from our assets domain.  Notice the difference between * and **.
//        'http://assets.braingain.co/**'
      ]);

    $routeProvider
        .when('/', {
            templateUrl: 'game.html',
//        templateUrl: 'http://assets.braingain.co/frontend/html/Feed.html',
            controller: 'gameContrl'
        })
        .when('/play', {
            templateUrl: 'html/play.html',
//        templateUrl: 'http://assets.braingain.co/frontend/html/Feed.html',
            controller: 'playContrl'
        }).when('/stat', {
            templateUrl: 'html/stats.html',
//        templateUrl: 'http://assets.braingain.co/frontend/html/Feed.html',
            controller: 'playContrl'
        });


});

/*
myApp.service('fileUpload', ['$http', function ($http) {
            this.uploadFileToUrl = function(resume, uploadUrl, user_id){
               var fd = new FormData();
               fd.append('user_id', user_id)
               fd.append('resume', resume);
               $http.post(uploadUrl, fd, {
                  //transformRequest: angular.identity,
                  headers: {'Content-Type': undefined}
               })
            
               .success(function(d){
                console.log(d);
               })
            
               .error(function(d){
                console.log(d);
               });
            }
         }]);*/