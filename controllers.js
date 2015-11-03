//CONTROLLERS
myApp.controller('homeController', ['$scope', '$location', '$routeParams','cityService', 'weatherServiceDaily', 'weatherServiceHourly', function($scope, $location, $routeParams, cityService, weatherServiceDaily, weatherServiceHourly) {
     
    $scope.city = cityService.city;
    
    $scope.submit = function() {
            cityService.city = $scope.city;
            $scope.weatherResult = weatherServiceDaily.GetWeather($scope.city, $scope.days);
            $scope.weatherResultHourly = weatherServiceHourly.GetWeather($scope.city);
    };
    
    $scope.days =  2;
    
    $scope.page_2 = function() {
        $scope.weatherResult = weatherServiceDaily.GetWeather($scope.city, 2);
        $scope.days=2;
    };
    
    $scope.page_5 = function() {
        $scope.weatherResult = weatherServiceDaily.GetWeather($scope.city, 5);
        $scope.days=5;
    };
    
    $scope.page_7 = function() {
        $scope.weatherResult = weatherServiceDaily.GetWeather($scope.city, 7);
        $scope.days=7;
    };
    
    
    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK -273))+32);
    }
    
    $scope.convertToDate = function(num) {
        
        return new Date(num*1000);
    }
    
    $scope.weatherResult = weatherServiceDaily.GetWeather($scope.city, $scope.days);
    

    $scope.details= [];
                        
    
}]);


/* UNUSED CONTROLLER
myApp.controller('forecastController', ['$scope', '$routeParams', '$location', 'cityService', 'weatherService', function($scope, $routeParams, $location, cityService, weatherService) {
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || 2;
    
    
    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK -273))+32);
    }
    
    $scope.convertToDate = function(num) {
        
        return new Date(num*1000);
    }
    
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    
    $scope.submit = function() {
        if ($scope.number>0) {
            $location.path("/forecast/"+$scope.number);
        }
    }
        
                                  
}]);*/

/*TESTING PARENT CONTROLLER
myApp.controller('parentController', [function(){
    this.message = "I am a parent";
}]);

myApp.controller('childController', [function(){
    this.message = "I am a child";
}]);
*/