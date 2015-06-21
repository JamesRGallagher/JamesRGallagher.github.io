/**
 * Created by aetdeveloper on 29/11/14.
 */
angular.module('hs.mapbox', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('eventmenu.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "home.html",
                    controller: "MapCtrl"
                }
            }
        })
       

    $urlRouterProvider.otherwise("/event/home");
})



.controller('InfoCtrl', function($scope) {

    $scope.leftButtons = [{
        type: 'button-icon icon ion-search',
        tap: function(e) {
            $scope.sideMenuController.toggleLeft();
        }
    }];
    $scope.rightButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
            $scope.sideMenuController.toggleRight();
        }
    }];
})

.controller('StartCtrl', function($scope, $http, $location) {
    $scope.leftButtons = [{
        type: 'button-icon icon ion-search',
        tap: function(e) {
            $scope.sideMenuController.toggleLeft();
        }
    }];

    $scope.rightButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
            $scope.sideMenuController.toggleRight();
        }
    }];

    var responsePromise = $http.get("https://hacklancaster2.herokuapp.com/catogories")
        .success(function(data, status, headers, config) {
            $scope.periods = data.catogories;


            console.log(data);
        })

    $scope.chooseCat = function(chosenPeriod) {

        $location.path('event/home') + $location.search('period', chosenPeriod);

    }

})

.controller('MainCtrl', function($scope, $rootScope, $location, $http, $ionicLoading,$ionicPopover) {
    $scope.show = function() {
        console.log($ionicLoading)
        $ionicLoading.show({
            template: 'Loading...'
        });
    };
    $scope.hide = function() {
        
        $ionicLoading.hide();
    };

     $scope.overlayPopover = function() {
        $scope.items = ['1','2','3']
      $scope.popover = '';
          $ionicPopover.fromTemplateUrl('overlayPopover.html', {
                     scope: $scope
                 }).then(function(popover) {
                   $scope.popover = popover;
                     $scope.popover.show();
                    
                 });
    };
    $scope.infoPopover = function() {
        $scope.items = ['1','2','3']
      $scope.popover = '';
          $ionicPopover.fromTemplateUrl('infoPopover.html', {
                     scope: $scope
                 }).then(function(popover) {
                   $scope.popover = popover;
                     $scope.popover.show();
                    
                 });
    };

    $scope.closePop = function(){

        console.log( $scope.popover)
        console.log("cloding")
        $scope.popover.remove();
        $('.popover-backdrop').hide();
    }
    //document.getElementByClassName('mapbox-control-info-right').remove;

    $scope.updateMap = function(period) {
        if($scope.popover){
       $scope.popover.remove();
   }
        localStorage.clear();

      if (localStorage.getItem(period)) {
           console.log(localStorage.getItem(period))
           $scope.featureLayer.clearLayers();
           $scope.featureLayer.setGeoJSON(JSON.parse(localStorage.getItem(period)));
                     $scope.featureLayer.on('click', function(e) {
                $scope.clickedMarker = e;
                console.log(e)
                 console.log('click')
                 console.log($ionicPopover)
                 $ionicPopover.fromTemplateUrl('popover.html', {
                     scope: $scope
                 }).then(function(popover) {
                    console.log('then')
                     $scope.popover = popover;
                     console.log($scope)
                     $scope.popover.show();
                      //$('#poptitle').empty("");
                     console.log("!!")
                     console.log($('#poptitle'))
                     console.log($scope.clickedMarker.layer.feature.properties.title)

                    $('#poptitle').html($scope.clickedMarker.layer.feature.properties.title)
                    document.getElementById('poptitle').innerHTML = "HELLO";
                     //$('#poptitle').append($scope.clickedMarker.layer.feature.properties.title)
                     console.log($('#poptitle'))
                 });

             })
       

           
       
       } else {
     $scope.show()
     $http.get('https://hacklancaster2.herokuapp.com/api/filtered/' + period).success(function(geo) {
             $scope.featureLayer.clearLayers();

             $scope.featureLayer.on('layeradd', function(e) {

                 var marker = e.layer,
                     feature = marker.feature;
                 console.log('!!')
                 console.log(marker)
                 $.marker = marker;
                 marker.setIcon(L.icon(feature.properties.icon));

             });

             $scope.featureLayer.setGeoJSON(geo);


             $scope.featureLayer.on('click', function(e) {
                $scope.clickedMarker = e;
                console.log(e)
                 console.log('click')
                 console.log($ionicPopover)
                 $ionicPopover.fromTemplateUrl('popover.html', {
                     scope: $scope
                 }).then(function(popover) {
                    console.log('then')
                     $scope.popover = popover;
                     
                     $scope.popover.show();
                     console.log("!!")
                     console.log($('#poptitle'))
                     $('#poptitle').html('HI')
                 });

             })
       
             localStorage.setItem(period, JSON.stringify(geo));
              $scope.hide()
         })
           }
 }

    $scope.whereubin = [];


    /* $scope.leftButtons = [{
         type: 'button-icon icon ion-search',
         tap: function(e) {
             $scope.sideMenuController.toggleLeft();
         }
     }];
     $scope.rightButtons = [{
         type: 'button-icon icon ion-navicon',
         tap: function(e) {
             $scope.sideMenuController.toggleRight();
         }
     }];*/

    $scope.initializeMap = function(period) {
        L.mapbox.accessToken ='pk.eyJ1IjoiamFtZXNnYWxsYWdoZXIiLCJhIjoiM2MzM2MyZTMxNDM2ZTkyNTAxYjEzN2M1NWM1NWZkNTMifQ.Dt2Tl82Po5WVxX2sl3BxtQ'
        var map = L.mapbox.map('map', mapStyle).setView([54.0498942, -2.8055977], 15)



        $(".leaflet-control-zoom").hide();
        $(".mapbox-info-toggle").hide();
                $(".leaflet-control-attribution ").hide();

        $scope.map = map;
        $scope.featureLayer = L.mapbox.featureLayer().addTo($scope.map);
                var titleLayer = L.tileLayer.wms('http://lancasteruad.oxfordarchaeology.com:8080/geoserver/uad/ows?SERVICE=WMS', {
            format: 'image/png',
            transparent: true,
            layers: 'Baines1824'
        }).addTo($scope.map);
        // Stop the side bar from dragging when mousedown/tapdown on the map
      //  L.DomEvent.addListener(document.getElementById('map'), 'mousedown', function(e) {
        //    e.preventDefault();
         //   return false;
       // });
        $scope.map = map;

        // var controller = new Leap.Controller();

        //            controller.connect();

        //          controller.on('frame', onFrame);

        //        $scope.hand = {'new': [0, 0]};
        function onFrame(frame) {

            //look at change in hand position

            if (frame.hands.length == 1) {
                $scope.hand.old = $scope.hand.new;

                $scope.hand.new = frame.hands[0];

                console.log(map);

                $scope.map.setView([
                        map.getCenter()[0] - ($scope.hand.new.palmPosition[0] - $scope.hand.old.palmPosition[0]),
                        map.getCenter()[1] - ($scope.hand.new.palmPosition[1] - $scope.hand.old.palmPosition[1])
                    ],
                    9);
            }
        }
       
        setInterval(function() {
            // method to be executed;
            $scope.nearMe()
        }, 1500);
        HSSearch.init();
    }


    $scope.nearMe = function() {
        if (!$scope.map) {
            return;
        }
        /*
                    navigator.geolocation.getCurrentPosition(function(pos) {
                       // $scope.map.setView([pos.coords.latitude, pos.coords.longitude], 9);
                        //alert(pos.coords.latitude);
                        //alert(pos.coords.longitude);

                        for(i=0;i<$scope.events.length;i++){
                           
                           //if()

                            var placeLat = parseFloat($scope.geo.features[i].geometry.coordinates[1].toFixed(5)) // lat
                            var placeLong = parseFloat($scope.geo.features[i].geometry.coordinates[0].toFixed(5)) // long
                            
                            var myLat = parseFloat(pos.coords.latitude.toFixed(5))
                            var myLong = parseFloat(pos.coords.longitude.toFixed(5))
                            console.log('my long-'+pos.coords.latitude)
                            console.log('my lat-'+pos.coords.longitude)
                            console.log('place long-'+placeLat)
                            console.log('place lat-'+placeLong)

                            //console.log(placeLong + "-" + myLong)
                            console.log(Math.abs(placeLong-myLong).toFixed(3))
                            if(Math.abs(placeLong-myLong)<=1.0001 && Math.abs(placeLat-myLat)<=1.0001 ){

                                    
                                  //  sweetAlert("Good Job!", "Found "+ $scope.geo.features[i].properties.title +"!", "success");
                                    $scope.whereubin.push($scope.geo.features[i].properties.title);
                                    $scope.$apply();
                                    console.log($scope.whereubin)
                                    $http.get('https://hacklancaster.herokuapp.com/nearby/'+$scope.geo.features[i].id)
                            }

                            

                        }
                        
                    }, function(error) {
                        alert('Unable to get location: ' + error.message);
                    });*/
    };



});

var HSSearch = {
    lastParams: false,
    placeSearch: false,
    autocomplete: false,
    callback: false,

    componentForm: {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
    },

    labelConversion: {
        "street_number": 'street_number',
        "route": 'route',
        "locality": 'city',
        "administrative_area_level_1": 'state',
        "country": 'country',
        "postal_code": 'zip'
    },

    init: function() {
        this.placeInit();
        $(document).on("gotPosition", HSSearch.biasResults);
    },

    biasResults: function() {
        var geolocation = new google.maps.LatLng(
            window.userPosition.coords.latitude, window.userPosition.coords.longitude);
     //   HSSearch.autocomplete.setBounds(new google.maps.LatLngBounds(geolocation,
       //     geolocation));
    },

    placeInit: function() {
        // Create the autocomplete object, restricting the search
        // to geographical location types.
        HSSearch.autocomplete = new google.maps.places.Autocomplete(
            /** @type {HTMLInputElement} */
            (document.getElementById('searchInput')), {
                types: ['geocode']
            });
        // When the user selects an address from the dropdown,
        // do search
        google.maps.event.addListener(HSSearch.autocomplete, 'place_changed', function() {
            HSSearch.fillInAddress();
        });
    },

    fillInAddress: function() {
        // Get the place details from the autocomplete object.
        var place = HSSearch.autocomplete.getPlace();

        // Get place lat/lon
        var params = {};
        params["lat"] = place.geometry.location.d;
        params["lon"] = place.geometry.location.e;
        params["full"] = $("#stormSearchInput").val();

        // Get each component of the address from the place details
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            if (HSSearch.labelConversion[addressType]) {
                var lbl = HSSearch.labelConversion[addressType];
                params[lbl] = place.address_components[i][HSSearch.componentForm[addressType]];
                if (addressType == "country" && params[lbl] != "United States") {
                    $("#stormSearchInput").val("");
                    alert("Only US Locations are supported at this time.");
                    return;
                }
            }
        }

        console.log(params);
    }
};

var mapStyle = {
    "zoomControl":"false",
    "attribution": "<a href='http://mapbox.com/about/maps' target='_blank'>Terms & Feedback</a>",
    "autoscale": true,
    "bounds": [-180, -85.0511,
        180,
        85.0511
    ],
    "center": [-77.03643321990967,
        38.89546690844457,
        16
    ],
    "description": "A painstakingly hand-drawn representation of the entire world. 2B graphite on acid-free paper.",
    "filesize": 212410,
    "id": "examples.a4c252ab",
    "maxzoom": 0,
    "minzoom": 15,
    "name": "Pencil",
    "private": true,
    "scheme": "xyz",
    "source": "mapbox:///mapbox.mapbox-streets-v4",
    "tilejson": "2.0.0",
    "tiles": [
        "https://a.tiles.mapbox.com/v4/examples.a4c252ab/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IlhHVkZmaW8ifQ.hAMX5hSW-QnTeRCMAy9A8Q",
        "https://b.tiles.mapbox.com/v4/examples.a4c252ab/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IlhHVkZmaW8ifQ.hAMX5hSW-QnTeRCMAy9A8Q"
    ],
    "webpage": "https://a.tiles.mapbox.com/v4/examples.a4c252ab/page.html?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IlhHVkZmaW8ifQ.hAMX5hSW-QnTeRCMAy9A8Q"
};