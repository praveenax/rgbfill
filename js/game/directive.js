/*

myApp.directive('jobcard', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
//         templateUrl: '/static/frontend/html/Job_Display_Card.html',
        templateUrl: 'http://assets.braingain.co/frontend/html/Job_Display_Card.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;
            
            if(attrs.status == "Submitted"){
                scope.tAttrs.background = CONSTANT.APPLIED_ARROW_COLOR;
                scope.tAttrs.status2 = "Submitted";
            }else if(attrs.status == "In Progress"){
                scope.tAttrs.background = CONSTANT.APPLIED_ARROW_COLOR;
                scope.tAttrs.status2 = "Submitted";
            }else if(attrs.status == "Interview"){
                scope.tAttrs.background = CONSTANT.INTERVIEW_ARROW_COLOR;
                scope.tAttrs.status2 = "Interview";
            }else if(attrs.status == "Accepted"){
                scope.tAttrs.status2 = "Offer";
                scope.tAttrs.background = CONSTANT.OFFER_ARROW_COLOR;
            }else if(attrs.status == "Declined"){
                scope.tAttrs.background = CONSTANT.REJECTED_ARROW_COLOR;
                scope.tAttrs.status2 = "Declined";
            }
            console.log(attrs);

        }
    };


});

*/


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