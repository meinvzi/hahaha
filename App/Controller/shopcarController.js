app.controller('shopcarController', ['$scope', 'shopcarServer', function($scope, shopcarServer) {
    shopcarServer.getProducts()
        .then(function(result) {
            $scope.products = result;
            $scope.updateProduct();
        });
    $scope.checkall = function() {
        if ($scope.ischeckAll) {
            $scope.products.map(function(item) {
                item.isCheck = true;
            });
        } else {
            $scope.products.map(function(item) {
                item.isCheck = false;
            });
        }
        this.updateProduct();
    }
    $scope.$on("deleteItemState", function(event, index) {
        $scope.products.splice(index, 1);
        $scope.updateProduct();
    });
    $scope.$on("updataItemState", function() {
        var arr = [];
        $scope.products.map(function(item) {
            if (item.isCheck) {
                arr.push(item);
            }
        });
        if (arr.length == $scope.products.length) {
            $scope.ischeckAll = true;
        } else {
            $scope.ischeckAll = false;
        }
        $scope.updateProduct();
    });
    $scope.updateProduct = function() {
        $scope.summary = 0;
        $scope.count = 0;

        $scope.products.map(function(item) {
            if (item.isCheck) {
                $scope.summary += item.price * item.count;
                $scope.count += item.count;
            }
        });

    }
}])