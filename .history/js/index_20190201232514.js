

  document.getElementById("calc-prices-button").addEventListener("click", getTotalPrice);
  document.getElementById("addExtra").addEventListener("click", createNewItem);
            
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

}

function createNewItem(){
  var btn = document.createElement("p");        // Create a <button> element
  var t = document.createTextNode("Shirt");       // Create a text node
  var appe = btn.appendChild(t);                                // Append the text to <button>
  var add = document.getElementsByClassName('product')[0];
  // console.log(add);
  document.add.appendChild(btn);           
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
