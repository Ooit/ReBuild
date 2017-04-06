(function () {
    function showButton() {

        var scrollButton = document.getElementById("scroll_top"),
        pageTop = document.getElementById("top"),
        minYShowButton = 503,
        minXShowButton = 767,
        pageYPosition = window.pageYOffset,
        pageWidth = window.innerWidth,
        state = false;

        if ((pageYPosition >= minYShowButton) && state == false) {
            state = true;
        }
        else if ((pageYPosition <= minYShowButton) && state == true) {
            state = false;
        }

        if (state == true) {
            scrollButton.classList.remove("fade_out");
            scrollButton.classList.add("fade_in");
        }

        else if (state == false) {
            scrollButton.classList.remove("fade_in");
            scrollButton.classList.add("fade_out");
        }
    }
    window.addEventListener("scroll", showButton, false);
})();

(function () {
    function fath() {
        alert("hey");
    }
    document.getElementById("scroll_top").addEventListener("click", fath, false);
});
