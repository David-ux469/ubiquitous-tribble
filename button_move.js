document.querySelector(".moving-button").addEventListener("mouseover", function () {
    const maxX = window.innerWidth - this.offsetWidth;
    const maxY = window.innerHeight - this.offsetHeight;
    this.style.left = Math.random() * maxX + "px";
    this.style.top = Math.random() * maxY + "px";
});
