let spanBtn = document.querySelectorAll(".button span");
let lastClicked = null;
spanBtn.forEach(element => {
    element.addEventListener("click",()=>{
        if (lastClicked && lastClicked !== element) {
            // Reset the last clicked element
            lastClicked.style.background = "white";
            lastClicked.style.color = "black";
            lastClicked.style.opacity = "1";
        }

        // Style the current clicked element
        element.style.color = "white";
        element.style.opacity = "0.7";
        element.style.background = "rgb(15, 22, 49)";

        // Update the last clicked to current element
        lastClicked = element;

    })
});

// Select all elements with class 'imgno'
let imgnoElements = document.querySelectorAll(".imgno");

// Create the span that will contain the SVG
let svgSpan = document.createElement('span');
svgSpan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
<path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" />
<circle cx="16.5" cy="7.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
<path d="M16 22C15.3805 19.7749 13.9345 17.7821 11.8765 16.3342C9.65761 14.7729 6.87163 13.9466 4.01569 14.0027C3.67658 14.0019 3.33776 14.0127 3 14.0351" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
<path d="M13 18C14.7015 16.6733 16.5345 15.9928 18.3862 16.0001C19.4362 15.999 20.4812 16.2216 21.5 16.6617" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>`;

// Append a clone of svgSpan to each imgno element
imgnoElements.forEach(function(imgno) {
    imgno.prepend(svgSpan.cloneNode(true));
});
