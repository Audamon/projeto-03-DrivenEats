let markedDish = null;
let dishPrice = null;

let markedBeverage = null;
let beveragePrice = null;

let markedDessert = null;
let dessertPrice = null;

function selectedDish(dish){
    const dishMark = document.querySelector(".category-dish > .selected-item");
    if(dishMark !== null){
        markedDish = null;
        dishPrice = null;
        dishMark.classList.remove("selected-item");
    }
    dish.classList.add("selected-item");
    markedDish = dish.querySelector(".dish-title > strong").innerHTML;
    dishPrice = dish.querySelector(".dish-price").innerHTML;

    buttonActivation();
}

function selectedBeverage(beverage){
    const beverageMark = document.querySelector(".category-beverage > .selected-item");
    if(beverageMark !== null){
        beverageMark.classList.remove("selected-item");
        markedBeverage = null;
        beveragePrice = null;
    }
    beverage.classList.add("selected-item");
    markedBeverage = beverage.querySelector(".dish-title > strong").innerHTML;
    beveragePrice = beverage.querySelector(".dish-price").innerHTML;
    buttonActivation();
}

function selectedDessert(dessert){
    const dessertMark = document.querySelector(".category-dessert > .selected-item");
    if(dessertMark !== null){
        dessertMark.classList.remove("selected-item");
        markedDessert = null;
        dessertPrice = null;
    }
    dessert.classList.add("selected-item");
    markedDessert = dessert.querySelector(".dish-title > strong").innerHTML;
    dessertPrice = dessert.querySelector(".dish-price").innerHTML;
    buttonActivation();
}

function buttonActivation(){
    if(markedDish !== null){
        if(markedDessert !== null){
            if( markedBeverage !== null){
                const buttonActived = document.querySelector(".retangulo-botao");
                const buttonText = document.querySelector(".texto-botao");
                buttonActived.classList.add("button-color");
                buttonText.innerHTML = "Fechar Pedido";
            }
        }
    }
}

function closeOrder(){
    
    const finalPrice = (Number.parseFloat(dishPrice.replace(/[^\d.-]/g, '')) + Number.parseFloat(beveragePrice.replace(/[^\d.-]/g, '')) + Number.parseFloat(dessertPrice.replace(/[^\d.-]/g, '')));
    let text = encodeURIComponent(`Olá, gostaria de fazer o pedido: \n - Prato: ${markedDish} \n - Bebida: ${markedBeverage} \n - Sobremesa: ${markedDessert} \n Total: R$ ${finalPrice.toFixed(2)} \n`);
    document.querySelector("a[href='https://wa.me/555496545412?text=']").setAttribute("href", `https://wa.me/555496545412?text=${text}`);
    console.log("Hyperlink Changed");
}