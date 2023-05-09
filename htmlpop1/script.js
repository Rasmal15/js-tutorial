students=[
    {id:101,name:"ajith",age:16,class:"10B"},
    {id:102,name:"rahul",age:16,class:"10A"},
    {id:103,name:"raju",age:15,class:"10B"},
    {id:104,name:"athul",age:16,class:"10A"},
    {id:105,name:"akash",age:17,class:"10B"},
]

htmlData=''
students.forEach(item=>{
    htmlData+=`
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.class}</td>
        </tr>

    `
})

tt.innerHTML=htmlData