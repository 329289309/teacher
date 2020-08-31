layui.config({}).use(['jquery', 'baseAjax'], function () {
    var $ = layui.jquery
        , base_ajax = layui.baseAjax;

    var user = layui.data("user");
    console.log(user);
    if (user != undefined) {
        $("#userName").text(user.phone);
    }
});