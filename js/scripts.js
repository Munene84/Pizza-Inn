var total=0;

function Pizza(size,crust,topping,number){
    this.size=size;
    this.crust=crust;
    this.topping=topping;
    this.number=number;
}


function checkout(size,crust,topping,number){

    switch (size){
        case ("small"):
            total=total+(500 *number);
            break;
        case ("medium"):
            total=total+(1000 *number)
            break;
        case ("large"):
            total=total+(1200 *number);
            break;
    }
    switch (crust){
        case ("crispy"):
            total=total+(90 *number);
            break;
        case ("stuffed"):
            total=total+(80 *number)
            break;
        case ("gluten-free"):
            total=total+(70 *number);
            break;
    }

    switch (topping){
        case ("peperoni"):
            total=total+(20 *number);
            break;
        case ("beef"):
            total=total+(50 *number)
            break;
        case ("bacon"):
            total=total+(40 *number);
            break;
        case ("Mushrooms"):
            total=total+(25 *number);
            break;
        case ("Sausage"):
            total=total+(30 *number);
            break;
        case ("Onions"):
            total=total+(15 *number);
            break;
        case ("Extra cheese"):
            total=total+(35 *number);
            break;
        case ("Black olives"):
            total=total+(45 *number);
            break;
        case ("Green peppers"):
            total=total+(10 *number);
            break;
        case ("Pineapple"):
            total=total+(55 *number);
            break;
        case ("Spinach"):
            total=total+(5 *number);
            break;
    }


}


$(document).ready(function(){


    $("#myForm").submit(function(e){

        e.preventDefault();
        var size = $("#pizza_size").val();
        var crust = $("#pizza_crust").val();
        var topping = $("#pizza_topping").val();
        var number = parseInt($("#pizza_number").val());

        var newPizza = new Pizza(size,crust,topping,number);
        checkout(size,crust,topping,number)
        
        alert(total);
        

    });

    

});