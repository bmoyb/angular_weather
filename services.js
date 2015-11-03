//SERVICES

myApp.service('cityService', function() {
    //Default city 
    
});


myApp.service('weatherServiceDaily', ['$resource', function($resource) {
   
    this.GetWeather = function(city, days){    
    
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
        callback: "JSON_CALLBACK" }, { get: {method: "JSONP" }});
        
    
    if(city != undefined){
        
        return weatherAPI.get({ q: city, cnt: days, APPID: 3123d11ae1bb7e4c5d71cff206e6ffdd });
    };
    };
    
}]);

myApp.service('weatherServiceHourly', ['$resource', function($resource) {
   
    this.GetWeather = function(city){    
    
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/hourly", {
        callback: "JSON_CALLBACK" }, { get: {method: "JSONP" }});
        
    
    if(city != undefined){
        
        return weatherAPI.get({ q: city, APPID: 3123d11ae1bb7e4c5d71cff206e6ffdd});
    };
    };
    
}]);