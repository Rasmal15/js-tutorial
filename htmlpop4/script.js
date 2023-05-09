//name,capital,region,lamguages,flag image
res=fetch("https://restcountries.com/v3.1/all").then(r=>r.json()).then(data=>{pop(data)}).catch(err=>{console.log(err)})




htmlData=''

function pop(countries){
  countries.forEach(item=>{
    htmlData+=`
    <div class="card" style="width:18rem">
    <img class="card-img-top" src="${item.flags.png}" alt="Card image">
    <div class="card-body">
      <h4 class="card-title">${item.name.common}</h4>
      <p class="card-text">${item.capital}</p>
      <p>${item.region}</p>
      <p>${item.languages}</p>
    </div>
  </div>
    `
})

d1.innerHTML=htmlData
}
