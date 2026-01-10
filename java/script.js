// This event listener waits for the user to scroll their mouse or screen
window.addEventListener('scroll', function() {
    
    // We get the current scroll position (how many pixels from the top)
    var pixelsFromTop = window.pageYOffset;

    // We select the 4 words from our HTML by their IDs
    var word1 = document.getElementById("word-dev");
    var word2 = document.getElementById("word-impl");
    var word3 = document.getElementById("word-supp");
    var word4 = document.getElementById("word-staff");

    // We select the main title to fade it out
    var mainTitle = document.getElementById("main-title-text");

    // TRIGGER POINT: 100 pixels
    // If the user scrolls down more than 100px, we move the words
    if (pixelsFromTop > 100) {
        word1.classList.add("active-move");
        word2.classList.add("active-move");
        word3.classList.add("active-move");
        word4.classList.add("active-move");
    } 
    // If the user scrolls back to the top (less than 100px), we hide them
    else {
        word1.classList.remove("active-move");
        word2.classList.remove("active-move");
        word3.classList.remove("active-move");
        word4.classList.remove("active-move");
    }

    // TITLE FADE LOGIC:
    // As you scroll deeper, the title gets more transparent
    if (pixelsFromTop > 400) {
        mainTitle.style.opacity = "0.2";
    } else {
        mainTitle.style.opacity = "1";
    }
});