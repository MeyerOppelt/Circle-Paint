"use strict";
console.log("TypeScript is running. Timestamp:", new Date().toISOString());
// Canvas and drawing variables
let canvas;
let ctx;
let circleNumber = 2500;
function drawCircles() {
    if (!ctx || !canvas)
        return;
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < circleNumber; i++) {
        // random radius between 5 and 50
        const r = Math.random() * 120 + 10;
        // allow circles to escape page edges
        const x = Math.random() * (canvas.width + 2 * r) - r;
        const y = Math.random() * (canvas.height + 2 * r) - r;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        // random color
        ctx.fillStyle = `hsl(${Math.random() * 360}, 70%, 50%)`;
        ctx.fill();
        ctx.strokeStyle = "rgba(0,0,0,0.25)";
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}
// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    canvas = document.getElementById("paintCanvas");
    if (!canvas) {
        console.error("Canvas element not found!");
        return;
    }
    const context = canvas.getContext("2d");
    if (!context) {
        console.error("Canvas context not available!");
        return;
    }
    ctx = context;
    // Set canvas dimensions larger than viewport to allow edge overflow
    const maxRadius = 400;
    canvas.width = window.innerWidth + 2 * maxRadius;
    canvas.height = window.innerHeight + 2 * maxRadius;
    // Set CSS dimensions to match drawing dimensions
    canvas.style.width = `${canvas.width}px`;
    canvas.style.height = `${canvas.height}px`;
    drawCircles();
});
