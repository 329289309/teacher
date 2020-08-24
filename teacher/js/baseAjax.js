layui.define('layer', function (exports) {
    "use strict";
    var $ = layui.jquery;

    var baseAjax = {
        severUrl: "http://chengmai.iok.la:38450/housing/",
        projectUrl: "http://localhost:63342/teacher/",
        post: function (url, params, callback) {
            $.ajax({
                type: "POST",
                url: baseAjax.severUrl + url,
                timeout: 50000,
                dataType: "json",
                data: params,
                beforeSend: function () {
                },
                contentType: "application/json",
                success: function (result) {
                    if (result != null && result.status == 2) {
                        callback(result);
                    }
                },
                error: function (result) {
                    layer.msg(JSON.stringify(result), {time: 1000});
                    console.log(JSON.stringify(result));
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



















