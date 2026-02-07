function showText(id) {
    const allTexts = document.querySelectorAll('.solution-text');

    allTexts.forEach(text => {
        if (text.id === id) {
            text.style.display =
                text.style.display === "block" ? "none" : "block";
        } else {
            text.style.display = "none";
        }
    });
}

function applyNow() {
    document.getElementById("applyMsg").style.display = "block";
}
