const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const menuLinks = [...document.querySelectorAll('.nav__list-link')];
const div = document.createElement('div');
const header = document.querySelector('header');
const headerContainer = document.querySelector('.header__container');

document.body.append(div);

function toggleMenu () {
  if(window.innerWidth<768){
  headerContainer.classList.toggle('open');
  burger.classList.toggle('open');
  menu.classList.toggle('open');
  logo.classList.toggle('open');
  body.classList.toggle('open');
  header.classList.toggle('open');
  div.classList.toggle('overlay');
  }
}

const burgerSubscribe = () => {
  burger.addEventListener('click', toggleMenu);
  div.addEventListener('click', toggleMenu);
  menuLinks.forEach((el, index) => {
    // if (index < 2) {
    el.addEventListener('click', toggleMenu);
    // } else
    // el.href = "#!";
  });
}

export default burgerSubscribe;



