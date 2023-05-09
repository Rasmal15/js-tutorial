// function fun_name(parameter1,2...){
//     fun_body
// }


function fun(b,c){
    a="welcome to js"
    console.log(a)
    console.log(b)
    console.log(c)
    return a+c
}
res=fun(10,"apple")
console.log(res)


//arrow function- variable=(param1,2,...)=>return_expression

x=(a,b)=>a+b
res=x(10,"apple")
console.log(res)

//define a function to find the biggest of two using arrow function

x=(a,b)=>a>b?a+" is big":b+" is big"
res=x(10,11)
console.log(res)

//biggest of three
x=(a,b,c)=>{
    if(a>c&&a>b){
        return a+" is big"
    }
    else if(b>c){
        return b+" is big"
    }
    else{
        return c+" is big"
    }
}
res=x(30,33,32)
console.log(res)