let listCart = [];
function checkCart(){
        var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
        if(cookieValue){
            listCart = JSON.parse(cookieValue.split('=')[1]);
        }
}
checkCart();
addCartToHTML();
function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has product in Cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price}/1 product</div>
                    </div>
                    <div class="quantity">
                    <button class="prod_butt" onclick="changeQuantity(${product.id}, '-')">-</button>
                    <span class="value">${product.quantity}</span>
                    <button class="prod_butt" onclick="changeQuantity(${product.id}, '+')">+</button>
                    </div>
                    <div class="returnPrice">$${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
}

function changeQuantity($idProduct, $type) {
    switch ($type) {
      case "+":
        listCart[$idProduct].quantity++;
        break;
      case "-":
        listCart[$idProduct].quantity--;
  
        // if quantity <= 0 then remove product in cart
        if (listCart[$idProduct].quantity <= 0) {
          delete listCart[$idProduct];
        }
        break;
  
      default:
        break;
    }
    // save new data in cookie
    document.cookie =
      "listCart=" +
      JSON.stringify(listCart) +
      "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
    // reload html view cart
    addCartToHTML();
  }