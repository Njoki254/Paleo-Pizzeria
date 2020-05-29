$(document).ready(function(){
var pizzas= [];

  $("#addToCart-btn").click(function(event){
      event.preventDefault();
      var type= document.getElementById("type").value;
      var size= document.getElementById("size").value;
      var topping= document.getElementById("topping").value;
      var crust= document.getElementById("crust").value;
  //Constructor
      function Pizza(type, size, topping, crust){
        this.type = type;
        this.size = size;
        this.topping= topping;
        this.crust = crust;
      }
      //Attach prototype to function adding total
    Pizza.prototype.calculateCosts = function(){

      var price;
      var tprice;
      var cprice;


      if (this.size === "small") {
         price = 450;
      } else if (this.size === "medium") {
         price = 700;
      } else if (this.size === "large") {
         price = 1000;
      } else if (this.size === "family") {
         price = 2500;
      } else if (this.size === "") {
        console.log("Please choose a size");
      }
      if (this.topping === "Sausage") {
        tprice = 100;
      } else if (this.topping === "Guacomole") {
        tprice = 150;
      } else if (this.topping=== "Mushroom") {
        tprice = 50;
      } else if (this.topping=== "") {
        console.log('Please choose a topping');
      }
      if (pizzaOrder.crust === "Crispy") {
        cprice = 100;
      } else if (this.crust === "Stuffed") {
        cprice = 150;
      } else if (this.crust=== "Regular") {
        cprice = 50;
      } else if (this.crust=== "") {
        console.log('Please choose a crust');
      }
      let total = parseInt(price) + parseInt(tprice) + parseInt(cprice);
      return total;
    }
    //Creation of Pizza


      let pizzaOrder= new Pizza(type, size, topping, crust);

      pizzas.push(pizzaOrder);
      var pizzaCost = pizzaOrder.calculateCosts();

      console.log(pizzaCost);

      alert("Your current cost is Kshs " +pizzaCost+ ".Feel free to add more pizzas to your cart.")
//Array



  });
 $("#checkout-btn").click(function(){
    var checkoutTotal= 0;

    pizzas.forEach(function(pizza){

    checkoutTotal+=pizza.calculateCosts();


    });
    console.log(checkoutTotal);
    alert("Your cart items add up to Kshs." +checkoutTotal+ ". You can now proceed, add delivery address, and confirm order" )
  });
  $("#confirm-btn").click(function(){

      var name = document.getElementById("name").value;
      var phone= document.getElementById("phone").value;
      var address= document.getElementById("address").value;
   alert( "Thank you for being our customer. Your order will be deliverd within an hour." )
  });
});
