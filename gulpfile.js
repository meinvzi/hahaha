var fs = require("fs");
var path = require("path");
var gulp = require("gulp");
var gulpServer = require("gulp-webserver");
gulp.task("server", function() {
    gulp.src("./")
        .pipe(gulpServer({
            host: "localhost",
            port: 8000,
            open: true
        }));
});
gulp.task("dataServer", function() {
    gulp.src("./Data")
        .pipe(gulpServer({
            host: "localhost",
            port: 8008,
            middleware: function(req, res, next) {
                if (req.url == "/data/") {
                    var filepath = path.join(__dirname, "Data/data.json");
                    fs.readFile(filepath, function(err, data) {
                        if (err) return console.error(err);
                        console.log(data)
                        res.writeHead(200, {
                            "Content-Type": "text/json",
                            "Access-Control-Allow-Origin": "*"
                        });
                        res.end(data);
                    });
                }
            }
        }));
});
gulp.task("default", function() {
    gulp.start("server", "dataServer");
});