angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, Chats) {
  $scope.thisLeagueInfo = Chats.getYingchaoData('英超');
  var promise = $scope.thisLeagueInfo;
  var realData;
  promise.then(function (data) {
    realData = data.data;
    console.log(realData.result);
    $scope.tabs = realData.result;
  });
})

.controller('ChatsCtrl', function($scope, $http, Chats, $state) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.thisLeagueInfo = Chats.getYingchaoData('西甲');
  var promise = $scope.thisLeagueInfo;
  var realData;
  promise.then(function (data) {
    realData = data.data;
    console.log(realData.result);
    $scope.tabs = realData.result;
  });

   $scope.leagueName = Chats.fiveLeagueName;

  $scope.goIntoLeague = function (leagueName) {
    $state.go('second.saicheng1',{league_name:leagueName});
  }
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.leagueName = $stateParams.league_name;
    $scope.thisLeagueInfo = Chats.getYingchaoData($scope.leagueName);
    var promise = $scope.thisLeagueInfo;
    var realData;
    promise.then(function (data) {
      realData= data.data;
      console.log(realData.result);
      $scope.tabs = realData.result.tabs;

    });

})

.controller('AccountCtrl', function($scope, $stateParams, Chats) {
  $scope.thisLeagueInfo = Chats.getYingchaoData('意甲');
  var promise = $scope.thisLeagueInfo;
  var realData;
  promise.then(function (data) {
    realData= data.data;
    console.log(realData.result);
    $scope.tabs = realData.result;

  });
})
.controller('germanCtrl',function ($scope,$stateParams,Chats) {
  $scope.thisLeagueInfo = Chats.getYingchaoData('德甲');
  var promise = $scope.thisLeagueInfo;
  var realData;
  promise.then(function (data) {
    realData = data.data;
    console.log(realData.result);
    $scope.tabs = realData.result;
  });
})
.controller('franceCtrl',function ($scope,$stateParams,Chats) {
  $scope.thisLeagueInfo = Chats.getYingchaoData('法甲');
  var promise = $scope.thisLeagueInfo;
  var realData;
  promise.then(function (data) {
    realData = data.data;
    console.log(realData.result);
    $scope.tabs = realData.result;
  });
});
