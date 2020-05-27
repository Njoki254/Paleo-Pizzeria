//Match variables with user inputs
var totalCostArray = [];
//Only global variable in code
$(document).ready(function () {
  //Constructor
function GetPizzaOrder( type, size, topping, crust) {
    this.type = type.value;
    this.size = parseInt(size).value;
    this.topping = parseInt(topping).value;
    this.crust = parseInt(crust).value;
    this.delivery= 100;
 }
//Prototype
 PizzaOrder.prototype.pizzaCost = function () {
   if (this.size === "small") {
     this.price += 450;
   } else if (this.size === "medium.") {
     this.price += 700;
   } else if (this.size === "large") {
     this.price += 1000;
   } else if (this.size === "family") {
   this.price += 2500;
   }
 } else if (this.size === "") {
 console.log('Please choose a size');
 }
   if (this.topping === "Sausage") {
     this.price += 100;
   } else if (this.topping === "Guacomole") {
     this.price += 150;
   } else if (this.topping=== "Mushroom") {
     this.price += 50;
   }
 } else if (this.topping=== "") {
   console.log('Please choose a topping');
 }
   if (this.crust === "crispy") {
     this.price += 100;
   } else if (this.crust === "stuffed") {
     this.price += 150;
   } else if (this.crust=== "regular") {
     this.price += 50;
   }
 } else if (this.crust=== "") {
    console.log('Please choose a crust');
 }
   this.price += this.size;
   this.price += this.topping;
   this.price += this.crust;
   this.price += this.delivery;
   return this.total;
 }
}
});


//Add to Cart button

$("addToCart").click( function(){
    this.type = type.value;
    this.size = parseInt(size).value;
    this.topping = parseInt(topping).value;
    this.crust = parseInt(crust).value;
    this.delivery= 100;
    return this.total;
 });

//Declaring and defining variables and their values




//Constructor function for basic addition of costs



//Selections


//Prototype for adding costs

var pizzaAdd2 = new PizzaOrder { type, size, topping, crust};

//What happens when pizza is added
function pizzaAdd(){
  new PizzaOrder = pizzaAdd2.size +pizzaAdd2.topping + pizzaAdd2.crust + pizzaAdd2.delivery};
}
//Add Pizza Button
  $("#addPizza").click(function function() {
   pizzaAdd2.total = pizzaAdd2.size +pizzaAdd2.topping + pizzaAdd2.crust + pizzaAdd2.delivery});

   let finalTotal= pizzaAdd2.total + this.total;

//Checkout  Button and functions

function checkoutTotal(){
  alert("Your order total is Ksh " + parseInt(finaTotal);
};


}
("#checkout").click(function(){
  alert("Your final total is Ksh " +parseInt(finaTotal)+ "Please fill in your details for delivery");
});

//Delivery Address finalization and order confirmation
  $("#confirm").click(function(){
      event.preventDefault();

      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let address = $("input#address").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#address").val()!=""){

        document.getElementById("confirm").innerHTML = person+", We have recieved your order and it will be delivered to you at "+address+ ".It will cost you "+finalTotal);
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
