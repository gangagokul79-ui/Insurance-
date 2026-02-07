function showText(id) {
    const allTexts = document.querySelectorAll('.solution-text');

    allTexts.forEach(text => {
        if (text.id === id) {
            if (text.style.display === "block") {
                text.style.display = "none";
            } else {
                text.style.display = "block";
            }
        } else {
            text.style.display = "none";
        }
    });
}