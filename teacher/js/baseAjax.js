layui.define('layer', function (exports) {
    "use strict";
    var $ = layui.jquery;

    var baseAjax = {
        severUrl: "http://chengmai.iok.la:38450/housing/",
        projectUrl: "http://localhost:63343/teacher/",
        post: function (url, params, callback) {
            $.ajax({
                type: "POST",
                url: baseAjax.severUrl + url,
                timeout: 50000,
                dataType: "json",
                data: params,
                contentType: "application/json",
                success: function (result) {
                    if (result != null) {
                        callback(result);
                    }
                },
                error: function (result) {
                    layer.msg(result, {time: 1000});
                    // top.location.replace(baseAjax.projectUrl + "pages/404.html");
                }
            });
        },
        get: function (url, params, callback) {
            $.ajax({
                type: "GET",
                url: baseAjax.severUrl + url + "?" + params,
                timeout: 50000,
                dataType: "json",
                contentType: "application/json",
                success: function (result) {
                    if (result != null && result.status == 2) {
                        callback(result);
                    }
                },
                error: function (result) {
                    top.location.replace(baseAjax.projectUrl + "pages/404.html");
                }
            });
        },
        v: '1.0.0'

    }

    exports('baseAjax', baseAjax);
});



















