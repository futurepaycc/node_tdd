function fib(n){
    if(n<4) return n;
    return fib(n-1) + fib(n-2)
}

function load(){
    console.log("hello world");
    console.log("这个代码编辑器还不错");
}

//这里的程序如何debug?
function runFib(){
    for(i=0;i<100;i++){
        console.log(i+"---"+fib(i))
    }
}
