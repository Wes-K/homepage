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
