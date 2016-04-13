'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
    .controller('CartCtrl', ['$scope', 'shoppingCart', '$http', function ($scope, shoppingCart, $http) {
        $scope.shoppingCart = shoppingCart;
        //$scope.itemCounter = 0;

        $scope.updateCart = function (shoppingCart, stock) {
            $scope.shoppingCart = {};
            if ($scope.shoppingCart.stock = stock == null) {
                $scope.shoppingCart.stock = shoppingCart.stock;
            } else {
                $scope.shoppingCart.stock = stock;
            }
            $http.put('http://localhost:8080/shoppingcart/shoppingCart/' + shoppingCart.id, $scope.shoppingCart);
            return '/cart';
        }

        $scope.deleteProduct = function (shoppingCart) {
            console.log("ID--->> " + shoppingCart.id)
            $scope.shoppingCart = {};
            $http.delete('http://localhost:8080/shoppingcart/shoppingCart/' + shoppingCart.id);
            return '/cart';
        }


        $scope.clearCart = function () {
            console.log("xxx--->> " + shoppingCart)
            $scope.shoppingCart = {};
            $http.delete('http://localhost:8080/shoppingcart/shoppingCart/');
            return '/cart';
        }
    }]);