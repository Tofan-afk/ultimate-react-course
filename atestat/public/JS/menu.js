//Circular Slider created and designed by QuickCodingTuts
// circular_slider gather DOM elements
const slider = document.querySelector(".circular-slider");
const image = document.querySelector(".slider .img");
const indicator = document.querySelector(".indicator");
const menuItems = document.querySelectorAll(".menu_s span");
const descriptions = document.querySelectorAll(".text");
var cards = document.querySelectorAll(".card");

//Rotation value each menu item
const rotationValues = [-58, -32, 0, 32, 58];

let i = 0;

// images
const images = ["img1.png", "img2.png", "img3.png", "img4.svg", "img5.svg"];

var array0 = null;
var array1 = null;
var array2 = null;
var array3 = null;
var array4 = null;
// current menu item index
let itemIndex = 2;
var products = null;
// get data from file .json
fetch("JS/product.json")
  .then((response) => response.json())
  .then((jsonObject) => {
    array0 = jsonObject.array0;
    array1 = jsonObject.array1;
    array2 = jsonObject.array2;
    array3 = jsonObject.array3;
    array4 = jsonObject.array4;
    products = array2;
    console.log(products);
    addDataToHTML();
  });

//Loop through each menu item
menuItems.forEach((menuItem, i) => {
  // add a click event to each menu item
  menuItem.addEventListener("click", () => {
    //add the image url to the image for each menu item
    image.style.backgroundImage = "url(style/" + images[i] + ")";
    /*Create the short counter-rotation
    before the actual rotation.
    If the menu item you click has a 
    greater index value than the previous one*/

    activeDetail = null;

    if (i > itemIndex) {
      //make the counter-rotation counter-clockwise
      rotate(rotationValues[itemIndex] - 10);
    } else if (i < itemIndex) {
      //make the counter-rotation clockwise
      rotate(rotationValues[itemIndex] + 10);
    } else {
      return "";
    }

    // wait for the counter-rotation to finnish
    setTimeout(() => {
      //rotate using the rotationValues Array
      //assign each array value to the corresponding menu item
      rotate(rotationValues[i]);
      /**/
    }, 300);

    switch (i) {
      case 0:
        products = array0;
        addDataToHTML();
        break;
      case 1:
        products = array1;
        addDataToHTML();
        break;
      case 2:
        products = array2;
        addDataToHTML();
        break;
      case 3:
        products = array3;
        addDataToHTML();
        break;
      case 4:
        products = array4;
        addDataToHTML();
        break;
    }

    //hide all descriptions
    descriptions.forEach((text) => {
      text.style.display = "none";
    });

    //show only the corresponding description
    descriptions[i].style.display = "block";
    descriptions[i].animate(
      {
        opacity: [0, 1], // Animate opacity from 0 to 1
      },
      {
        duration: 1000,
        fill: "forwards",
      }
    );

    //update the itemIndex variable to the current menu item index
    itemIndex = i;
  });
});

//function for rotating the slider
function rotate(rotationValue) {
  /*Rotate the image using the value we
            pass when this function is called*/
  indicator.style.transform = `rotate(${rotationValue}deg)`;
  /*Rotate the indicator using the value we
            pass when this function is called */
  indicator.style.transform = `translate(-50%, -50%) rotate(${rotationValue}deg)`;
}

//show data's product in list
function addDataToHTML() {
  // remove datas default from HTML
  let listProductHTML = document.querySelector(".flex-container");
  listProductHTML.innerHTML = "";

  // add new datas
  if (products != null) {
    // if has data
    products.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("card");
      newProduct.setAttribute(`data-product-id`, product.id);
      newProduct.innerHTML = `<div class="card-inner">
        <div class="card-front">
          <img src='${product.image}' alt='' class="smol_img" />
          <div class="description"><span id='name'>${product.name}</span><span id='price'>${product.price}$</span></div>
        </div>
        <div class="card-back">
          <h1>Nutritional Values</h1>
          <div id="nutritional_table">
              <div class="nutritional_table_content"><span>Calories</span><span>${product.calories}kcal</span></div>
              <div class="nutritional_table_content"><span>Fat</span><span>${product.fat}g</span></div>
              <div class="nutritional_table_content"><span>Carbohydrates</span><span>${product.carbs}g</span></div>
              <div class="nutritional_table_content"><span>Protein</span><span>${product.prot}g</span></div>
              <div class="nutritional_table_content"><span>Cholesterol</span><span>${product.choll}mg</span></div>
              <div class="nutritional_table_content"><span>Sodium</span><span>${product.sodium}mg</span></div>    
          </div>
          <div class="item_flex">
            <button class="item_button_1" onclick="addCart(${product.id})">Add To Cart</button>
            <button class="item_button_2" data-product-id="${product.id}">View Details</button>
          </div>
        </div>
      </div>`;

      let newDetail = document.createElement("div");
      newDetail.classList.add("details");
      newDetail.setAttribute(`data-product-id`, product.id);
      newDetail.innerHTML = 
      `<div class="flex-description">
      <div>
          <img src='${product.image}' alt='' class="smol_img_desc" />
          <p class="name_desc">${product.name}</p>
      </div>
      <div>
        <p>${product.details}</p>
        <button class="button" onclick="addCart(${product.id})">Add To Cart</button>
      </div>
      </div>`

      listProductHTML.appendChild(newProduct);
      listProductHTML.appendChild(newDetail);
    });
    let spin = document.querySelectorAll(".card");
    setTimeout(() => {
      for (let k = 0; k < spin.length; k++) {
        spin[k].style.transition = "transform 0.5s";
        spin[k].style.transform = "rotateY(0deg)";
      }
    }, 500);
  }
}

// Add a click event listener to the parent element (event delegation)
document.addEventListener("click", function (event) {
  // Check if the clicked element has the class "item_button_2"
  if (event.target.classList.contains("item_button_2")) {
    // This code will run when a "View Details" button is clicked
    description(event.target);
  }
});

let activeDetail = null; // Initialize a variable to keep track of the active detail div

function description(button) {
  // Get the data-product-id attribute from the clicked button
  var productId = button.getAttribute("data-product-id");
  // Find the corresponding "details" element with the same product ID
  let detailsElement = document.querySelector(
    `.details[data-product-id="${productId}"]`
  );
  let cardElements = document.querySelector(
    `.card[data-product-id="${productId}"]`
  );
  
  // Check if there's an active detail div, and if it's not the current one, hide it
  if (activeDetail && activeDetail !== detailsElement) {
    fade_out(activeDetail);
    activeDetail.style.display = "none";
    activeDetail.previousElementSibling.classList.remove("card_select");
  }

  if (detailsElement) {
    // Toggle the display of the current "details" element
    if (detailsElement.style.display === "block") {
      fade_out(detailsElement);
      detailsElement.style.display = "none";
      cardElements.classList.remove("card_select");
      activeDetail = null; // No active detail div
    } else {
      fade_out(cardElements);
      cardElements.classList.add("card_select");
      fade_in(cardElements);
      fade_in(detailsElement);
      detailsElement.style.display = "block";
      activeDetail = detailsElement; // Set the current detail div as active
      detailsElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
     });
    }
  }
}

function fade_in(element) {
  element.animate({
    opacity: [0, 1], // Animate opacity from 0 to 1
  },
  {
    duration: 500,
    fill: "forwards",
  });
};

function fade_out(element) {
  element.animate({
    opacity: [1, 0], // Animate opacity from 1 to 0
  },
  {
    duration: 500,
    fill: "forwards",
  });
};

let listCart = [];
function checkCart() {
  var cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("listCart="));
  if (cookieValue) {
    listCart = JSON.parse(cookieValue.split("=")[1]);
  } else {
    listCart = [];
  }
}
checkCart();
function addCart($idProduct) {
  let productsCopy = JSON.parse(JSON.stringify(products));
  //// If this product is not in the cart
  if (!listCart[$idProduct]) {
    listCart[$idProduct] = productsCopy.filter(
      (product) => product.id == $idProduct
    )[0];
    listCart[$idProduct].quantity = 1;
  } else {
    //If this product is already in the cart.
    //I just increased the quantity
    listCart[$idProduct].quantity++;
  }
  document.cookie =
    "listCart=" +
    JSON.stringify(listCart) +
    "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";

  addCartToHTML();
}
addCartToHTML();
function addCartToHTML() {
  // clear data default
  let listCartHTML = document.querySelector(".listCart");
  listCartHTML.innerHTML = "";

  let totalHTML = document.querySelector(".totalQuantity");
  let totalQuantity = 0;
  // if has product in Cart
  if (listCart) {
    listCart.forEach((product) => {
      if (product) {
        let newCart = document.createElement("div");
        newCart.classList.add("item");
        newCart.innerHTML = `<img src="${product.image}">
                    <div class="content">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price} / 1 product</div>
                    </div>
                    <div class="quantity">
                        <button class="prod_butt" onclick="changeQuantity(${product.id}, '-')">-</button>
                        <span class="value">${product.quantity}</span>
                        <button class="prod_butt" onclick="changeQuantity(${product.id}, '+')">+</button>
                    </div>`;
        listCartHTML.appendChild(newCart);
        totalQuantity = totalQuantity + product.quantity;
      }
    });
  }
  totalHTML.innerText = totalQuantity;
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
