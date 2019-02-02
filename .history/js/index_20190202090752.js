

  document.getElementById("calc-prices-button").addEventListener("click", getTotalPrice);
  document.getElementById("addExtra").addEventListener("click", createNewItemRow);
            
//         var clickedElement = event.target;
//         var parentElement = event.target.parentElement;

//         Retrieves the unit price of the product
// Retrieves the quantity of items desired
// Calculates the total price based on this data
// Updates the total price in the DOM
// getPriceByProduct();




function deleteItem(e){
   
}

function getPriceByProduct(itemNode){

}


function updatePriceByProduct(productPrice, index){

}

function getTotalPrice(result) {
   var getQuantity = parseInt(document.getElementById('costUnit').value); 
   var getInput = parseFloat(document.getElementById('quantity').value);
   var result = getQuantity * getInput;
 
    if (!result) {
    document.getElementsByClassName("totalP")[0].innerHTML = "Please Enter Numbers";
  } else {
    document.getElementsByClassName("totalP")[0].innerHTML = "Total price is = $" + result;
  }
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  var h1 = document.createElement("H5");                       // Create a <p> element
  itemName = document.createTextNode("Sexy Shirt: ");      // Create a text node
  h1.appendChild(itemName);                                          // Append the text to <p>
  document.getElementsByClassName("newRowItems")[0].appendChild(h1);   
  
  var label = document.createElement("LABEL");
  var par = document.createElement("P");                       // Create a <p> element
  var dollar = document.createTextNode("$");
  par.appendChild(dollar);  
  itemUnitPrice = document.createElement("INPUT");
  label.appendChild(itemUnitPrice);
  document.getElementsByClassName('newRowItems')[0].appendChild(par);
  document.getElementsByClassName('newRowItems')[0].appendChild(label);
  
}

function createNewItem(){
                     
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};


class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class UI {
  static displayProducts() {
     const StoredProducts = [
       {
         name: "socket",
         price: "$22",
         quantity: "2"
       }
     ];

     const products = StoredProducts;

     products.forEach((product) => UI.addProductToList(product));

     }
     static addProductToList(product) {
      var list = document.querySelector("#product-list");
      var  row = document.createElement("TR");
      row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.quantity}</td>
     
      `;
      list.appendChild(row);
  }
}


document.addEventListener("DOMContentLoaded", UI.displayProducts);

document.querySelector("product-form").addEventListener("click", (e) => {
  // e.preventDefault();
  const name = document.querySelector("#newProd").value;
  const price = document.querySelector("#newPrice").value;
  const quantity = document.querySelector("#newQty").value;

  const product = new Product(name, price, quantity);
   console.log(product);
})