import React, { useState, useEffect } from "react";
import "./App.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
];

export function Slideshow() {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export function Header() {
  const [menu1, setMenu1] = useState("-100%");
  const [menu2, setMenu2] = useState("-100%");
  const [cover, setCover] = useState(0);
  return (
    <>
      <div className="cart" style={{ right: `${menu2}` }}>
        <h2>CART</h2>
        <div className="listCart">
          <div className="item">
            <img alt="" src="images/1.webp" />
            <div className="content">
              <div className="name">CoPilot / Black / Automatic</div>
              <div className="price">$550 / 1 product</div>
            </div>
            <div className="quantity">
              <button>-</button>
              <span className="value">3</span>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="buttons">
          <div
            className="close"
            onClick={() => {
              setMenu2("-100%");
              setCover(0);
            }}
          >
            CLOSE
          </div>
          <div className="checkout">
            <a href="checkout.html">CHECKOUT</a>
          </div>
        </div>
      </div>
      <div className="cover" style={{ opacity: `${cover}` }}></div>
      <div id="slide" style={{ right: `${menu1}` }}>
        <div
          id="return"
          onClick={() => {
            setMenu1("-100%");
            setCover(0);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path d="M20 0H0v20h20zm-7.354 14.166-1.389 1.439-5.737-5.529 5.729-5.657 1.4 1.424-4.267 4.215z" />
          </svg>
          <p>Back</p>
        </div>
        <div id="choice">
          <a href="menu.html">
            <p>Menu</p>
          </a>
          <a href="aboutus.html">
            <p>About us</p>
          </a>
          <a href="findus.html">
            <p>Find us</p>
          </a>
        </div>
      </div>
      <header>
        <nav>
          <div id="butt">
            <a href="index.html" id="logo_a">
              <div id="logo">
                <img id="logo_img" src="style/meal.png" alt="logo" />
                <h1>THE KITCHENETTE</h1>
              </div>
            </a>
            <div id="buttons">
              <div
                className="cart_ico"
                id="cart_ico"
                onClick={() => {
                  setMenu2("0px");
                  setCover(1);
                }}
              >
                <div className="totalQuantity">0</div>
                <h4>Cart</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.99999 20C9.46956 20 8.96085 19.7893 8.58578 19.4142C8.21071 19.0391 7.99999 18.5304 7.99999 18C7.99999 17.4696 8.21071 16.9609 8.58578 16.5858C8.96085 16.2107 9.46956 16 9.99999 16C10.5304 16 11.0391 16.2107 11.4142 16.5858C11.7893 16.9609 12 17.4696 12 18C12 18.5304 11.7893 19.0391 11.4142 19.4142C11.0391 19.7893 10.5304 20 9.99999 20ZM17 20C16.4696 20 15.9609 19.7893 15.5858 19.4142C15.2107 19.0391 15 18.5304 15 18C15 17.4696 15.2107 16.9609 15.5858 16.5858C15.9609 16.2107 16.4696 16 17 16C17.5304 16 18.0391 16.2107 18.4142 16.5858C18.7893 16.9609 19 17.4696 19 18C19 18.5304 18.7893 19.0391 18.4142 19.4142C18.0391 19.7893 17.5304 20 17 20ZM3.96199 5.923C3.71236 5.91495 3.47563 5.81012 3.30189 5.63068C3.12815 5.45125 3.03101 5.21127 3.03101 4.9615C3.03101 4.71173 3.12815 4.47175 3.30189 4.29232C3.47563 4.11288 3.71236 4.00805 3.96199 4H5.11299C6.01499 4 6.79499 4.626 6.99099 5.506L8.24399 11.148C8.43999 12.028 9.21999 12.654 10.122 12.654H17.634L19.076 6.884H9.73099C9.4837 6.87272 9.25028 6.76654 9.07928 6.58755C8.90827 6.40857 8.81285 6.17055 8.81285 5.923C8.81285 5.67545 8.90827 5.43743 9.07928 5.25845C9.25028 5.07946 9.4837 4.97328 9.73099 4.962H19.076C19.3683 4.96191 19.6568 5.02848 19.9196 5.15663C20.1823 5.28479 20.4124 5.47116 20.5923 5.70158C20.7722 5.93201 20.8972 6.20041 20.9578 6.4864C21.0184 6.77238 21.013 7.06842 20.942 7.352L19.5 13.12C19.396 13.5362 19.1559 13.9057 18.8178 14.1697C18.4797 14.4337 18.063 14.5771 17.634 14.577H10.122C9.24679 14.5771 8.39772 14.2787 7.71501 13.7311C7.0323 13.1835 6.55678 12.4194 6.36699 11.565L5.11299 5.923H3.96199Z"
                    fill="url(#paint0_linear_80_10)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_80_10"
                      x1="12.0153"
                      y1="4"
                      x2="12.0153"
                      y2="20"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FBDF4E" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="menu"
                id="menu"
                onClick={() => {
                  setMenu1("0px");
                  setCover(1);
                }}
              >
                <h4>Menu</h4>
                <div>
                  <span id="one"></span>
                  <span id="two"></span>
                  <span id="three"></span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <h1>
          <span>THE</span>
          <span>KITCHENETTE</span>
        </h1>
        <img id="timisoara" alt="capitala_culturii" src="style/timisoara.png" />
      </header>
    </>
  );
}

export function PreLoader() {
  const [loading, setLoading] = useState(1);

  useEffect(() => {
    setTimeout(() => setLoading(0), 3000);
  }, []);
  return (
    <>
      <div
        id="preloader"
        className="preloader"
        style={{ opacity: `${loading}` }}
      >
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export function Main() {
  var i = 0;
  var j = 0;
  var txt = "Satisfy your cravings,";
  var txt2 = "without sacrificing your finances";
  var speed = 80;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("text").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    setTimeout(typeWriter2, 2000);
  }

  function typeWriter2() {
    if (j < txt2.length) {
      document.getElementById("text2").innerHTML += txt2.charAt(j);
      j++;
      setTimeout(typeWriter, speed);
    }
  }
  const [winScroll, setWinScroll] = useState(0);
  const [arrowVisible, setArrowVisible] = useState(false);
  const [once, setOnce] = useState(false);
  const [cover, setCover] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setWinScroll(
        window.pageYOffset ||
          document.body.scrollTop ||
          document.documentElement.scrollTop
      );

      if (winScroll > 399 && !arrowVisible) {
        setArrowVisible(true);

        document.getElementById("further_h1").animate(
          [
            { opacity: 1, transform: "scale(1)" },
            { opacity: 0, transform: "scale(1.5)" },
          ],
          {
            delay: 700,
            duration: 1000,
            easing: "ease-in-out",
            fill: "forwards",
          }
        );

        if (!once) {
          document.getElementById("section_1_svg").animate(
            [
              { opacity: 0, transform: "translateX(0%)" },
              { opacity: 1, transform: "translateX(90%)" },
            ],
            {
              delay: 500,
              duration: 1000,
              easing: "cubic-bezier(0,.94,.42,.99)",
              fill: "forwards",
            }
          );

          document.getElementById("section_1_img").animate(
            [
              { opacity: 0, transform: "translateX(0%)" },
              { opacity: 1, transform: "translateX(130%)" },
            ],
            {
              delay: 1000,
              duration: 1000,
              easing: "cubic-bezier(0,.94,.42,.99)",
              fill: "forwards",
            }
          );

          typeWriter();
          setOnce(true);
        }
      } else if (winScroll <= 399 && arrowVisible) {
        setArrowVisible(false);

        document.getElementById("further_h1").animate(
          [
            { opacity: 0, transform: "scale(1.5)" },
            { opacity: 1, transform: "scale(1)" },
          ],
          {
            delay: 700,
            duration: 1000,
            easing: "ease-in-out",
            fill: "forwards",
          }
        );
      }
    };

    if (winScroll > 799) {
      document.getElementById("block").animate(
        {
          opacity: [1, 0], // Animate opacity from 0 to 1
          transform: ["rotateX(90deg)"],
        },
        {
          delay: 1000,
          duration: 1000,
          easing: "cubic-bezier(0,.94,.42,.99)",
          fill: "forwards",
        }
      );
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [winScroll, arrowVisible, once]);

  return (
    <main>
      <div id="further">
        <div className="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="100"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              id="arr_1"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.372322 0.425541C0.868751 -0.141847 1.67362 -0.141847 2.17005 0.425541L25 26.5188L47.8299 0.425541C48.3264 -0.141847 49.1312 -0.141847 49.6277 0.425541C50.1241 0.992929 50.1241 1.91285 49.6277 2.48023L25 30.6282L0.372322 2.48023C-0.124107 1.91285 -0.124107 0.992929 0.372322 0.425541Z"
              fill="black"
            />
            <path
              id="arr_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.372322 19.7974C0.868751 19.23 1.67362 19.23 2.17005 19.7974L25 45.8906L47.8299 19.7974C48.3264 19.23 49.1312 19.23 49.6277 19.7974C50.1241 20.3648 50.1241 21.2847 49.6277 21.8521L25 50L0.372322 21.8521C-0.124107 21.2847 -0.124107 20.3648 0.372322 19.7974Z"
              fill="black"
            />
          </svg>
        </div>
        <h1 id="further_h1">Further Down</h1>
        <div className="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="100"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              id="arr_1"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.372322 0.425541C0.868751 -0.141847 1.67362 -0.141847 2.17005 0.425541L25 26.5188L47.8299 0.425541C48.3264 -0.141847 49.1312 -0.141847 49.6277 0.425541C50.1241 0.992929 50.1241 1.91285 49.6277 2.48023L25 30.6282L0.372322 2.48023C-0.124107 1.91285 -0.124107 0.992929 0.372322 0.425541Z"
              fill="black"
            />
            <path
              id="arr_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.372322 19.7974C0.868751 19.23 1.67362 19.23 2.17005 19.7974L25 45.8906L47.8299 19.7974C48.3264 19.23 49.1312 19.23 49.6277 19.7974C50.1241 20.3648 50.1241 21.2847 49.6277 21.8521L25 50L0.372322 21.8521C-0.124107 21.2847 -0.124107 20.3648 0.372322 19.7974Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div id="s1">
        <div id="section_1">
          <div id="section_1_svg"></div>
          <div id="section_1_img"></div>
        </div>
        <div id="section_1_text">
          <p id="text"></p>
          <p id="text2"></p>
        </div>
      </div>

      <div id="s2">
        <div id="block"></div>
        <h2>PROMO</h2>
        <p>
          NO TRANSPORT FEES <br />
          for every order that contains a FULL MEAL
        </p>
      </div>

      <h1 id="h1_under_promo">Discover our favorites</h1>

      <button
        className="cssbuttons-io-button"
        onClick={() => (window.location.href = "menu.html")}
      >
        {" "}
        Take me to the menu
        <div className="i">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            ></path>
          </svg>
        </div>
      </button>
    </main>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="icons">
        <div id="logo">
          <img id="logo_img" src="style/meal.png" alt="logo" />
          <h1>THE KITCHENETTE</h1>
        </div>
        <div id="foot_ico">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M17.812 5.51711H6.145C3.855 5.51711 2 7.35211 2 9.61611V15.3841C2 17.6481 3.856 19.4841 6.145 19.4841H17.812C20.102 19.4841 21.957 17.6481 21.957 15.3841V9.61611C21.957 7.35211 20.101 5.51611 17.812 5.51611V5.51711ZM15.009 12.7801L9.552 15.3551C9.51872 15.3711 9.48192 15.3785 9.44503 15.3765C9.40815 15.3744 9.37237 15.3631 9.34103 15.3436C9.3097 15.324 9.28382 15.2968 9.2658 15.2646C9.24779 15.2323 9.23822 15.1961 9.238 15.1591V9.85011C9.23867 9.81299 9.24872 9.77663 9.26722 9.74444C9.28573 9.71224 9.31208 9.68526 9.34382 9.66599C9.37556 9.64673 9.41167 9.63581 9.44877 9.63425C9.48587 9.6327 9.52276 9.64057 9.556 9.65711L15.014 12.3921C15.0504 12.4102 15.0809 12.4383 15.102 12.4729C15.1232 12.5076 15.1341 12.5476 15.1336 12.5882C15.1331 12.6288 15.1211 12.6685 15.0991 12.7026C15.077 12.7367 15.0458 12.7639 15.009 12.7811V12.7801Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M9.04598 6.365V9.113H7.03198V12.473H9.04598V22.459H13.18V12.474H15.955C15.955 12.474 16.215 10.863 16.341 9.101H13.197V6.803C13.197 6.46 13.647 5.998 14.093 5.998H16.347V2.5H13.283C8.94298 2.5 9.04598 5.863 9.04598 6.365Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M22 6.40692C21.2504 6.7343 20.4565 6.94896 19.644 7.04392C20.4968 6.54315 21.138 5.74903 21.448 4.80992C20.64 5.28025 19.7587 5.61152 18.841 5.78992C18.4545 5.38513 17.9897 5.06331 17.4748 4.8441C16.9598 4.62489 16.4056 4.51289 15.846 4.51492C13.58 4.51492 11.743 6.32492 11.743 8.55492C11.743 8.87092 11.779 9.17992 11.849 9.47492C10.2236 9.39761 8.63212 8.98233 7.17617 8.25556C5.72022 7.52879 4.43176 6.5065 3.393 5.25392C3.02883 5.86832 2.83742 6.5697 2.839 7.28392C2.8397 7.95189 3.00683 8.60915 3.32529 9.19631C3.64375 9.78348 4.1035 10.282 4.663 10.6469C4.01248 10.6259 3.37602 10.4522 2.805 10.1399V10.1899C2.805 12.1479 4.22 13.7809 6.095 14.1529C5.74261 14.2464 5.37958 14.2938 5.015 14.2939C4.75 14.2939 4.493 14.2689 4.242 14.2189C4.51008 15.0268 5.02311 15.7312 5.70982 16.2343C6.39653 16.7373 7.22284 17.014 8.074 17.0259C6.61407 18.1505 4.82182 18.758 2.979 18.7529C2.647 18.7529 2.321 18.7329 2 18.6969C3.88125 19.8876 6.06259 20.5182 8.289 20.5149C15.836 20.5149 19.962 14.3579 19.962 9.01892L19.948 8.49592C20.7529 7.92959 21.4481 7.22177 22 6.40692Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M16.017 2.5H7.947C6.37015 2.50185 4.85844 3.12914 3.74353 4.24424C2.62862 5.35933 2.00159 6.87115 2 8.448L2 16.518C2.00185 18.0948 2.62914 19.6066 3.74424 20.7215C4.85933 21.8364 6.37115 22.4634 7.948 22.465H16.018C17.5948 22.4631 19.1066 21.8359 20.2215 20.7208C21.3364 19.6057 21.9634 18.0938 21.965 16.517V8.447C21.9631 6.87015 21.3359 5.35844 20.2208 4.24353C19.1057 3.12862 17.5938 2.50159 16.017 2.5V2.5ZM19.957 16.517C19.957 17.0344 19.8551 17.5468 19.6571 18.0248C19.4591 18.5028 19.1689 18.9371 18.803 19.303C18.4371 19.6689 18.0028 19.9591 17.5248 20.1571C17.0468 20.3551 16.5344 20.457 16.017 20.457H7.947C6.90222 20.4567 5.90032 20.0415 5.16165 19.3026C4.42297 18.5638 4.008 17.5618 4.008 16.517V8.447C4.00827 7.40222 4.42349 6.40032 5.16235 5.66165C5.90122 4.92297 6.90322 4.508 7.948 4.508H16.018C17.0628 4.50827 18.0647 4.92349 18.8034 5.66235C19.542 6.40122 19.957 7.40322 19.957 8.448V16.518V16.517Z"
              fill="white"
            />
            <path
              d="M11.982 7.31909C10.6134 7.32121 9.30154 7.86588 8.33391 8.8337C7.36627 9.80152 6.82186 11.1135 6.82001 12.4821C6.82159 13.851 7.36603 15.1634 8.33391 16.1315C9.30179 17.0996 10.6141 17.6442 11.983 17.6461C13.3521 17.6445 14.6647 17.0999 15.6328 16.1318C16.6008 15.1637 17.1454 13.8512 17.147 12.4821C17.1449 11.1132 16.5999 9.80098 15.6317 8.83329C14.6634 7.8656 13.3509 7.32141 11.982 7.32009V7.31909ZM11.982 15.6381C11.1452 15.6381 10.3428 15.3057 9.75109 14.714C9.15941 14.1223 8.82701 13.3198 8.82701 12.4831C8.82701 11.6463 9.15941 10.8438 9.75109 10.2522C10.3428 9.66049 11.1452 9.32809 11.982 9.32809C12.8188 9.32809 13.6213 9.66049 14.2129 10.2522C14.8046 10.8438 15.137 11.6463 15.137 12.4831C15.137 13.3198 14.8046 14.1223 14.2129 14.714C13.6213 15.3057 12.8188 15.6381 11.982 15.6381Z"
              fill="white"
            />
            <path
              d="M17.156 8.59509C17.8392 8.59509 18.393 8.04127 18.393 7.35809C18.393 6.67492 17.8392 6.12109 17.156 6.12109C16.4728 6.12109 15.919 6.67492 15.919 7.35809C15.919 8.04127 16.4728 8.59509 17.156 8.59509Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M21.959 14.2189V21.5979H17.681V14.7129C17.681 12.9829 17.062 11.8029 15.514 11.8029C14.332 11.8029 13.628 12.5989 13.319 13.3679C13.206 13.6429 13.177 14.0259 13.177 14.4109V21.5979H8.897C8.897 21.5979 8.955 9.93788 8.897 8.72888H13.177V10.5529L13.149 10.5949H13.177V10.5529C13.745 9.67788 14.76 8.42688 17.033 8.42688C19.848 8.42688 21.959 10.2669 21.959 14.2189ZM4.421 2.52588C2.958 2.52588 2 3.48588 2 4.74888C2 5.98388 2.93 6.97288 4.365 6.97288H4.393C5.886 6.97288 6.813 5.98388 6.813 4.74888C6.787 3.48588 5.887 2.52588 4.422 2.52588H4.421ZM2.254 21.5979H6.532V8.72888H2.254V21.5979Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="line"></div>
      <div className="icons" id="fot_bot">
        <div className="copy">
          <p>Copyright Your Mother @ 2024. All rights reserved.</p>
        </div>
        <div className="copy">
          <p>+40 722 123 456</p>
          <p>
            <a href="google.com">Street Gheorghe Lazar</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
