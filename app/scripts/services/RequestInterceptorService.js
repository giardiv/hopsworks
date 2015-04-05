'use strict';

angular.module('hopsWorksApp')
  .factory('RequestInterceptorService', ['$q', function ($q) {
    return {
      request: function (config) {

        var RESOURCE_SERVER = 'http://localhost:8080/hopsworks';
        var RESOURCE_NAME = 'api';

        var isApi = config.url.indexOf(RESOURCE_NAME);

        if(isApi != -1){
          console.log('API Request made with----------- ', config);
          config.url = RESOURCE_SERVER + config.url;
          return config || $q.when(config);
        } else {
          console.log('NOT API request----------------');
          return config;
        }

      }
    };
  }]);
