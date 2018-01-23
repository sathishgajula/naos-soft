/**
 * Main AngularJS Web Application
 */
var app = angular.module('naosApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      // Home
      .when("/main", { templateUrl: "src/partials/home.html", controller: "PageCtrl" })
      // Pages
      .when("/about", { templateUrl: "src/partials/about.html", controller: "PageCtrl" })
      .when("/services", { templateUrl: "src/partials/services.html", controller: "PageCtrl" })
      .when("/solutions", { templateUrl: "src/partials/solutions.html", controller: "PageCtrl" })
      .when("/product", { templateUrl: "src/partials/product.html", controller: "PageCtrl" })
      .when("/contact", { templateUrl: "src/partials/contact.html", controller: "PageCtrl" })
      // Blog
      .when("/blog", { templateUrl: "src/partials/blog.html", controller: "BlogCtrl" })
      // else 404
      .otherwise("/404", { templateUrl: "src/partials/404.html", controller: "PageCtrl" });
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
    console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    
    // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    })
});