import pets from './pets.js';
import {getPet} from './modalWindow.js';

const btnLeftInital = document.querySelector('.logo__btn.left.inital');
const btnLeftLast = document.querySelector('.logo__btn.left.last')
const btnRightInital = document.querySelector('.logo__btn.right.inital');
const btnRightLast = document.querySelector('.logo__btn.right.last');
const slider = document.querySelector('.slider');
let block = document.querySelector('.pets__block.one');
let pageNumber = document.querySelector('.logo__btn.active');
let count = 1;
let index = 0;
let arrPets = [];

const slidesPage = () => {
    if(window.innerWidth>1279) return 6;
    if(window.innerWidth<=1279 && window.innerWidth>767) return 8;
    if(window.innerWidth<768) return 16;
}

const addquerySelectors = () => {
  const pet = [...document.querySelectorAll('.our-frends__content')];
  pet.forEach((el) => {el.addEventListener('click', getPet)});
};

/////createRandomMatrix
for (let i = 0; i < 16; i++) {
  let arr = [];
  while (arr.length < 8) {
    let randomNum = Math.floor(Math.random() * 8);
    if(!arr.includes(randomNum)) {arr.push(randomNum)};
  };
  arrPets.push(arr);
};


const createBlock = (elem) => {
  elem.innerHTML = '';
  for (let i = 0; i < arrPets[index].length; i++) {
    let petCard = document.createElement("div");

    petCard.className = `our-frends__content ${(pets[arrPets[index][i]].name)
                        .toLowerCase()}`;

                        petCard.innerHTML = `
			                  <img src="${pets[arrPets[index][i]].img}" alt="pet">
			                  <p class="our-frends__name">${pets[arrPets[index][i]].name}</p>
				                <button class="pets__button">Learn more</button>`;

    elem.append(petCard);
  };
addquerySelectors();
};


const createRandomomMainBlockPets = () => {
  createBlock(block);
}
createRandomomMainBlockPets();


const moveLeft = () => { 
    index--;
    createBlock(block);
  document.querySelector('.pets__block.one').innerHTML = block.innerHTML;
  slider.classList.add('transition-left');
  btnLeftInital.addEventListener('click', moveLeft);
  if (slidesPage() === 16)
    if (count > 1 && count < 17) {
     pageNumber.innerHTML = count - 1; 
     btnRightInital.disabled = false;
     btnRightLast.disabled = false;
   } 
   if (slidesPage() === 8)
    if (count > 1 && count < 9) {
     pageNumber.innerHTML = count - 1; 
     btnRightInital.disabled = false;
     btnRightLast.disabled = false;
   } 
    if (slidesPage() === 6)
    if (count > 1 && count < 7) {
     pageNumber.innerHTML = count - 1; 
     btnRightInital.disabled = false;
     btnRightLast.disabled = false;
   } 

   if (count === 2) {
     btnLeftInital.disabled = true;
     btnLeftLast.disabled = true;
   }
  
  count--;
}

const moveLeftLast = () => {

  index = 0
  createBlock(block);
  pageNumber.innerHTML = 1;
  slider.classList.add('transition-left');
  btnLeftLast.addEventListener('click', moveLeftLast)

  btnLeftLast.disabled = true;
  btnLeftInital.disabled = true;
  btnRightInital.disabled = false;
  btnRightLast.disabled = false;
 
  count = 1
}

const moveRightLast = () => {
  
  slider.classList.add('transition-right');
  btnRightLast.addEventListener('click', moveRightLast)
  if (slidesPage() === 6) {
  index = 5;
  createBlock(block);
  pageNumber.innerHTML = 6;
  btnRightInital.disabled = true;
  btnRightLast.disabled = true;
  btnLeftInital.disabled = false;
  btnLeftLast.disabled = false;
  count = 6;
  }
  if (slidesPage() === 8) {
  index = 7;
  createBlock(block);
  pageNumber.innerHTML = 8;
  btnRightInital.disabled = true;
  btnRightLast.disabled = true;
  btnLeftInital.disabled = false;
  btnLeftLast.disabled = false;
  count = 8;
  };
  if (slidesPage() === 16) {
  pageNumber.innerHTML = 16;
  index = 15;
  createBlock(block);
  btnRightInital.disabled = true;
  btnRightLast.disabled = true;
  btnLeftInital.disabled = false;
  btnLeftLast.disabled = false;
  count = 16;
  };
};

const moveRight = () => {
  index++;
  createBlock(block);
  document.querySelector('.pets__block.one').innerHTML = block.innerHTML;

  slider.classList.add('transition-right');
  btnRightInital.addEventListener('click', moveRight);
  if (slidesPage() === 16) {
    if (count < 17) {
      btnLeftInital.disabled = false;
      btnLeftLast.disabled = false;
      pageNumber.innerHTML = count + 1; 
    }; 
    if (count === 15) {
      btnRightInital.disabled = true;
      btnRightLast.disabled = true;
    };
  }; 

  if (slidesPage() === 8) {
    if (count < 9) {
      btnLeftInital.disabled = false;
      btnLeftLast.disabled = false;
      pageNumber.innerHTML = count + 1; 
    };
    if (count === 7) {
      btnRightInital.disabled = true;
      btnRightLast.disabled = true;
    };
  };
   
  if (slidesPage() === 6) {
    if (count < 7) {
      btnLeftInital.disabled = false;
      btnLeftLast.disabled = false;
      pageNumber.innerHTML = count + 1; 
    };
    if (count === 5) {
     btnRightInital.disabled = true;
     btnRightLast.disabled = true;
    }
  } 

  count++;  
}


slider.addEventListener('animationend', (event) => {
  if (event.animationName === 'move-left') {   
     slider.classList.remove('transition-left');
     document.querySelector('.pets__block.one').innerHTML = block.innerHTML;
     addquerySelectors();
  } else {
    slider.classList.remove('transition-right');
     document.querySelector('.pets__block.one').innerHTML = block.innerHTML; 
     addquerySelectors();
  }; 
});

const sliderPetsSubscribe = () => {
  btnLeftInital.addEventListener('click', moveLeft);
  btnRightInital.addEventListener('click', moveRight); 
  btnLeftLast.addEventListener('click', moveLeftLast);
  btnRightLast.addEventListener('click', moveRightLast);
};


export default sliderPetsSubscribe;
