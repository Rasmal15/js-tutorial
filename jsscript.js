commonwealth=[
    {country:"India",gold:25,silver:35,bronze:28},
    {country:"Scotland",gold:5,silver:12,bronze:5},
    {country:"Australia",gold:35,silver:15,bronze:8},
    {country:"England",gold:29,silver:21,bronze:6}
]
//listing participated contries
// commonwealth.map((item)=>item.country).forEach((item=>console.log(item)))

//total number of gold medals won by every contries
// medals=commonwealth.map((item)=>item.gold).reduce((total,item)=>total+item)
// console.log(medals)

//sort the array in the ascending order of number of silvers

// commonwealth.sort((a,b)=>a.silver-b.silver)
// console.log(commonwealth)

//list of contries who won atleast 10 bronze

// commonwealth.filter((item)=>item.bronze>=10).forEach((item)=>{console.log(item.country)})

//check if there is country named England,if there is print there is

a=commonwealth.find(item=>item.country=="England")
console.log(a)