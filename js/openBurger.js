let header = document.querySelector('.header');
let nav = header.querySelector('.header__nav');
let burger = nav.querySelector('.header__burger');
let list = nav.querySelector('.header__links');
let links = list.querySelectorAll('.header__link');

window.onclick = function(e){
  if(e.target.classList.contains('header__nav')||e.target.classList.contains('header__burger')){
    checkBurger();
  }
  else if(list.classList.contains('visible')){
    closeBurger();
  }
};

function checkBurger(){
  if(!list.classList.contains('visible')){
    openBurger();
  }
  else{
     closeBurger();
  }
};

function openBurger(){
   list.classList.add('visible');
   burger.style = "transform: rotate(180deg);";
   for(let i = 0; i<links.length; i++){
     openLinks(i);
   }
};

function openLinks(i){
  setTimeout(function(){
    links[i].style.opacity = "1";
  }, 333*i);
};

function closeBurger(){
  for(let link of links){
    link.style = null;
  }
    list.classList.remove('visible');
    burger.style = "transform: rotate(0deg);";
}