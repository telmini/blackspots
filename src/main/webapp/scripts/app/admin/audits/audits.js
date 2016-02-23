'use strict';

angular.module('blackspotsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('audits', {
                parent: 'admin',
                url: '/audits',
                data: {
                    authorities: ['ROLE_ADMIN'],
                    pageTitle: 'Audits'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/admin/audits/audits.html',
                        controller: 'AuditsController'
                    }
                },
                resolve: {
                    
                }
            });
    });
