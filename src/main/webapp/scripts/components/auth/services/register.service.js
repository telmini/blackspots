'use strict';

angular.module('blackspotsApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


