export var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ok"] = 200] = "ok";
    StatusCode[StatusCode["noContent"] = 204] = "noContent";
    StatusCode[StatusCode["badRequest"] = 400] = "badRequest";
    StatusCode[StatusCode["unauthorized"] = 401] = "unauthorized";
    StatusCode[StatusCode["notFound"] = 404] = "notFound";
})(StatusCode || (StatusCode = {}));
