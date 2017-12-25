app.directive('shopcarItem', [function() {
    return {
        restrict: 'EA',
        templateUrl: "App/View/productItem.html",
        scope: {
            product: "=product",
            index: "=index"
        },
        controller: function($scope) {
            $scope.checkItem = function() {
                $scope.$emit("updataItemState");
            };

            $scope.caculate = function(flag) {
                if (flag == "+") {
                    ++$scope.product.count;
                } else {
                    if ($scope.product.count <= 1) return;
                    --$scope.product.count;
                }
                $scope.$emit("updataItemState");
            }

            $scope.deleteItem=function(){
            	$scope.$emit("deleteItemState",this.index);
            }
        },
        link: function(scope, iElement, iAttrs) {

        }
    };
}])