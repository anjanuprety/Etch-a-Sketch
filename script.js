let colour = 'black';
let click= false;

document.addEventListener("DOMContentLoaded", () => {
  createGrid(16);

  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') {
      click = !click;
      let draw = document.querySelector('#draw');
      if(click){
        draw.innerHTML = ' You can now Sketch';
    }
    else{
        draw.innerHTML = 'Click to start drawing';
    }
    }
  })

  const gridSizeInput = document.querySelector('#grid');
  const sizeValue = document.querySelector('#sizeValue');

  gridSizeInput.addEventListener('input', () => {
    const size = gridSizeInput.value;
    sizeValue.innerText = `${size}x ${size}`;
    reset(size);
  });

  const colorPicker = document.querySelector('#pickColor');
  colorPicker.addEventListener('input', () => {
    colour = colorPicker.value;
  });
});

const createGrid = (size) => {
  const container = document.querySelector('.container');
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const divsNumber = size * size;
  for (let i = 0; i < divsNumber; i++) {
    const div = document.createElement('div');
    div.addEventListener('mouseover', colourDiv); // Correctly add the function reference
    div.style.backgroundColor = "#D5C6C4";
    div.style.border = '1px solid rgba(0, 0, 0, 0.1)';
    container.appendChild(div);
  }
};

const reset = (size) => {
  const container = document.querySelector('.container');
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  createGrid(size);
};

const colourDiv = (event) => {
  if (click === true){
    const targetDiv = event.target; // Use event.target to get the hovered div
    if (colour === 'Warm') {
      targetDiv.style.backgroundColor = `hsl(${Math.random() * (60 + (360 - 240)) + (Math.random() < 0.5 ? 0 : 240)}, 100%, 50%)`;
    } else if (colour === 'Cold') {
      targetDiv.style.backgroundColor = `hsl(${Math.random() * (240 - 120) + 120}, 100%, 50%)`;
    } else {
      targetDiv.style.backgroundColor = colour; // Use the selected color from the picker
    }
  }
 
};

const setColour = (userInput) => {
  colour = userInput;
};

const resetGrid=()=>{
  const divs = document.querySelectorAll('.container div');
  divs.forEach(div => {
    div.style.backgroundColor = "#D5C6C4";
  });
}