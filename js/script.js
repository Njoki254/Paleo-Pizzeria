//Match variables with user inputs
$(document).ready(function () {


//Declaring and defining variables and their values



var crust=document.getElementById("crust");
var toppings=document.getElementById("topping");
var size=document.getElementById("size");
var type=document.getElementById("type")
var total

//Constructor function for basic addition

function GetPizzaOrder( type, size, topping, crust) {
    this.type = type.value;
    this.size = parseInt(size).value;
    this.topping = parseInt(topping).value;
    this.crust = parseInt(crust).value;
    this.delivery= 100;
    this.total= this.size + this.topping +this.crust + this.delivery;
    console.log("Your cost so far is "+this.total+");
 }



 switch(size){
   case "Family";
   price= 2500;
   break;
   case "Large";
   price= 1000;
   break;
   case "Medium";
   price= 700;
   break;
   case "Small";
   price= 450;
   break;
   default:
   alert('Please choose a size')
 }
 switch(topping){
   case "Guacomole";
   price=100 ;
   break;
   case "Sausage";
   price= 100;
   break;
   case "Bacon";
   price= 100;
   break;
   case "Mushroom";
   price= 100;
   break;
   default:
   alert('Please choose a topping')
 }
 switch(crust){
   case "Regular";
   price=0 ;
   break;
   case "Stuffed";
   price= 150;
   break;
   case "Crispy";
   price= 100;
   break;
   default:
   alert('Please choose a crust')
 }

PizzaOrder.prototype.totalCosts = function() {
  return this.size +this.topping + this.crust + this.delivery;
}

//Add to Cart button
document.getElementById("addToCart").addEventListener("click", function GetPizzaOrder( type, size, topping, crust) {
    this.type = type.value;
    this.size = parseInt(size).value;
    this.topping = parseInt(topping).value;
    this.crust = parseInt(crust).value;
    this.delivery= 100;
    this.total= this.size + this.topping +this.crust + this.delivery;
 });

var pizzaAdd2 = new PizzaOrder { type, size, topping, crust};

function pizzaAdd(){
  new PizzaOrder = pizzaAdd2.size +pizzaAdd2.topping + pizzaAdd2.crust + pizzaAdd2.delivery};
}

document.getElementById("addPizza").addEventListener("click", function() {
   pizzaAdd2.total = pizzaAdd2.size +pizzaAdd2.topping + pizzaAdd2.crust + pizzaAdd2.delivery});

   let finalTotal= pizzaAdd2.total + this.total;
//Add Pizza button

function checkoutTotal(){
  alert("Your order total is Ksh " + parseInt(finaTotal);
};


}
document.getElementById("checkout").addEventListener("click", function CheckoutTotal(){
  alert("Your final total is Ksh " +parseInt(finaTotal)+ "Please fill in your details for delivery");
});

//Delivery Address finalization and order confirmation
document.getElementById("confirm").addEventListener("click",(function(event){
      event.preventDefault();

      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let address = $("input#address").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#address").val()!=""){

        alert(person+", We have recieved your order and it will be delivered to you at "+address+ ".It will cost you "+finalTotal);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#confirmation").show();
      }
    });
   event.preventDefault();
  });

});



//Proceed to Checkout button



//Confirm orders
