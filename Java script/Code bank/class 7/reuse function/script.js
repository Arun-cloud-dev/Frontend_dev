function calculateRectangleArea(width, height) {
    
    return width * height;
}



function calculateArea() {

    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const area = calculateRectangleArea(width, height);
    document.getElementById("result").textContent = `Area: ${area}`;
}