angular.module('wesk', ['ui.router', 'ui.router.title', 'templates'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('home', {
        url: '/',
        controller: 'HomeCtrl as ctrl',
        templateUrl: 'home.html',
        resolve: { 
            $title: basicTitle('Home')
        }
    }); 

    function basicTitle(title){
        return function(){
            return title;
        }
    }

    $urlRouterProvider.otherwise('/');
}]);

angular.module('wesk')
.controller('HomeCtrl', ['$scope', function($scope){

    var self = this; 


}]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIndlc2suY29udHJvbGxlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ3ZXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ3dlc2snLCBbJ3VpLnJvdXRlcicsICd1aS5yb3V0ZXIudGl0bGUnLCAndGVtcGxhdGVzJ10pXG4uY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJywgZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcil7XG5cbiAgICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnaG9tZScsIHtcbiAgICAgICAgdXJsOiAnLycsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ3RybCBhcyBjdHJsJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnLFxuICAgICAgICByZXNvbHZlOiB7IFxuICAgICAgICAgICAgJHRpdGxlOiBiYXNpY1RpdGxlKCdIb21lJylcbiAgICAgICAgfVxuICAgIH0pOyBcblxuICAgIGZ1bmN0aW9uIGJhc2ljVGl0bGUodGl0bGUpe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiB0aXRsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKCd3ZXNrJylcbi5jb250cm9sbGVyKCdIb21lQ3RybCcsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKXtcblxuICAgIHZhciBzZWxmID0gdGhpczsgXG5cblxufV0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
