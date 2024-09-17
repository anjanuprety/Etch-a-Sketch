const square= document.querySelector('.container')
for(let i=0; i<16; i++){
  for(let j=0; j<16; j++){
    const div= document.createElement('div');
    div.classList.add('grid');
    div.style.flex="0 0 60px";
    div.style.border=' 1px solid black'
    square.appendChild(div);
  }
}