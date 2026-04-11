async function loadItems(){

let category=document.getElementById("categoryFilter").value;
let sort=document.getElementById("sortPrice").value;

let url="/items?";

if(category) url+="category="+category+"&";
if(sort) url+="sort="+sort;

let res=await fetch(url);
let data=await res.json();

let html="";

data.forEach(item=>{
html+=`

<div class="col-md-3 mb-4">

<div class="card shadow">

<div class="card-body">

<h5>${item.name}</h5>

<p>Category: ${item.category}</p>

<p>Price: $${item.price}</p>

</div>

</div>

</div>

`;
});

document.getElementById("productList").innerHTML=html;

}

loadItems();