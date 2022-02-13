let r=255;
let g=255;
let b=255;
let colorBack = `rgb(${r},${g},${b})`;
window.addEventListener('keydown', function(event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"

switch (event.key) {
    case "ArrowLeft":
        break;
    case "ArrowRight":     
        break;

    case "ArrowUp":              
    if (r>245) {
        break
    }    
    else {
        r=r+10;
        g=g+10;
        b=b+10;
        colorBack = `rgb(${r},${g},${b})`;
        document.body.style.backgroundColor = colorBack;
    }
    console.log(r);
    

        break;
    case "ArrowDown":
        if (r<15) {
            break
        }    
        else {
            r=r-10;
            g=g-10;
            b=b-10;
            colorBack = `rgb(${r},${g},${b})`;
            document.body.style.backgroundColor = colorBack;
        }
        console.log(r);
        
        
        break;
}
});






