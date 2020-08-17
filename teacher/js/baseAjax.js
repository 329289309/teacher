layui.define('layer', function (exports) {
    "use strict";
    var $ = layui.jquery;

    var baseAjax = {

        severUrl: "http://127.0.0.1:8998/housing/",
        projectUrl: "http://localhost:63342/teacher/",
        //
        // token: function (callback) {
        //     getToken(2, function (result) {
        //         callback(result);
        //     });
        // },
        // current: function (callback) {
        //     getToken(1, function (result) {
        //         callback(result);
        //     });
        // },
        post: function (url, params, callback) {
            debugger;
            // getToken(1, function (aToken) {
            $.ajax({
                type: "POST",
                url: baseAjax.severUrl + url,
                timeout: 50000,
                dataType: "json",
                data: params,
                // beforeSend: function (XMLHttpRequest) {
                //     if (url != "/common/login") {
                //         XMLHttpRequest.setRequestHeader("token", aToken);
                //     }
                // },
                contentType: "application/json",
                success: function (result) {
                    if (result != null && result.status == 2) {
                        callback(result);
                    } else {
                        showTips(result);
                    }
                },
                error: function (result) {
                    top.location.replace(baseAjax.projectUrl + "pages/404.html");
                }
            });
            // });
        },
        // get: function (url, params, callback) {
        //     getToken(1, function (aToken) {
        //         $.ajax({
        //             type: "GET",
        //             url: baseAjax.severUrl + url + "?" + params,
        //             timeout: 50000,
        //             dataType: "json",
        //             beforeSend: function (XMLHttpRequest) {
        //                 XMLHttpRequest.setRequestHeader("token", aToken);
        //             },
        //             contentType: "application/json",
        //             success: function (result) {
        //                 if (result != null && result.status == 2) {
        //                     callback(result);
        //                 } else {
        //                     showTips(result);
        //                 }
        //             },
        //             error: function (result) {
        //                 top.location.replace(baseAjax.projectUrl + "pages/404.html");
        //             }
        //         });
        //     });
        // },
        v: '1.0.0'

    }

    // 只处理token错误 和 失效两种状况
    // function showTips(result) {
    //     if (result != null) {
    //         // 1000 1001  token 信息问题
    //         if (result.statuCode == 1000 || result.statuCode == 1001) {
    //             top.location.replace(baseAjax.projectUrl + "pages/login.html");
    //         } else {
    //             layer.msg(result.info, {time: 1000});
    //         }
    //     } else {
    //         layer.msg('当前操作无法处理', {time: 1000});
    //     }
    // }

    exports('baseAjax', baseAjax);
});



















