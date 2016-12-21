angular.module('starter.controllers', ['pasvaz.bindonce'])

.controller('DashCtrl', function($scope, $http, Chats) {
    $scope.thisLeagueInfo = Chats.getYingchaoData('英超');
    var promise = $scope.thisLeagueInfo;
    var realData;
    promise.then(function (data) {
      realData = data.data;
      console.log(realData.result);
      $scope.tabs = realData.result;
    }, function (error) {
      console.log(error);
    });
})

.controller('ChatsCtrl', function($scope, $http, Chats, $state) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:

    $scope.thisLeagueInfo = Chats.getYingchaoData('西甲');
    var promise = $scope.thisLeagueInfo;
    var realData;
    promise.then(function (data) {
      realData = data.data;
      console.log(realData.result);
      $scope.tabs = realData.result;

    }, function (error) {
      console.log(error);
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

    },function (error) {
      console.log(error);
    });

})

.controller('AccountCtrl', function($scope, $stateParams, Chats) {

    $scope.thisLeagueInfo = Chats.getYingchaoData('意甲');
    var promise = $scope.thisLeagueInfo;
    var realData;
    promise.then(function (data) {
      realData = data.data;
      console.log(realData.result);
      $scope.tabs = realData.result;

    }, function (error) {
      console.log(error);
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

    }, function (error) {
      console.log(error);
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

    }, function (error) {
      console.log(error);
    });

  $scope.photoErr = false;
  $scope.photoBtnDiable = true;
  var mediaStream = null,track = null;

  navigator.getMedia = (navigator.getUserMedia ||
  navigator.webkitGetUserMedia || navigator.mozGetUserMedia ||
  navigator.msGetUserMedia);
  if (navigator.getMedia) {
    navigator.getMedia(
      {
        video: true
      },
      // successCallback
      function (stream) {
        var s = window.URL.createObjectURL(stream);
        var video = document.getElementById('video');
        video.src = s;
        mediaStream = stream;
        track = stream.getTracks()[0];
        $scope.photoBtnDiable = false;
        $scope.$apply();
      },
      // errorCallback
      function (err) {
        //$scope.errorPhoto();
        console.log("The following error occured:" + err);
      });
  } else {
    $scope.errorPhoto();
  }
  $scope.snap = function () {
    var canvas = document.getElementById('canvas');
    context = canvas.getContext("2d");
    canvas.width = "400";
    canvas.height = "304";

    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 400, 304);
    $scope.closeCamera();
  };
  $scope.closeCamera = function () {
    if (mediaStream != null) {
      if (mediaStream.stop) {
        mediaStream.stop();
      }
      $scope.videosrc = "";
    }
    if (track != null) {
      if (track.stop) {
        track.stop();
      }
    }
  }

});
