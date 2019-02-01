

  // document.getElementById("calc-prices-button").addEventListener("click", function(event){
            
  //       var clickedElement = event.target;
  //       var parentElement = event.target.parentElement;

        //Retrieves the unit price of the product
//Retrieves the quantity of items desired
//Calculates the total price based on this data
//Updates the total price in the DOM
// getPriceByProduct();


    // });

function deleteItem(e){
   
}

function getPriceByProduct(itemNode){
  // var getInput = document.getElementsByClassName("quantity").value;

  var myQuantity = parseInt(document.getElementsByClassName('costUnit').value); 
  var myInput = parseInt(document.getElementsByClassName('quantity').value);
  var result = document.getElementsByClassName('result');
  var multiply = +myQuantity + +myInput;
  result.innerHTML = multiply;
  
  // if (result !== NaN) {
  // 
  // }

  // console.log(result);

  //  document.getElementById('result').innerHTML = myResult;
  // itemNode = myResult;
  // return itemNode;
}




function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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
