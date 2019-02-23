/* global ngapp, xelib, modulePath */
ngapp.service('exampleService', function() {
    this.helloWorld = function() {
        console.log('Hello World!');
    };
});

// this code makes the exampleService accessible from
// zEdit scripts and UPF patchers
ngapp.run(function(exampleService, interApiService) {
    interApiService.register({
        api: { exampleService }
    });
});
ngapp.controller('exampleSettingsController', function($scope) {
    $scope.printMessage = function() {
        console.log($scope.settings.exampleModule.message);
    };
});

ngapp.run(function(exampleService, settingsService) {
    exampleService.helloWorld();

    settingsService.registerSettings({
        label: 'Example Module',
        templateUrl: `${modulePath}/partials/exampleSettings.html`,
        controller: 'exampleSettingsController',
        defaultSettings: {
            exampleModule: {
                message: 'HI!'
            }
        }
    });
});