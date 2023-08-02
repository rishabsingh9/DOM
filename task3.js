let items=document.getElementsByTagName("li")
//let diff=document.getElementsByClassName('abcd')
//diff[0].style.fontWeight="bold"
console.log(items)
console.log(items[1])
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
    if(i==2){
        items[i].style.backgroundColor="green"
    }
}