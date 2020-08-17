layui.config({
    base: '../../layuiadmin/' //静态资源所在路径
}).extend({
    index: 'lib/index' //主入口模块
}).use(['index', 'user', 'baseAjax'], function () {
    var $ = layui.$
        , setter = layui.setter
        , admin = layui.admin
        , form = layui.form
        , router = layui.router()
        , search = router.search
        , base_ajax = layui.baseAjax;
    form.render();

    //提交
    form.on('submit(LAY-user-login-submit)', function (obj) {

        //请求登入接口
        admin.req({
            url: layui.setter.base + 'json/user/login.js' //实际使用请改成服务端真实接口
            , data: obj.field
            , done: function (res) {

                //请求成功后，写入 access_token
                layui.data(setter.tableName, {
                    key: setter.request.tokenName
                    , value: res.data.access_token
                });

                //登入成功的提示与跳转
                layer.msg('登入成功', {
                    offset: '15px'
                    , icon: 1
                    , time: 1000
                }, function () {
                    location.href = '../'; //后台主页
                });
            }
        });

    });


    //实际使用时记得删除该代码
    layer.msg('为了方便演示，用户名密码可随意输入', {
        offset: '15px'
        , icon: 1
    });

});
// layui.use(['form', 'jquery'], function () {
//     var form = layui.form,
//         layer = layui.layer,
//         $ = layui.jquery;
//
//     var vCodeStatu = false;
//     var username = "";
//
//     // 登录过期的时候，跳出ifram框架
//     if (top.location != self.location) top.location = self.location;
//
//     //表单监听事件
//     $(".form-item").on("input", function () {
//         var input_name = $(this).attr("name");
//         var input_val = $(this).val();
//         if (input_val != "") {
//             switch (input_name) {
//                 case "username":
//                     var reg = /^[A-Za-z0-9]+$/;
//                     if (!reg.test(input_val)) {
//                         layer.msg('用户名格式不正确', {time: 1000});
//                     }
//                     break;
//                 case "password":
//                     var pass_reg = /^\w+$/;
//                     if (!pass_reg.test(input_val)) {
//                         layer.msg('用户密码格式不正确', {time: 1000});
//                     }
//                     break;
//                 case "captcha":
//                     var code = /^[A-Za-z0-9]+$/;
//                     if (!code.test(input_val)) {
//                         layer.msg('验证码格式不正确', {time: 1000});
//                     }
//                     break;
//             }
//         }
//     })
//
//     // 进行登录操作
//     form.on('submit(login)', function (data) {
//         data = data.field;
//         console.log(data);
//         if (data.username == '') {
//             layer.msg('用户名不能为空');
//             return false;
//         }
//         if (data.password == '') {
//             layer.msg('密码不能为空');
//             return false;
//         }
//         if (data.captcha == '') {
//             layer.msg('验证码不能为空');
//             return false;
//         }
//         layer.msg('登录成功', function () {
//             window.location = '../pages/views/admin-index.html';
//         });
//         return false;
//     });
// });