var once = false;

window.onscroll = function () {
    var winScroll = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > 699){
        document.getElementById("form_title").animate(
            {
                transform: ['translateX(-120px)'], //returns to normal position
            },
            {
                delay: 0,
                duration: 2000, // Animation duration in milliseconds
                easing: 'ease', // Animation easing function
                fill: 'forwards', // Maintain the final state after animation
            }
        );
    }
}

const textToType = " a community of people passionate about the art of food and the joy it brings to our patrons. At The Kitchenette, our mission is clear: to offer delectable dishes that tantalize your taste buds without burdening your wallet. We believe that everyone should have the opportunity to savor exquisite flavors without breaking the bank. Our dedicated team of chefs, servers, and staff work tirelessly to create a warm, welcoming atmosphere that mirrors the comfort of your own home. We understand that dining out should be an experience that enriches your soul, not depletes your savings. With a focus on locally sourced ingredients and a commitment to sustainable practices, we strive to craft dishes that are both delightful and affordable. Our menu showcases a diverse range of culinary delights, from classic comfort foods to innovative, mouthwatering creations. But it's not just about the food. At The Kitchenette, we consider our customers as an extension of our family. Your satisfaction is our top priority, and we take pride in going the extra mile to ensure your dining experience is memorable. Join us at The Kitchenette and become a part of our community, where affordability meets exceptional taste, and where we genuinely care about delivering great dishes that won't empty your pockets. Your culinary adventure awaits!";
const typingSpeed = 5; // Adjust the typing speed (in milliseconds) here
const delayBeforeStart = 8000; // Delay before the typing starts (in milliseconds)

const typewriterText = document.getElementById("text");

let charIndex = 0;

function typeNextCharacter() {
    if (charIndex < textToType.length) {
        typewriterText.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeNextCharacter, typingSpeed);
    }
}

// Start the typewriter effect after a delay
setTimeout(typeNextCharacter, delayBeforeStart);

const scriptURL = "https://script.google.com/macros/s/AKfycbyChkDoUjUhgn_z-mbvP5Uw-Krjfz8pdbUfmFDj0b7Jl8VbuTFVf7Rl3KZ1rVLpbbin/exec"
        const form = document.forms["submit-to-google-sheet"]
        const msg = document.getElementById("msg");
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          fetch(scriptURL, { method: "POST", body: new FormData(form) })
            .then(response => {
              msg.innerHTML = "Thank you for your request!"
              setTimeout(function() {
                msg.innerHTML = ""
              }, 5000)
              form.reset();
            })
            .catch((error) => console.error("Error!", error.message));
        });