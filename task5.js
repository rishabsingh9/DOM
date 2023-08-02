var itemlist=document.querySelector('#items')
console.log(itemlist.parentElement)

console.log(itemlist.lastChild);
console.log(itemlist.lastElementChild);
console.log(itemlist.firstChild)
console.log(itemlist.firstElementChild)
console.log(itemlist.nextSibling)
console.log(itemlist.nextElementSibling)
console.log(itemlist.previousSibling)
console.log(itemlist.previousElementSibling)

var newdiv=document.createElement("div");
newdiv.className='Hello'
newdiv.id='Hello1'
newdiv.setAttribute('title','Hello div')
var newdivtext=document.createTextNode("Hello")
newdiv.appendChild(newdivtext)
var h1=document.querySelector('header h1')
console.log(newdiv)
var container=document.querySelector('header .container')

container.insertBefore(newdiv,h1);
console.log(itemlist.parentElement)

var new2=document.createElement("div");
new2.className='Hello'
new2.id='Hello1'
new2.setAttribute('title','Hello div')
var new2text=document.createTextNode("Hello")
new2.appendChild(new2text)
var parent=document.querySelector('#main')
var ab=document.querySelector('div ul')
parent.insertBefore(new2,ab)

