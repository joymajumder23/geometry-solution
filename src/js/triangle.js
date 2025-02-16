function calculateTriangleArea() { 
    const triArea = document.getElementById('tri-area'); 
    const triBase = document.getElementById('triBase');
    const triBaseValue = triBase.value; 
    const triHeight = document.getElementById('triHeight'); 
    const triHeightValue = triHeight.value; 
    const triCalculate = 0.5 * triBaseValue * triHeightValue; 
    triArea.innerText = triCalculate;
    
}