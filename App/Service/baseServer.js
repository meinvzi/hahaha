/**
 * Created by haonan on 2015/10/23.
 */
app.factory('baseConfig', ['$http', '$q', function ($http, $q) {
    var baseConfig = {
        Common: {
            ajax: function (url, data, method) {
                var defer = $q.defer();
                var option = {
                    method: method ? method : 'get',
                    url: url
                };

                if (data && method === 'post') {
                    option['data'] = data;
                }
                else if (data && (method === "get" || method == undefined)) {
                    option["params"] = data;
                }

                $http(option)
                    .success(function (data) {
                        defer.resolve(data);
                    })
                    .error(function (err) {
                        defer.reject(err);
                    });
                return defer.promise;
            }
        }
    };
    return baseConfig;
}]);
