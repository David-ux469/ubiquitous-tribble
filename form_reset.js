document.querySelectorAll("input, textarea").forEach(input => {
    input.addEventListener("input", () => {
        setTimeout(() => {
            input.value = "";
        }, 200);
    });
});
