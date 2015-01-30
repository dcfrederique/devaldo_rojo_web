/**
 * Created by Fre on 30/01/15.
 */
var testApp = angular.module('devaldo_rojo_web_app', []);

testApp.controller('ParseCtrl', function ($scope,$http) {
    $scope.players = [];
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
    }
});