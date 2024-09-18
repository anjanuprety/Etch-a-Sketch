document.addEventListener("DOMContentLoaded",()=>{
  createGrid(16);
})

const createGrid =(size)=>{
  const container= document.querySelector('.container');
  container.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows= `repeat(${size}, 1fr)`;

  const divsNumber= size*size;
    for(let i=0; i<divsNumber; i++){
      const div= document.createElement('div');
      div.style.backgroundColor= ("#D5C6C4");
      div.style.border=('solid 1px');
      container.appendChild(div)
    }
}

const getSize=()=>{
  
}