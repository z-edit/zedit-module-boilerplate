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