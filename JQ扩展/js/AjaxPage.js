function AjaxPage(url,callback,askParameter){
    $.ajax({
        type: 'POST',
        url: url ,
        data: askParameter ,
        dataType: 'JSON',
        success:function(result){
//                默认result类型
//                result ={
//                    flag:1,//请求成功或者失败 1为成功 0为失败
//                    msg:'请求成功',//请求成功或者失败 返回的消息
//                    thisPage:1,//当前第几页 从1开始算
//                    allPage:10,//分页一共多少页面
//                    dataList:[ //内容的解析
//                        {name:'刘超', age:18},
//                        {name:'潘昂', age:18},
//                        {name:'小智', age:18},
//                        {name:'小刚', age:18}
//                    ]
//
//                }
            if (typeof(result) == "string") { //如果返回为字符串 做一个转换操作
                var result = eval("(" + result + ")");
            }
            if(result.flag){
                    callback(result)
            }else{
                alert(result.msg); //提示操作失败
            }
        }
    });
}
function creatPageFoot(id,thisPage,allPage){ //参数为:当前页,总页数
    thisPage = parseInt(thisPage);
    document.getElementById(id).innerHTML='';
    // 以1 ... 5 6 7 8 9... 15 为例

    if(thisPage <= 4 ){ //当前页为4   1 2 3 4 ???

        //创建当前页 的前面页脚
        for(var i=1;i<thisPage;i++){
            var a = document.createElement('a');//创建a标签
            a.innerHTML = i;//a标签内容
            $(a).attr('myNum',i); //a标签添加属性  对应其当前值
            a.onclick =function(){ //添加页脚点击事件
                askThisPage($(this).attr('myNum'));
            }
            document.getElementById(id).appendChild(a); //将a标签加入容器
        }
        //创建当前页
        var thisa = document.createElement('a');//创建a标签
        thisa.innerHTML = thisPage;//a标签内容
        $(thisa).attr('myNum',thisPage); //a标签添加属性  对应其当前值
        thisa.className ='focus';
        document.getElementById(id).appendChild(thisa); //将a标签加入容器

        if(allPage - thisPage >3){  //当前页为4   1 2 3 4 5 6 ... 8

            //创建当前页的后面几页
            for(var i =1;i<3;i++){
                var a = document.createElement('a');//创建a标签
                a.innerHTML =thisPage+ i;//a标签内容
                $(a).attr('myNum',thisPage+i); //a标签添加属性  对应其当前值
                a.onclick =function(){ //添加页脚点击事件
                    askThisPage($(this).attr('myNum'));
                }
                document.getElementById(id).appendChild(a); //将a标签加入容器
            }
            //创建...
            var span = document.createElement('span');//创建span标签
            span.innerHTML = '...';//span标签内容
            document.getElementById(id).appendChild(span); //将span标签加入容器
            //创建最后一页
            var lasta = document.createElement('a');//创建a标签
            lasta.innerHTML = allPage;//a标签内容
            $(lasta).attr('myNum',allPage); //a标签添加属性  对应其当前值
            lasta.onclick =function(){ //添加页脚点击事件
                askThisPage($(this).attr('myNum'));
            }
            document.getElementById(id).appendChild(lasta); //将a标签加入容器

        }else{//当前页为4   1 2 3 4 5 6 7

            //创建当前页的后面几页
            for(var i =thisPage+1;i<allPage+1;i++){
                var a = document.createElement('a');//创建a标签
                a.innerHTML = i;//a标签内容
                $(a).attr('myNum',i); //a标签添加属性  对应其当前值
                a.onclick =function(){ //添加页脚点击事件
                    askThisPage($(this).attr('myNum'));
                }
                document.getElementById(id).appendChild(a); //将a标签加入容器
            }


        }
    }else{//当前页面>4  当前页为第5也表现形式为  1 ... 3  4  5???


        //创建第1页
        var firsta = document.createElement('a');//创建a标签
        firsta.innerHTML = 1;//a标签内容
        $(firsta).attr('myNum',1); //a标签添加属性  对应其当前值
        firsta.onclick =function(){ //添加页脚点击事件
            askThisPage($(this).attr('myNum'));
        }
        document.getElementById(id).appendChild(firsta); //将a标签加入容器

        //创建...
        var span = document.createElement('span');//创建span标签
        span.innerHTML = '...';//span标签内容
        document.getElementById(id).appendChild(span); //将span标签加入容器
        //创建当前页 的前面页脚
        for(var i=thisPage-2;i<thisPage;i++){
            var a = document.createElement('a');//创建a标签
            a.innerHTML = i;//a标签内容
            $(a).attr('myNum',i); //a标签添加属性  对应其当前值
            a.onclick =function(){ //添加页脚点击事件
                askThisPage($(this).attr('myNum'));
            }
            document.getElementById(id).appendChild(a); //将a标签加入容器
        }

        //创建当前页
        var thisa = document.createElement('a');//创建a标签
        thisa.innerHTML = thisPage;//a标签内容
        $(thisa).attr('myNum',thisPage); //a标签添加属性  对应其当前值
        thisa.className ='focus';
        document.getElementById(id).appendChild(thisa); //将a标签加入容器

        if(allPage - thisPage >3){  //当前页为5   1 ... 3 4 5 6 7 ... 9

            //创建当前页的后面几页
            for(var i =1;i<3;i++){
                var a = document.createElement('a');//创建a标签
                a.innerHTML =thisPage+ i;//a标签内容
                $(a).attr('myNum',thisPage+i); //a标签添加属性  对应其当前值
                a.onclick =function(){ //添加页脚点击事件
                    askThisPage($(this).attr('myNum'));
                }
                document.getElementById(id).appendChild(a); //将a标签加入容器
            }
            //创建...
            var span = document.createElement('span');//创建span标签
            span.innerHTML = '...';//span标签内容
            document.getElementById(id).appendChild(span); //将span标签加入容器
            //创建最后一页
            var lasta = document.createElement('a');//创建a标签
            lasta.innerHTML = allPage;//a标签内容
            $(lasta).attr('myNum',allPage); //a标签添加属性  对应其当前值
            lasta.onclick =function(){ //添加页脚点击事件
                askThisPage($(this).attr('myNum'));
            }
            document.getElementById(id).appendChild(lasta); //将a标签加入容器

        }else{//当前页为4   1 ... 3 4 5 6 7 8

            //创建当前页的后面几页
            for(var i =thisPage+1;i<allPage+1;i++){
                var a = document.createElement('a');//创建a标签
                a.innerHTML = i;//a标签内容
                $(a).attr('myNum',i); //a标签添加属性  对应其当前值
                a.onclick =function(){ //添加页脚点击事件
                    askThisPage($(this).attr('myNum'));
                }
                document.getElementById(id).appendChild(a); //将a标签加入容器
            }


        }


    }

}