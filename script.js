document.addEventListener("DOMContentLoaded", () => {
  createGrid(16);

  const gridSizeInput = document.querySelector('#grid');
  const sizeValue = document.querySelector('#sizeValue');

//   // Update the grid when the range slider changes
//   gridSizeInput.addEventListener('input', () => {
//     const size = gridSizeInput.value;
//     sizeValue.textContent = size;  // Display the current size value
//     reset(size);                   // Reset the grid with the new size
//   });
// });

gridSizeInput.addEventListener('input', ()=>{
  const size = gridSizeInput.value;
  sizeValue.innerText= `${size }x ${ size}`;
  reset(size);
});
})




const createGrid = (size) => {
  const container = document.querySelector('.container');
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const divsNumber = size * size;
  for (let i = 0; i < divsNumber; i++) {
    const div = document.createElement('div');
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