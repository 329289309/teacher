/**
 * Created by y 2020/08/13
 */
layui.config({
    base: './pages/layuiadmin',
    version: new Date().getTime()
}).use(['baseAjax'], function () {
    var base_ajax = layui.baseAjax;
    top.location.replace(base_ajax.projectUrl + "/pages/views/user/login.html");
});