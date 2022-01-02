document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fnDomContentLoaded) : fnDomContentLoaded();
function fnDomContentLoaded() {

    var oHamburgerBtn = document.getElementById('hamburger-button'),
        oMobMenuCloseBtn = document.getElementById('mob-menu-close-btn'),
        oMobMenu = document.getElementById('mob-menu');

    // Handle transition on load bug
    document.body.classList.remove('preload');
    
    // Nav
    oHamburgerBtn.addEventListener('click', function () {
        showMobMenu();
    });

    oMobMenuCloseBtn.addEventListener('click', function () {
        hideMobMenu();
    });

    function showMobMenu() {
        oMobMenu.classList.add('open');
        document.body.style.overflow = "hidden";
        document.addEventListener("touchmove", preventTouchMove, true);
    }

    function hideMobMenu() {
        oMobMenu.classList.remove('open');
        document.body.style.overflow = "auto";
        document.removeEventListener("touchmove", preventTouchMove, true);
    }
    
    var oaMobNavLinks = document.querySelectorAll('#mob-menu-content a');
    for (var i = 0; i < oaMobNavLinks.length; i++) {
        oaMobNavLinks[i].addEventListener('click', function (event) {
            hideMobMenu();
        });
    }  

    function preventTouchMove(oEvent) {
        oEvent.preventDefault();
    }

    // Slick
    if (window.jQuery) {
        $('.testimonials-carousel').slick({
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            responsive: [
                {
                    breakpoint: 1365,
                        settings: {
                        arrows: false,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                },
            ]
          });
    }
   
    
    // Scroll to
    var oaScrollToElements = document.querySelectorAll('[data-scroll-to]');
    for (var i = 0; i < oaScrollToElements.length; i++) {

        oaScrollToElements[i].addEventListener('click', function (event) {
            var oThis = event.currentTarget,
                sScrollToID = oThis.getAttribute('data-scroll-to'),
                oScrollTarget = document.getElementById(sScrollToID);

            if (oScrollTarget) {
                // Target is on this page, scroll to
                oScrollTarget.scrollIntoView({behavior: 'smooth', block: 'start'});
            } else {
                // Element is not on this page, go to element on homepage
                window.location.href = "./home.html#" + sScrollToID;
            }
           
        });

    }

}