let carts = document.querySelectorAll(".add-cart");
let products = [{
        course: "FREE DIVING/ INTRODUCTION",
        price: 90,
        inCart: 0
    },

    {
        course: "FREE DIVING/ LEVEL 1",
        price: 325,
        inCart: 0
    },

    {
        course: "FREE DIVING/ LEVEL 2",
        price: 480,
        inCart: 0
    },

    {
        course: "WIND SURFING/ BEGINNERS COURSE",
        price: 60,
        inCart: 0
    },

    {
        course: "WIND SURFING/ INTERMEDIATE COURSE",
        price: 100,
        inCart: 0
    },

    {
        course: "RENT A WIND SURF",
        price: 35,
        inCart: 0
    },

    {
        course: "KAYAKING/ BEGINNERS COURSE",
        price: 200,
        inCart: 0
    },

    {
        course: "KAYAKING/ EXLORE",
        price: 100,
        inCart: 0
    },

    {
        course: "RENT A KAYAK",
        price: 40,
        inCart: 0
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.getElementsByClassName('.counter').textContent = productNumbers;
    }
}

function cartNumbers(products) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.counter').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.getElementsByClassName('.counter').textContent = 1;
    }

    setItems(products);
}

function setItems(products) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems !== null) {
        if (cartItems[products.course] == undefined) {
            cartItems = {
                ...cartItems,
                [products.course]: products
            }
        }
        cartItems[products.course].inCart += 1;
    } else {
        products.inCart = 1;

        cartItems = {
            [products.course]: products
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(products) {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + products.price);
    } else {
        localStorage.setItem('totalCost', products.price);
    }

}

function displayCart() {
    let cartItem = localStorage.getItem("productsInCart");
    cartItem = JSON.parse(cartItem);
    let productsContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItem);

    if (cartItem && productsContainer) {
        productsContainer.innerHTML = '';
        Object.values(cartItem).map(item => {
            productsContainer.innerHTML += `
            
        <div class="product">
           <span>COURSE: ${item.course}</span>
           <img src="./images/close.png" class="close">
        </div>

        <div class="price">PRICE: ${item.price},00EUR</div> 

        <div class="quantity">
          <img src="./images/arrow-left.png" class="decrease">
          <span> QUANTITY: ${item.inCart}</span>
          <img src="./images/arrow-right.png" class="increase">
        </div>

        <div class="total">
        TOTAL: ${item.inCart * item.price},00EUR
        </div>
        <br>
        `;
        });

        productsContainer.innerHTML += `
       <div class = "basketTotalContainer">
          <h4 class = "basketTotalTitel">
             BASKET TOTAL:
          </h4>
          <h4 class = "basketTotal">
             ${cartCost},00EUR
          </h4>
    `;
    }
}



onLoadCartNumbers();
displayCart();

