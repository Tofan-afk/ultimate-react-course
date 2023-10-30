var once = false;

        var j = 0;
        var txt = 'Satisfy your cravings,';
        var txt2 = 'without sacrificing your finances';
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

        window.onscroll = function () {
            var winScroll = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
            var arrows = document.getElementsByClassName("arrow"); // Assuming your arrow elements have the class "arrow"

            for (let i = 0; i < arrows.length; i++) {
                if (winScroll > 399 && !arrows[i].classList.contains("arrow_vanish")) {
                    arrows[i].classList.add("arrow_vanish");
                    document.getElementById('further_h1').animate(
                        {
                            opacity: [1, 0], // Animate opacity from 1 to 0
                            transform: ['scale(1)', 'scale(1.5)'], // Animate scaling from 1 to 0.5
                        },
                        {
                            delay: 700,
                            duration: 1000, // Animation duration in milliseconds
                            easing: 'ease-in-out', // Animation easing function
                            fill: 'forwards', // Maintain the final state after animation
                        }
                    );
                    if (!once) {
                        document.getElementById('section_1_svg').animate(
                            {
                                opacity: [0, 1], // Animate opacity from 0 to 1
                                transform: ['translateX(0%)', 'translateX(90%)'],
                            },
                            {
                                delay: 500,
                                duration: 1000,
                                easing: 'cubic-bezier(0,.94,.42,.99)',
                                fill: 'forwards',
                            }
                        );

                        document.getElementById('section_1_img').animate(
                            {
                                opacity: [0, 1], // Animate opacity from 0 to 1
                                transform: ['translateX(0%)', 'translateX(130%)'],
                            },
                            {
                                delay: 1000,
                                duration: 1000,
                                easing: 'cubic-bezier(0,.94,.42,.99)',
                                fill: 'forwards',
                            }
                        );
                        typeWriter();
                        once = true;
                    }
                }
                else if (winScroll <= 399 && arrows[i].classList.contains("arrow_vanish")) {
                    arrows[i].classList.remove("arrow_vanish");
                    document.getElementById('further_h1').animate(
                        {
                            opacity: [0, 1], // Animate opacity from 1 to 0
                            transform: ['scale(1.5)', 'scale(1)'], // Animate scaling from 1 to 0.5
                        },
                        {
                            delay: 700,
                            duration: 1000, // Animation duration in milliseconds
                            easing: 'ease-in-out', // Animation easing function
                            fill: 'forwards', // Maintain the final state after animation
                        }
                    );
                }
            }
            if (winScroll > 799) {
                document.getElementById('block').animate(
                    {
                        opacity: [1, 0], // Animate opacity from 0 to 1
                        transform: ['rotateX(90deg)'],
                    },
                    {
                        delay: 1000,
                        duration: 1000,
                        easing: 'cubic-bezier(0,.94,.42,.99)',
                        fill: 'forwards',
                    }
                );
            }
        };