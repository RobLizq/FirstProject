

function requestMethod(par1,par2 ,par3, callback) {

    //第一步创建请求对象
    var xhr = new XMLHttpRequest();
    //第二步建立与服务端的lian接
    xhr.open(par1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + par2);
    //设置头信息，让数据以表单的形式传递
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")


    //第三步：向服务端发送请求
    xhr.send(par3);

    // 第四步：接受服务端返回的数据
    xhr.onreadystatechange = function () {

        //xhr.readyState == 4 完成
        //xhr.status == 200 成功
        if (xhr.readyState == 4 && xhr.status == 200) {
            var responseData = JSON.parse(xhr.responseText);
            var returnStr = responseData.data;

            callback(returnStr);
        }

    }



}












