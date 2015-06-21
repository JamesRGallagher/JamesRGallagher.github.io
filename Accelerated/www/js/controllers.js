angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Servers, $http) {

    $http.get('https://admin.accelerated.de/jsonUserApi.php?action=getServerList&auth=S3hsPd8VcKjs')
        .success(function(data, status, headers, config) {
           
            for (i = 0; i < data.server.length; i++) {
                if (!data.server[i].status) {
                    data.server[i].color = "grey"
                } else if (data.server[i].status == "fine") {
                    data.server[i].color = "green"
                } else if (data.server[i].status == "notify") {
                    data.server[i].color = "green"
                } else if (data.server[i].status == "ciritical") {
                    data.server[i].color = "orange"
                } else if (data.server[i].status == "emergency") {
                    data.server[i].color = "red"
                } else {
                    data.server[i].color = "grey"
                }
                if (!data.server[i].customName) {
                    data.server[i].customName = "Not Named"
                }
            }
            data.server.color = "HHHH"
            $scope.servers = data.server
        })


    $scope.doRefresh = function() {
        $http.get('https://admin.accelerated.de/jsonUserApi.php?action=getServerList&auth=S3hsPd8VcKjs')
            .success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                for (i = 0; i < data.server.length; i++) {
                    if (!data.server[i].status) {
                        data.server[i].color = "grey"
                    } else if (data.server[i].status == "fine") {
                        data.server[i].color = "green"
                    } else if (data.server[i].status == "notify") {
                        data.server[i].color = "green"
                    } else if (data.server[i].status == "ciritical") {
                        data.server[i].color = "orange"
                    } else if (data.server[i].status == "emergency") {
                        data.server[i].color = "red"
                    } else {
                        data.server[i].color = "grey"
                    }

                    if (!data.server[i].customName) {
                        data.server[i].customName = "Not Named"
                    }

                }
                data.server.color = "HHHH"
                $scope.servers = data.server


                console.log($scope.servers)
            }).finally(function() {
                // Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
            });


    }
})



.controller('ServerDetailCtrl', function($scope, $stateParams, $ionicPopup, $http, Servers) {
    console.log($stateParams)
    $http.get('https://admin.accelerated.de/jsonUserApi.php?action=getServerDetails&serverID=' + $stateParams.serverId + '&auth=S3hsPd8VcKjs').
    success(function(data, status, headers, config) {
        console.log(data)
        $scope.server = data;
    }).
    error(function(data, status, headers, config) {
        alert("Error")
    });


    $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Are you sure?',
            template: 'Are you sure you want to reset this server?'
        });
        confirmPopup.then(function(res) {
          console.log(res)
            if (res) {
        
                    $http.post('https://admin.accelerated.de/jsonUserApi.php?action=performServerReset&serv erID=1571&auth=S3hsPd8VcKjs').
                    success(function(data, status, headers, config) {
                        $ionicPopup.alert({
                            title: 'Server Reset',
                            template: 'The server has been reset succesfully.'
                        });

                    }).
                    error(function(data, status, headers, config) {
                        $ionicPopup.alert({
                            title: 'Error Resetting Server',
                            template: data
                        });
                    });

                
            } else {
console.log("not resetting")
            }
        });
    };




})

.controller('ServerStatsCtrl', function($scope, $stateParams, $http, Servers) {

    $scope.period = "Daily" //default.

    $scope.toHour = function() {
        $scope.period = "Hourly";
    }
    $scope.toDay = function() {
        $scope.period = "Daily";
    }
    $scope.toWeek = function() {
        $scope.period = "Weekly";
    }

    $scope.toMonth = function() {
        $scope.period = "Monthly";
    }
    $scope.toYear = function() {
        $scope.period = "Yearly";
    }
})

