var pizza_sizePrice, pizza_crustPrice, pizza_toppingPrice;

function pizza_sizeSelect(pizza_size){
    this.pizza_size=pizza_size;
}

function pizza_crustSelect(pizza_crust){
    this.pizza_crust=pizza_crust;
}
function pizza_toppingSelect(pizza_topping){
    this.pizza_topping=pizza_topping;
}

function pizza_numberSelect(pizza_number){
    this.pizza_number=pizza_number;
}

function finalPrice(){
    var finalPrice = pizza_sizeSelect()+pizza_crustSelect()+pizza_toppingSelect()*pizza_numberSelect();
    return finalPrice;
}
$(document).ready(function(){


    $(".pizza_size").click(function(){
        var selectedSize = $("input[name='pizza_size']:checked").val();
        if(selectedSize=='small'){
         sizePrice = 500;
         }
         else if(selectedSize=='medium'){
             sizePrice = 1000;
          }
          else if(selectedSize=='large'){
             sizePrice = 1200;
          }
          pizza_size = sizePrice;
          console.log(pizza_size);
    });
 
 
     $(".pizza_crust").click(function(){
         var selectedCrust = $("input[name='pizza_crust']:checked").val();
         if(selectedCrust=='crispy'){
             crustPrice = 90;
         }
         else if(selectedCrust=='stuffed'){
             crustPrice = 80;
         }
         else if(selectedCrust=='gluten-free'){
             crustPrice = 70;
         }
         pizza_crust = crustPrice;
         console.log(crustPrice);
     });
     $(".pizza_topping").click(function(){
        var selectedTopping = $("input[name='pizza_topping']:checked").val();
        if(selectedCrust=='peperoni'){
            toppingPrice = 20;
        }
        else if(selectedTopping=='beef'){
            toppingPrice = 50;
        }
        else if(selectedTopping=='bacon'){
            toppingPrice = 40;
        }
        else if(selectedTopping=='Mushrooms'){
            toppingPrice = 25;
        }
        else if(selectedTopping=='Sausage'){
            toppingPrice = 30;
        }
        else if(selectedTopping=='Onions'){
            toppingPrice = 15;
        }
        else if(selectedTopping=='Extra cheese'){
            toppingPrice = 35;
        }
        else if(selectedTopping=='Black olives'){
            toppingPrice = 45;
        }
        else if(selectedTopping=='Green peppers'){
            toppingPrice = 10;
        }
        else if(selectedTopping=='Pineapple'){
            toppingPrice = 55;
        }
        else if(selectedTopping=='Spinach'){
            toppingPrice = 5;
        }
        pizza_topping = toppingPrice;
        console.log(toppingPrice);
    });
    $("#pizza_number").change(function(){
        var selectedNumber = $("#pizza_number").val();
        pieces = selectedPizzaNumber;
        console.log(pieces);

});
});
$(document).ready(function(){
    $("form").submit(function(){
        var pizza_sizePrice= $("#pizza_size").val();
        var pizza_crustPrice = $("#pizza_crust").val();
        var pizza_toppingPrice = $("#pizza_topping").val();

        alert(finalPrice+' thanks for order');
    });
});