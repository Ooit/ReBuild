(function () {
    function scrollToTop() {

        var scrollButton = document.getElementById("scroll_top"),
        pageTop = document.getElementById("top"),
        minYShowButton = 503,
        minXShowButton = 767,
        pageYPosition = window.pageYOffset,
        pageWidth = window.innerWidth;

        if ((pageYPosition >= minYShowButton) && (pageWidth >= minXShowButton)) {
            scrollButton.classList.add("fade_in");
        }
        /*else {
            scrollButton.classList.add("fade_out");
        }*/
    }
    /*scrollButton.addEventListener("click", scrollToTop, false);*/
    window.addEventListener("scroll", scrollToTop, false);
})();
