//finding day

d=new Date()
switch(d.getDay()){
    case 0:
        console.log("Sunday")
        break
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    default:
        console.log("invalid")
        break
}


//while loop

a=10
while(a>=0){ 
    console.log(a)
    a--
}

//finding factorial using while loop

a=4
b=1
while(a>1){
    b=a*(a-1)
    a--
    
    
}
console.log(b)

//fibinocci series