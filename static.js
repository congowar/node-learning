var fs = require("fs");

function canHandleRequest(request) {
    return request.url.startsWith("/static/");
}

function staticServerAsset (request ,response) {
    fs.readFile(request.url.substr(1), (error, data) => {
        if (error) {
            console.log("Error: file not found " + error);
            response.statusCode = 404;
            response.end();
            return;
        }

        response.end(data);
    });
}

exports.staticServerAsset = staticServerAsset;
exports.canHandleRequest = canHandleRequest;