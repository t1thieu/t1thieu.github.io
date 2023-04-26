window.addEventListener("load", event => {

    // Fixed nav

    const mainNav = document.querySelector('.mainNav');

    window.onscroll = function () {
        if (window.pageYOffset >= 60) {
            mainNav.classList.add("fixed");
        } else {
            mainNav.classList.remove("fixed");
        }
    }

    // Open Menu Mobile
    const iconNav = document.querySelector('.mainNav__icon'),
        link = document.querySelectorAll('.mainNav__link');
    iconNav.addEventListener('click', openNavMobile);

    function openNavMobile() {
        if (mainNav.classList.contains('navOpen')) {
            mainNav.classList.remove('navOpen');
            document.querySelector('body').style.overflowY = "initial";
            if (window.innerWidth < 799) {
                setTimeout(() => {
                    document.querySelector('.mainNav .mainNav__wrapper').style.height = "auto";
                }, 600);
            }

        } else {
            mainNav.classList.add('navOpen');
            document.querySelector('body').style.overflowY = "hidden";
            if (window.innerWidth < 799) {
                document.querySelector('.mainNav.navOpen .mainNav__wrapper').style.height = window.innerHeight + "px";
            }
        }
    }

    if (window.innerWidth < 799) {
        link.forEach(function (el) {
            el.addEventListener("click", openNavMobile)
        });
    }

    ///////// Animate Modules //////////
    const card = document.querySelectorAll('.card');
    let delay = 1;


    const anime = (element, animation) => {
        if (element.offsetParent != null) {

            if (!element.classList.contains(animation)) {
                element.classList.add(animation);

                element.style.animationDelay = `${delay}` * 0.2 + "s";
                delay++;
            }
        }
    };

    const isInViewport = (element) => {
        var bounding = element.getBoundingClientRect();
        return (
            bounding.bottom >= 0 &&
            bounding.right >= 0 &&
            bounding.top <= document.documentElement.clientHeight &&
            bounding.left <= document.documentElement.clientWidth
        )
    };

    const isItemVisible = (element, animation) => {
        if (isInViewport(element)) {
            if (window.innerWidth >= 300) {
                anime(element, animation);
            }
        }
    };


    // for viewport
    const animeItem = (item, animation) => {
        item.forEach(item => {
            isItemVisible(item, animation);
        })
        delay = 1;
    };


    // for scroll
    window.addEventListener('scroll', () => {
        if (window.innerWidth >= 300) {
            animeItem(card, "anime");
        }

    });
    // to load the animations

    animeItem(card, "anime");


    /* Back to top */

    var toTop = document.getElementById("scrollme");

    toTop.addEventListener("click", function () {
        scrollToTop(600);
    });

    function scrollToTop(scrollDuration) {
        var scrollStep = -window.scrollY / (scrollDuration / 15),
            scrollInterval = setInterval(function () {
                if (window.scrollY != 0) {
                    window.scrollBy(0, scrollStep);
                } else clearInterval(scrollInterval);
        }, 15);

    }

    // Code của thư viện swiper Slider

    var mySwiper = new Swiper('.sliderHeading__slider.swiper-container', {
        effect: '',
        loop: false,
        speed: 1000,
        slidesPerView: 1,
        navigation: {
            nextEl: '.sliderHeading .swiper-button-next',
            prevEl: '.sliderHeading .swiper-button-prev'
        },
        pagination: {
            el: '.sliderHeading .swiper-pagination',
            type: 'bullets',
            clickable: 'true'
        },
        
        
        
    });
    
});