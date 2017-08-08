var list = document.getElementById('demo');

var total = 0;

// function add(item){
  // list.push(item);
// }

var createP = document.createElement('p');

function add(){

console.log(list);
var itemName = document.getElementById('item-name').value;
  console.log(itemName);
var itemPrice = parseFloat(document.getElementById('item-price').value);
  console.log(itemPrice);

// var container = document.getElementById('list');
// document.body.appendChild(container);

var par = document.createElement('li');
  par.appendChild(document.createTextNode(itemName + '  '));
  par.appendChild(document.createTextNode('$ ' + itemPrice.toFixed(2)));
  //par.innerText = (itemName + ' - $ ' + itemPrice.toFixed(2));
  list.appendChild(par);
  total += itemPrice;
  console.log(total);

var final = document.getElementById('finalNum');

final.innerText = total.toFixed(2);
    final.appendChild(createP);

};
