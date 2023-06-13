let html = document.querySelector('#html')//在js里获取HTML的容器
let style = document.querySelector('#style')
let string = `/*你好，我是一名前端新人
* 接下来我要加样式了
* 我要加的样式是字体变红色
**/
body{
    color: black;
}

/* 画一个正方形*/
#div1{
    border:1px solid red;
    height:200px;
    width:200px;
}

/*画一个八卦图
*首先把div变成一个圆圈
**/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}

/*八卦由一黑一白构成的
*用背景渐变来画两边不一样的颜色，左白右黑
*搜索：css gradient，然后直接改颜色复制代码
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(9,9,121,1) 50%, rgba(7,7,7,1) 50%, rgba(0,0,0,1) 100%);
}

/*
* 在圆中画两个圆圈，先创建两个标签
* 用伪元素代替用两个div标签
* 为了好看，这部分代码已经放在HTML页面中
**/
#div1::before{content:'1';}
#div1::after{content:'2';}

/*
* 把两个content变成上下两个球
**/
#div1::before{
    width:100px;
    height:100px;
    position:absolute;
    transform:translateX(-50%);
    top:0;
    left:50%;
    border-radius:50%;
    background:#000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,250,250,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    position:absolute;
    transform:translateX(-50%);
    bottom:0;
    left:50%;
    border-radius:50%;
    background:#fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}


`;
let string2= '';
let n = 0;//为了让循环里的N从0开始
console.log(string.length)
//html.innerHTML = string.substring(0,n);//在html里面更改写入内容（删掉是想把所有的显示都在循环里面实现，更方便的替换<br>）

//把setTimeout封装成一个递归函数，然后调用step函数,

let step = () => {
    
    setTimeout(() => {
        console.log(string[n])
        if (string[n]==='\n'){  //第N个字符如果是回车就用<br>代替
            string2 = string2 + '<br>'
        }else if(string[n]===' '){
            string2 += '&nbsp'
        }else{      //如果第n个字符不是回车就直接照搬
            string2 = string2 + string[n]
        }
        //上述if-else可以简化：string2 += (string[n]==='\n' ? '<br>' : string[n])

        html.innerHTML = string2;
        //html.innerHTML = string.substring(0,n);
        style.innerHTML = string.substring(0,n);
        
        window.scrollTo(0,999999);//页面不够高的时候显示不了后面的字，加上以后回自动滚动
        html.scrollTo(0,999999);
        if(n < string.length-1){//当n小于字符串长度的时候，就继续调用函数,并且让n+1，，但是最后会多出来一个undefined，r如果n不是最后一个就继续执行
            n=n+1
            step()
        }else{
            //什么都不做
        }
   }, 0);
};
step();




