angular.module('starter.services', [])



/**
 * A simple example service that returns some data.
 */
.factory('Servers', function($http) {
  
  // Might use a resource here that returns a JSON array
  $http.get('https://admin.accelerated.de/jsonUserApi.php?action=getServerList&auth=S3hsPd8VcKjs')
  .success(function(data, status, headers, config) {
   var servers =data
  })
  


  return {
    all: function() {
      return $http.get('https://admin.accelerated.de/jsonUserApi.php?action=getServerList&auth=S3hsPd8VcKjs').then(function (response) {
     if (response.data.error) {
         return null;
     } else {
         console.log(response.data);
         return response.data;
     }
 });
    },
    get: function(serverId) {
      // Simple index lookup
      return servers[serverId];
    }
  }
});
