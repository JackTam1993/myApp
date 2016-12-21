angular.module('starter.services', [])

.factory('Chats', function($http) {
  // Might use a resource here that returns a JSON array


  var getYingchaoData = function (leagueName) {
    var url = 'http://op.juhe.cn/onebox/football/league?callback=JSON_CALLBACK&key=d636939fc762563f313988a647c36c63&league='+leagueName;
      return $http.jsonp(url)
        .then(function (data) {
          //console.log(data);
          return data;
        })
  };

    var fiveLeagueName= [{name:'英超'},{name:'西甲'},{name:'德甲'},{name:'意甲'},{name:'法甲'}];

    return {fiveLeagueName:fiveLeagueName,getYingchaoData:getYingchaoData};
});
