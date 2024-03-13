var sidebar=document.querySelector(".sidenavbar");
function shownavbar()
{
    sidebar.style.left="0%";
}
function closenavbar()
{
    sidebar.style.left="-60%";
}
function openNewPage(pageUrl) {
    window.open(pageUrl,'_blank');
   
}
var search=document.querySelector(".search");
var products=document.querySelector(".products");
var products_div=products.querySelectorAll("div");
search.addEventListener("keyup",function (){
  var entered_value=event.target.value.toUpperCase()
  for(var count=0;count<products_div.length;count=count+1)
  {
    var product_name=products_div[count].querySelector("p").textContent.toUpperCase();
    if(product_name.indexOf(entered_value)<0)
    {
        products_div[count].style.display="none"
    }
    else
    {
        products_div[count].style.display="block"
    }
  }
})