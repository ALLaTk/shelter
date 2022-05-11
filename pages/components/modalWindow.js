import pets from './pets.js';


 const pet = [...document.querySelectorAll('.our-frends__content')];
 const modal = document.querySelector('.modal__window');
 const body = document.querySelector('body');
 const div = document.createElement('div');
 const modalBtn = document.querySelector('.modal__btn');
 const petContent = [...document.querySelectorAll('.modal__inner *')];
 const petName = [...document.querySelectorAll('.our-frends__name')];
 const headerContainer = document.querySelector('.header__container');

 document.body.append(div);
 
 function toggleWindow() {
    modal.classList.toggle('active');
    body.classList.toggle('active');
    div.classList.toggle('overlay');
    if(window.innerWidth<768){ headerContainer.classList.toggle('open') };
    modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal__window')) {
      modal.classList.add('active')
    }; 
    if (e.target.classList.contains('overly')) {
      modalBtn.classList.remove('active');
    }
  });
 
 }

export const getPet = (event) => {

   if(event.target.parentElement.classList.contains('our-frends__content')) { 
     petName.forEach((el) => {
       let petName = el.textContent.toLocaleLowerCase();  

         if (event.target.parentElement.classList.contains(`${petName}`)) {
           pets.find((el) => {
             if(petName === el.name.toLocaleLowerCase()){
              petContent.forEach((elem) => {    
               if (elem.className === 'modal__name-pets') {
                   elem.textContent = el.name;
                };          
               if (elem.className === 'modal__pet') {
                 elem.src = el.img
                };
               if (elem.className === 'modal__kind-pets') {
                 elem.textContent = `${el.type} - ${el.breed}`
                };
               if (elem.className === 'modal__text') {
                 elem.textContent = el.description
                };
               if (elem.className === 'modal__item-text age') {
                 elem.textContent = el.age
                };
               if (elem.className === 'modal__item-text inoculations') {
                   elem.textContent = (el.inoculations).join(', ')
                };
               if (elem.className === 'modal__item-text diseases') {
                 elem.textContent = (el.diseases).join(', ')
                };
               if (elem.className === 'modal__item-text parasites') {
                 elem.textContent = (el.parasites).join(', ')
                };
              });
             }
           });
         }
     }); 
  }
  
   toggleWindow();

 }

 function addActiveBtn() {
  modalBtn.classList.add('active');
}

function disableActiveBtn() {
  modalBtn.classList.remove('active');
}

 const modalWindowSubscribe = () => { 
    
    div.addEventListener('mouseover', addActiveBtn);
    div.addEventListener('mouseout', disableActiveBtn);
    div.addEventListener('click', getPet);
    modalBtn.addEventListener('click', getPet);
 }
 
 export default modalWindowSubscribe;