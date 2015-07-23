angular.module('starter.controllers', [])




.controller('DashCtrl', function($state,$scope, Feeds, $http, $ionicPopup) {
 if($state.params.brand){
      $scope.title = $state.params.brand;
    } else {
      $scope.title = "WRISTCHECK";
    }
  //Run the very first time the view is loaded!
  $http.get('https://wristcheck-jamesgallagher.c9.io/api/posts',{
    params: {
      'brand':$state.params.brand
    }
  }).then(function(response) {
    if (!response) {
      $scope.$broadcast('scroll.refreshComplete');
    }
    $scope.feed = response.data;
    $scope.lastTime = response.data[response.data.length - 1].time;
    $scope.firstTime = response.data[0].time;
  });
  
  //Run each subsequent time
  $scope.$on('$ionicView.enter', function() {
    $scope.doRefresh();
    console.log($state.params.brand)
    if($state.params.brand){
      $scope.title = $state.params.brand;
    } else {
      $scope.title = "WRISTCHECK";
    }
  });

  //Load the posts by brand
  $scope.postsByBrand = function(brand){
    var params = {
      'brand': brand
    };
    $state.go('tab.dashbybrand',params);
  }

  $scope.doRefresh = function() {
    if (!$scope.firstTime) {     
        $scope.firstTime = $scope.feed[0].time;
    }
    $http.get('https://wristcheck-jamesgallagher.c9.io/api/posts/', {
            params: {
                firstTime: $scope.firstTime,
                'brand':$state.params.brand
            }
        }).then(function(response) {
            if (!response) {
                $scope.$broadcast('scroll.refreshComplete');
            }
            for (i = 0; i < response.data.length; i++) {
                $scope.feed.unshift(response.data[i]);
            }
            $scope.firstTime = $scope.feed[0].time;

            $scope.$broadcast('scroll.refreshComplete');

        })


    }



    $scope.loadMore = function() {


        if (!$scope.lastTime) {
            $scope.lastTime = $scope.feed[$scope.feed.length - 1].time;
        }
        $http.get('https://wristcheck-jamesgallagher.c9.io/api/posts/', {
            params: {
                lastTime: $scope.lastTime,
                'brand':$state.params.brand
            }
        }).then(function(response) {
             $scope.$broadcast('scroll.infiniteScrollComplete');
            for (i = 0; i < response.data.length; i++) {
                $scope.feed.push(response.data[i]);

            }
            $scope.lastTime = $scope.feed[$scope.feed.length - 1].time;
           
     
    
  
    }
          
        });
    }

})

.controller('SignInCtrl', function($scope, $state) {
    console.log("state")
    console.log($state)
    $scope.signIn = function(user) {
        console.log('Sign-In', user);

        $state.go('tab.dash');
    };
    $scope.register = function() {
        $state.go('signup');
    };
    $scope.sendRegister = function(user) {
        console.log('Sign-up', user);
    }
})


.controller('ChatsCtrl', function($scope, $state, $cordovaCamera, $http, $ionicPopover, $ionicActionSheet) {
        var template = '<ion-popover-view style="height:180px; padding-top:20px;" ><ion-content style="padding-left:10px!important;padding-right:10px!important;"><button class="button button-block button-dark">Take Photo</button><button class="button button-block button-dark">From Library</button></ion-content></ion-popover-view>';


        $scope.gotoEdit = function(imageData) {

            $state.go("tab.chat-detail", {
                image: imageData
            });
        }




        $scope.openPopover = function($event) {

            $scope.popover.show($event);
        };
        $scope.closePopover = function() {
            $scope.popover.hide();
        };
        $scope.openCamera = function(index) {
            //$scope.gotoEdit();
            var source;
            //alert(index)
            if (index == 0) {
                source = Camera.PictureSourceType.CAMERA;
            } else {
                source = Camera.PictureSourceType.PHOTOLIBRARY;
            }
            var options = {
                quality: 100,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: source,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 900,
                targetHeight: 900,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };
            $cordovaCamera.getPicture(options).then(function(imageData) {
                //alert(imageData)
                $scope.gotoEdit(imageData);

            });


        }


        // Triggered on a button click, or some other target
        $scope.takePicture = function() {
            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
                buttons: [{
                    text: 'Take Photo'
                }, {
                    text: 'From Library'
                }],
                titleText: 'Upload a photo',
                cancelText: 'Cancel',
                cancel: function() {
                    // add cancel code..
                },
                buttonClicked: function(index) {
                    $scope.openCamera(index);
                    return true;
                }
            });

        };

    })
    // $scope.takePicture = function($event) {

/*var options = { 
    quality : 100, 
    destinationType : Camera.DestinationType.DATA_URL, 
    sourceType : Camera.PictureSourceType.CAMERA, 
    allowEdit : true,
    encodingType: Camera.EncodingType.JPEG,
    targetWidth: 300,
    targetHeight: 300,
    popoverOptions: CameraPopoverOptions,
    saveToPhotoAlbum: false
};*/

//         $scope.popover = $ionicPopover.fromTemplate(template, {
//   scope: $scope
//});
//$scope.popover.show($event);
/*    $cordovaCamera.getPicture(options).then(function(imageData) {
          // .fromTemplateUrl() method
 $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });
  $scope.popover.show($event);

          var api = "https://wristcheck-jamesgallagher.c9.io/api";

            $scope.imgURI = "data:image/jpeg;base64," + imageData;
            $http.post(api+'/posts', 
              {
               
                userid:1,
                image:$scope.imgURI,
                desc:"Test post, please ignore",

              }).
              success(function(data, status, headers, config) {
              alert("photo sent ;)")
            }).
             error(function(data, status, headers, config) {
            alert("bin an error m8")
            });

            

        }, function(err) {
            // An error occured. Show a message to the user
                        alert("camera broke pal")

        });*/
//}

//})

.factory('FlightDataService', function($q, $timeout) {

    var searchAirlines = function(searchFilter) {

        console.log('Searching airlines for ' + searchFilter);

        var deferred = $q.defer();

        var matches = airlines.filter(function(airline) {
            if (airline.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1) return true;
        })

        $timeout(function() {

            deferred.resolve(matches);

        }, 100);

        return deferred.promise;

    };

    return {

        searchAirlines: searchAirlines

    }
})

.controller('MyCtrl', ['$scope', 'FlightDataService', '$rootScope', '$ionicHistory', function($scope, FlightDataService, $rootScope, $ionicHistory) {
    console.log(FlightDataService)



    $scope.data = {
        "airlines": [],
        "search": ''
    };

    $scope.search = function() {

        FlightDataService.searchAirlines($scope.data.search).then(
            function(matches) {
                $scope.data.airlines = matches;
            }
        )
    }

    $scope.setBrand = function(brand) {
        //alert(brand)
        window.brand = brand;
        $ionicHistory.goBack();

    }

}])

.controller('AccountCtrl', function($scope, $ionicSlideBoxDelegate, $stateParams, $ionicHistory, $document, Feeds, $http, $ionicLoading, $ionicPopup, $state) {
    $scope.nextSlide = function() {
        $ionicSlideBoxDelegate.next();
    }

})

.controller('ChatDetailCtrl', function($scope, $stateParams, $ionicHistory, $document, Feeds, $http, $ionicLoading, $ionicPopup, $state, $ionicPopover) {


    console.log(window.brand)

    $scope.$on('$ionicView.enter', function() {
        if (window.brand) {
            $scope.brand = window.brand;
        } else {
            $scope.brand = 'Brand';
        }

    });




    $scope.chooseBrand = function($event) {
        console.log("click")

        $state.go('tab.pick-brand');




    }




    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            template: 'Uploaded!'
        });
        alertPopup.then(function(res) {
            $state.go("tab.dash")
        });
    };

    $scope.show = function() {
        $ionicLoading.show({
            template: 'Uploading...'
        });
    };
    $scope.hide = function() {
        $ionicLoading.hide();
    };
    $scope.goBack = function() {
        //Add confirm here!
        $ionicHistory.goBack();
    }
    window.onerror = function(errorMsg, url, lineNumber) {
        //  alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber);
    }
    $scope.image = $stateParams.image;

    $scope.postImage = function() {
        $scope.show()
        $scope.desc = document.getElementById('desc').value


        console.log($scope)
        var api = "https://wristcheck-jamesgallagher.c9.io/api";

        var ft = new FileTransfer(),
            options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = 'filename.jpg'; // We will use the name auto-generated by Node at the server side.
        options.mimeType = "image/jpeg";
        options.chunkedMode = false;
        options.headers = {
            Connection: "close"
        };
        var params = new Object();
        options.params = params;

        params.desc = $scope.desc;
        params.brand = $scope.brand;

        function win(r) {
            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            console.log("Sent = " + r.bytesSent);
            $scope.hide()
                // $scope.showAlert()
            $state.go("tab.dash")
        }

        function fail(error) {

            if (error) {
                alert("An error has occurred: :( Error = " + error.code);
            } else {
                $scope.hide()
                    // $scope.showAlert()
                $state.go("tab.dash")

            }
        }


        ft.upload($scope.image, api + "/posts", win, fail, options);




    }



});