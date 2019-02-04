

var prodList = document.querySelector('#container');
prodList.addEventListener("click", deleteItem);

function deleteItem(e){
 if (e.target.classList.contains("btn-danger")) {
    if (confirm("Are you sure?")) {

      //removes the product div (which is parent of remove div and remove div is parent of btn-danger)
      var prod = e.target.parentElement.parentElement.remove();
      console.log(prod);
     } 

    }

}


function getTotalPrice() {  //works individual products
  var products = document.getElementsByClassName("product");  
  var cartTotalPrice = document.querySelector("#cart-total-price span"); //update dinamic on each input.
  cartTotalPrice.innerText = 0;


  for (var i = 0; i < products.length; i++) {          
   products[i].querySelector(".totalP span").innerText =
   Number(Number(products[i].querySelector(".price span").innerText) *
    Number(products[i].querySelector(".quantity").value)); 
 
   cartTotalPrice.innerText = Number(cartTotalPrice.innerText) + 
   Number(products[i].querySelector(".totalP span").innerText);
  }
}




  //Form submit event

 var form = document.querySelector("#addNewProd");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  var newProd = document.getElementById("newProd").value;
  var newPri = document.getElementById("newPrice").value;
  var pars = parseFloat(newPri);
  pars.toFixed(2);

  createNewItem(newProd,  newPri);
});

var prodList = document.querySelector("#container");

function createNewItem(newProd, newPri) {



  //   //new div & span product name
  // var div = document.createElement("div");
  // div.setAttribute("class", "product"); //container all new products


   var newItem = document.createElement("div");
   newItem.setAttribute("class", "product");
   newItem.innerHTML = `<div>
      <label>QTY</label>
      <input type="number" name="quantity" class="quantity">
      </div>
      <div class="totalP">
      $<span>0.00</span>
      </div>
      <div class="remove" id="remove">
      <button class="button btn-danger" type="button">Delete</button>
       </div>
`;

var nameProd = document.createElement("div");
nameProd.setAttribute("class", "name"); 
newItem.appendChild(nameProd);
var span = document.createElement("span");
//  span.appendChild(newProd);
// //append new product to new span
span.appendChild(document.createTextNode(newProd));
nameProd.appendChild(span);
// // div.appendChild(nameProd);
  prodList.appendChild(nameProd);


// //new div & span product name
// var divPrice = document.createElement("div");
// divPrice.setAttribute("class", "price");
// newItem.appendChild(divPrice);
// var spanPrice = document.createElement("span");
// //append new product to new span
// spanPrice.appendChild(document.createTextNode("$ " + pars));
// divPrice.appendChild(spanPrice);
// spanPrice.appendChild(newPri);
//  var spanProd = newProd.innerHTML
// var spanPrice = newPri.innerHTML
prodList.appendChild(newItem);
console.log(newItem);
}

//add new product here
var prodList = document.querySelector("#container");
//get new product value


// function createNewItemRow(e){
//   e.preventDefault();
//   //get new product value
//   var newProd = document.getElementById("newProd").value;
//   var newPri = document.getElementById("newPrice").value;
//   var pars = parseFloat(newPri);
//   pars.toFixed(2);
  
//   //new div & span product name
//   var div = document.createElement("div");
//   div.setAttribute("class", "product"); //container all new products
//   var nameProd = document.createElement("div");
//   nameProd.setAttribute("class", "name"); 
//    div.appendChild(nameProd);
//   var span = document.createElement("span");
 
//   //append new product to new span
//   span.appendChild(document.createTextNode(newProd));
//   nameProd.appendChild(span);
//   div.appendChild(nameProd);
//   prodList.appendChild(div);


// //new div & span product name
// var divPrice = document.createElement("div");
// divPrice.setAttribute("class", "price");
// div.appendChild(divPrice);
// var spanPrice = document.createElement("span");
// //append new product to new span
// spanPrice.appendChild(document.createTextNode("$ " + pars));
// divPrice.appendChild(spanPrice);

// // var products = document.querySelector("#product");
//       var label = document.createElement("label");
//           label.innerHTML = `
//       <label>QTY</label>
//       <input type="number" name="quantity" class="quantity">
//       <div class="totalP">
//       $<span>0.00</span>
//       </div>
//       <div class="remove">
//       <button class="button btn-danger" type="button">Delete</button>
//       </div>
//      `;
//       div.appendChild(label);
//      prodList.appendChild(label);

//   //add new product to the div container
//    prodList.appendChild(div);
//    console.log(prodList);
// }

// function createNewItem(){
                     
// }

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
//        delete">X</></td>
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