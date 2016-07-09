myApp.directive('tile', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/tile.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;

        }
    };


});

myApp.directive('dot', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/dot.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;

        }
    };


});

myApp.directive('playmeter', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/playmeter.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;

        }
    };


});

myApp.directive('scoreboard', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/scoreboard.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;

        }
    };


});


myApp.directive('tileboard', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/tileboard.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;

        }
    };


});