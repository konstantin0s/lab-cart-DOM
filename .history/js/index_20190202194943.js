
  // document.getElementById("calc-prices-button").addEventListener("click", getTotalPrice);
  document.getElementById("addExtra").addEventListener("click", createNewItemRow);
  document.getElementById("addExtra").addEventListener("click", createQuantityNode);
  document.getElementById("addExtra").addEventListener("click", createQuantityInput);
  document.getElementById("addExtra").addEventListener("click", getPriceByProduct);
  document.getElementById("addExtra").addEventListener("click",   createDeleteButton);
  document.getElementById("calc-prices-button").addEventListener("click", calculatePriceProducts);
  
//         var clickedElement = event.target;
//         var parentElement = event.target.parentElement;

//         Retrieves the unit price of the productv
// Retrieves the quantity of items desired
// Calculates the total price based on this data
// Updates the total price in the DOM
// getPriceByProduct();

var productsArray = document.getElementsByClassName('second').elements;
console.log(productsArray);

function calculatePriceProducts() {
  var result = 0;
  productsArray.forEach(function(index) {
    var priceItem = document.getElementsByClassName("cost-" + index.toString()).innerHTML;
    var num = parseFloat(priceItem.replace(/[^0-9.]/g, ""));
    var quantity = document.getElementsByClassName("total-" + index.toString()).value;
    quantity = parseInt(quantity);
    var total = quantity * num;
    document.getElementsByClassName("totalP-" + prodNr.toString()).innerHTML = total;
    result += total;
  })
  document.getElementsByClassName("price2").textContext = result;
}


function deleteItem(e){
   
}

function getPriceByProduct(itemNode){
  // var h5 = document.createElement("H5");                       // Create a <p> element
  // itemNode = document.createTextNode("$0 "); 
  // h5.className = 'defPrice';     // Create a text node
  // h5.appendChild(itemNode);                                          // Append the text to <p>
  // document.getElementsByClassName("newRowItems")[0].appendChild(h5);   
}


function updatePriceByProduct(productPrice, index){

}

// function getTotalPrice(result) {
//    var getQuantity = parseInt(document.getElementById('costUnit').value); 
//    var getInput = parseInt(document.getElementById('quantity').value);
//    var result = getQuantity * getInput;

// //    var elements = document.getElementById("my-form").elements;
// //    for (var i = 0; i < elements.length; i++) {
   
// // }
 
//     if (!result) {
//     document.getElementsByClassName("totalP-1")[0].innerHTML = "Add Num";
//   } else {
//     document.getElementsByClassName("totalP-1")[0].innerHTML = "Total price is = $" + result;
//   }
// }




function createQuantityInput() { 
// var label = document.createElement("LABEL"); 
// label.className = 'inputQua';    
// var quaInput = document.createElement("INPUT");
// label.appendChild(quaInput);
// document.getElementsByClassName('newRowItems')[0].appendChild(label);
}

function createDeleteButton(){
// var button = document.createElement("BUTTON"); 
// button.className = 'button btn-delete';    
// var quaDel = document.createTextNode("Delete");
// button.appendChild(quaDel);
// document.getElementsByClassName('newRowItems')[0].appendChild(button);
}

function createQuantityNode(){
  // var h5 = document.createElement("H5");
  // h5.className = 'quan';                       // Create a <p> element
  // var quaNode = document.createTextNode("Quantity: ");      // Create a text node
  // h5.appendChild(quaNode);                                          // Append the text to <p>
  // document.getElementsByClassName("newRowItems")[0].appendChild(h5);   
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  // var h5 = document.createElement("H5");                       // Create a <p> element
  // itemName = document.createTextNode("Sexy Shirt: "); 
  // h5.className = 'sexy';     // Create a text node
  // h5.appendChild(itemName);                                          // Append the text to <p>
  // document.getElementsByClassName("newRowItems")[0].appendChild(h5);   
  
  // var label = document.createElement("LABEL");
  // var par = document.createElement("P");                       // Create a <p> element
  // var dollar = document.createTextNode("$");
  // par.appendChild(dollar);  
  // itemUnitPrice = document.createElement("INPUT");
  // label.appendChild(itemUnitPrice);
  // document.getElementsByClassName('newRowItems')[0].appendChild(par);
  // document.getElementsByClassName('newRowItems')[0].appendChild(label);
  
}

function createNewItem(){
                     
}

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };



// function getTotal() {
//     // getProducts();
//   var getPrice = parseInt(document.getElementsByClassName('fPrice').value); 
//   var getQua = parseInt(document.getElementsByClassName('fQua').value);
//  var result = getPrice * getQua;
//    if (!result) {
//    document.getElementsByClassName("fTotal")[0].innerHTML = "Please Enter Numbers";
//  } else {
//    document.getElementsByClassName("fTotal")[0].innerHTML = "Total price is = $" + result;
 
//  }
// }


// class Product {
//   constructor(name, price, quantity) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }
// }

// //local storage
// class Store {
//   static getProducts() {
//     var products;
//     if (localStorage.getItem('products') === null) {
//       products = [];
//     } else {
//       products = JSON.parse(localStorage.getItem('products'));
//     }

//     return products;
//   }

//   static addProduct(product) {
//      var products = Store.getProducts();
//        products.push(product);
//        localStorage.setItem('products', JSON.stringify(products));
//   }

//   static removeProduct(quantity) {
//     var products = Store.getProducts();
//     products.forEach((product, index) => {
//       if (product.quantity === quantity) {
//         products.splice(index, 1);
//       }
//     });

//     localStorage.setItem('products', JSON.stringify(products));

//   }
// }

// class UI {
//   static displayProducts() {
  
//      const products = Store.getProducts();

//      products.forEach((product) => UI.addProductToList(product));

//      }
//      static addProductToList(product) {
//       var list = document.querySelector("#product-list");
//       var  row = document.createElement("TR");
//       row.innerHTML = `
//       <td>${product.name}</td>
//       <td>${product.price}</td>
//       <td>${product.quantity}</td>
//       <td><a href="#" class="btn btn-danger btn-sm
//        delete">X</a></td>
//      `;

//       list.appendChild(row);
//   }

//   static deleteProduct(el) {
//     if (el.classList.contains("delete")) {
//         el.parentElement.parentElement.remove(); // deletes tr
//     }
//   }

//   static showAlert(message, className) {
//   var div = document.createElement('div');
//      div.className = `alert alert-${className}`;
//      div.appendChild(document.createTextNode(message));
//      var container = document.querySelector('#amess');
//      var form = document.querySelector('#product-form');
//      container.insertBefore(div, form);
//      setTimeout(() => document.querySelector('.alert').remove(), 3000);
//   }

//   static clearFields() {
//     const name = document.querySelector("#newProd").value = "";
//     const price = document.querySelector("#newPrice").value = "";
//     const quantity = document.querySelector("#newQty").value = "";
//   }
// }


// document.addEventListener("DOMContentLoaded", UI.displayProducts);

// document.querySelector("#product-form").addEventListener("submit", (e) => {
//   // e.preventDefault();
//   const name = document.querySelector("#newProd").value;
//   const price = document.querySelector("#newPrice").value;
//   const quantity = document.querySelector("#newQty").value;

//   //validate
//   if (name === '' || price === '' || quantity === '') {
//     UI.showAlert('please fill in all fields', 'danger');
//   } else {
//     const product = new Product(name, price, quantity);

//     UI.addProductToList(product);

//     //add product to Store
//     Store.addProduct(product);

//     UI.clearFields();
//   }


// });

// //delete product
// document.querySelector("#product-list").addEventListener("click", (e) => {
//   UI.deleteProduct(e.target);

//   //remove product from store
// Store.removeProduct(e.target.parentElement.previousElementSibling.textContent);

// });