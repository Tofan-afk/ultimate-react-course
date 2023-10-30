document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  // Simulate loading process (you can replace this with actual loading logic)
  setTimeout(function () {
    preloader.classList.add("fade-out");
    document.body.style.overflowY = "auto";
    footerchange();
  }, 4000); // Adjust the time according to your needs
});

var menu = document.getElementById("menu");
var slide = document.getElementById("slide");
var cover = document.querySelector(".cover");
var back = document.getElementById("return");
var arrows = document.querySelectorAll(".arrow");
var iconCart = document.querySelector(".cart_ico");
var cart = document.querySelector(".cart");
var close = document.querySelector(".close");
var ret = document.getElementById("return");

document.getElementsByClassName("cover_on").onclick = function () {
  if (slide.classList.contains("active")) slide.classList.toggle("slide_on");
};

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

iconCart.addEventListener("click", function () {
  cart.style.right = "0";
  for (let i = 0; i < cover.length; i++) cover[i].classList.toggle("cover_on");
});

menu.addEventListener("click", function () {
  slide.style.right = "0";
  for (let i = 0; i < cover.length; i++) cover[i].classList.toggle("cover_on");
});

ret.addEventListener("click", function () {
  slide.style.right = "-100%";
  for (let i = 0; i < cover.length; i++) cover[i].classList.toggle("cover_on");
});

close.addEventListener("click", function () {
  cart.style.right = "-100%";
  for (let i = 0; i < cover.length; i++) cover[i].classList.toggle("cover_on");
});

function footerchange() {
  document.getElementById("fot_bot").innerHTML = "";
  document.getElementById("fot_bot").innerHTML = `<div class="copy">
        <p>Copyright The Kitchenette @ 2024. All rights reserved.</p>
    </div><div class="copy">
        <p>+40 722 123 456</p>
        <p><a href="https://www.google.com/maps/place/The+Kitchenette/@22.5474839,88.3592536,21z/data=!4m6!3m5!1s0x3a027732c69efbd7:0x3c0d5621e200340e!8m2!3d22.5475042!4d88.3594417!16s%2Fg%2F11h9387nb2?entry=ttu">8th Floor, Shubham Building, 1, Rawdon St, Mullick Bazar, Park Street area</a></p>
    </div>`;
}
