import pets from './pets.js';
import {getPet} from './modalWindow.js';

const btnLeft = document.querySelector('.friends-btn.left');
const btnRight = document.querySelector('.friends-btn.right');
const slider = document.querySelector('.slider');
let blockOne = document.querySelector('.pets__block.one');
let blockTwo = document.querySelector('.pets__block.two');
let blockThree = document.querySelector('.pets__block.three');
let arrPets = [];

const addquerySelectors = () => {
  const pet = [...document.querySelectorAll('.our-frends__content')];
  pet.forEach((el) => {el.addEventListener('click', getPet)});
}
  

const createRandomArr = () => { 
   while (arrPets.length < 3){
      let randomNum = Math.floor(Math.random() * 8);
      if(!arrPets.includes(randomNum)) {arrPets.push(randomNum)};
   }
  return arrPets;
}

const createNewRandomArr = () => {
   while (arrPets.length < 6){
      let randomNum = Math.floor(Math.random() * 8);
      if(!arrPets.includes(randomNum)) {arrPets.push(randomNum)};
   }
   arrPets.splice(0, 3);
   return arrPets;
}

const createBlock = (elem) => {
   createNewRandomArr();
   elem.innerHTML = '';
   for (let i = 0; i < arrPets.length; i++) {
     let petCard = document.createElement("div");

      petCard.className = `our-frends__content ${(pets[arrPets[i]].name)
                          .toLowerCase()}`;

                          petCard.innerHTML = `
			                    <img src="${pets[arrPets[i]].img}" alt="pet">
			                   	<p class="our-frends__name">${pets[arrPets[i]].name}</p>
				                  <button class="pets__button">Learn more</button>`;
           
      elem.append(petCard);
      }
 
addquerySelectors();
}

const createRandomomMainBlockPets = () => {
  createRandomArr();
  createBlock(blockTwo);
}
createRandomomMainBlockPets();

const moveLeft = () => {
  createBlock(blockOne);
  slider.classList.add('transition-left');
  btnLeft.addEventListener('click', moveLeft);
  btnRight.addEventListener('click', moveRight);
};

const moveRight = () => {
  createBlock(blockThree);
  slider.classList.add('transition-right');
  btnLeft.addEventListener('click', moveLeft);
  btnRight.addEventListener('click', moveRight);
};

slider.addEventListener('animationend', (event) => {
  if (event.animationName === 'move-left') {   
     slider.classList.remove('transition-left');
     document.querySelector('.pets__block.two').innerHTML = blockOne.innerHTML;  
     addquerySelectors();
  } else {
    slider.classList.remove('transition-right')
    document.querySelector('.pets__block.two').innerHTML = blockThree.innerHTML
    addquerySelectors();
  }   
});

const sliderSubscribe = () => {
  btnLeft.addEventListener('click', moveLeft);
  btnRight.addEventListener('click', moveRight);
}


export default sliderSubscribe;