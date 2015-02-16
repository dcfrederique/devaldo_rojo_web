/**
 * Created by Fre on 30/01/15.
 */
var testApp = angular.module('devaldo_rojo_web_app', ['ui.bootstrap','timer']);
testApp.filter("toArray", function(){
    return function(obj) {
        var result = [];
        angular.forEach(obj, function(val, key) {
            result.push(val);
        });
        return result;};})

testApp.controller('ParseCtrl', function ($scope,$http,$modal) {
    $scope.players = [];
    $scope.timerRunning = false;
    $scope.kalender = [];
    $scope.ranking = [];
    $scope.getPlayers = function() {

        $http.get('https://api.parse.com/1/classes/Speler', {headers: {
            'X-Parse-Application-Id':'KvXR4nBYYeZ4BSJCC5s7AInIHL2qjDZtMi9wFa1A',
            'X-Parse-REST-API-Key':'VTcRHUDuZ2dq3f4IpUIww29KNbdUeigbNgOxpz7S',
            'Content-Type' : 'application/json'}})
            .success(function(data, status) {
                $scope.players = data;
            })
            .error(function(data, status) {
                alert(status);
            });
    };

    $scope.getKalender = function(){
        $http.get('https://api.parse.com/1/classes/MatchCalendar', {headers: {
            'X-Parse-Application-Id':'KvXR4nBYYeZ4BSJCC5s7AInIHL2qjDZtMi9wFa1A',
            'X-Parse-REST-API-Key':'VTcRHUDuZ2dq3f4IpUIww29KNbdUeigbNgOxpz7S',
            'Content-Type' : 'application/json'}})
            .success(function(data, status) {
                $scope.kalender = data;
            })
            .error(function(data, status) {
                alert(status);
            });
    };

    $scope.getRanking = function(){
        $http.get('https://api.parse.com/1/classes/Ranking', {headers: {
            'X-Parse-Application-Id':'KvXR4nBYYeZ4BSJCC5s7AInIHL2qjDZtMi9wFa1A',
            'X-Parse-REST-API-Key':'VTcRHUDuZ2dq3f4IpUIww29KNbdUeigbNgOxpz7S',
            'Content-Type' : 'application/json'}})
            .success(function(data, status) {
                $scope.ranking = data;
            })
            .error(function(data, status) {
                alert(status);
            });
    }

    $scope.open = function(match){
        var modalInstance = $modal.open({
            controller: "ModalInstanceCtrl",
            templateUrl: 'myModalContent.html',
            resolve: {
                match: function()
                {
                    return match;
                }
            }
        });
    };
});
testApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance, match)
{
    $scope.match = match;
    $scope.close = function () {
        $modalInstance.close();
    };

});

