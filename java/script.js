window.onscroll = function() {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    var w1 = document.getElementById("word1");
    var w2 = document.getElementById("word2");
    var w3 = document.getElementById("word3");
    var w4 = document.getElementById("word4");
    var title = document.getElementById("center-title");

    // Start animation much earlier (at 20px)
    if (scrollPos > 20) {
        w1.classList.add("active");
        w2.classList.add("active");
        w3.classList.add("active");
        w4.classList.add("active");
        title.style.opacity = "0.2";
    } else {
        w1.classList.remove("active");
        w2.classList.remove("active");
        w3.classList.remove("active");
        w4.classList.remove("active");
        title.style.opacity = "1";
    }
};