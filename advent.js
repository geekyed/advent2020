System.register("index", ["fs", "path"], function (exports_1, context_1) {
    "use strict";
    var fs, path;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (fs_1) {
                fs = fs_1;
            },
            function (path_1) {
                path = path_1;
            }
        ],
        execute: function () {
            fs.readFile(path.join(__dirname, '/input.txt'), 'utf8', function (error, data) {
                console.log(data);
            });
        }
    };
});
