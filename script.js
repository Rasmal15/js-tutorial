            //string fotmating in js

// name="Rasmal"
// age=21
// txt=`age is ${age} for ${name}`
// console.log(txt)

            //string methods in js

// stt=" apPle is red "
// res=stt.slice(2,10)
// res=stt.slice(-5,-1)
// res=stt.trim()
// res=stt.toUpperCase()
// res=stt.toLowerCase()
// res=stt.split(" ")
// res=stt.search("is")
// res=stt.match("is")
// console.log(res)

        //object in js=>object with named indeces


// ob={name:"Rasmal",age:21,address:{city:"Vanimal",district:"Kozhikode",state:"kerala"},display:function(){
//     console.log("hello")
// }}
// ob["name"]="RASMAL"
// console.log(ob)
// ob.display()
// console.log(ob.name)
// console.log(ob.address.city)


//word count


    //array=>object with numerical indeces

// a=["apple",1,2,3,true]
// a[2]="kiwi"
// a[5]="orange"
// a[7]="cricket"
// console.log(a)
// console.log(Array.isArray(a))
// console.log(a.length)

                //array methods

// a=["apple","is","red","and","green"]
// b=a.toString()
// b=a.join(" ")
// b=a.pop()
// b=a.push(4)
// b=a.shift()
// b=a.unshift("orange")
// b=a.slice(1,3)
// b=a.slice(-2,-1)
// a.sort()
// a.reverse()
// console.log(a)
// console.log(a)

        //callback function=>a function passed into another function as an argument///invokes with the outer function

// a=[3,2,4,10,5,1,8]
// function num_sort(a,b){
//     return a-b
// }
// x=(a,b)=>a-b
// a.sort((a,b)=>a-b)
// console.log(a)

                //array iteration methods

        //  1=> forEach()=> method that calls a function(callback function) for each element of an array

// a=[1,3,2,4,5]
// sum=0
// function ssum(item){
//     sum+=item
// }
// for (i of a){
//     ssum(i)
// }
// function ssum(item){
//     sum+=item
// }
// a.forEach(ssum)
// a.forEach((item)=>{sum+=item})
// console.log(sum)

        //  2=>map()=>  creates a new array by perfoming a function on each array element

// a=[1,3,5,6,4,8]
// b=[]
// for(i of a){
//     b.push(i**2)
// }

// function sqarray(item){
//     return (item**2)
// }
// b=a.map(sqarray)

// b=a.map((item)=>item**2)
// console.log(b)

        //  3=>filter()=>  creates an array by elements which passes a test

// a=[1,4,3,8,6,10]
// function evenarr(item){
//     return item%2==0
// }
// b=a.filter(evenarr)

// b=a.filter((item)=>item%2==0)
// console.log(b)

        //  4=>reduce()=>  it runs afunction on each aray elements and produce a single value

// a=[54,2,64,75,3,78]
// b=a.reduce(ssum)
// function ssum(total,item){
//     return total+item
// }

// b=a.reduce((total,item)=>total+item)
// console.log(b)

        //  5=>every()=>  it checks if all the elemnts of an array passes a test
        //  6=>some()=>  it checks atleast one element passes a test

// a=[54,2,64,75,3,78]
// b=a.every((item)=>item%2==0)
// b=a.some((item)=>item%2==0)
// console.log(b)

        //  7=>includes()=>  checks if an element is present in an array

// a=[54,2,64,75,3,78]
//b=a.includes(15)        //false
//b=a.includes(2)        //true
// console.log(b)

        //  8=>find()=>  returns the first array element which passes a test

//  a=[1,54,2,64,75,3,78]
//  b=a.find((item)=>item%2==0)
//  console.log(b)




    //  Array.from()=> converts any iterable object to array

// a="apple"
// b=Array.from(a)
// console.log(b)



