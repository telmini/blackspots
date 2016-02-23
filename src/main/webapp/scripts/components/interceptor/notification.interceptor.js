 'use strict';

angular.module('blackspotsApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-blackspotsApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-blackspotsApp-params')});
                }
                return response;
            }
        };
    });
