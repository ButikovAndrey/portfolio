let nav = document.querySelector('.header__nav');
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

// change theme script
let header = document.querySelector('.header');
let aboutImg = document.querySelectorAll('.about__img');
let topicImg = document.querySelector('.topic__img');

links[2].onclick = function(){
  this.classList.toggle('special');
  if(this.classList.contains('special')){
    header.style.backgroundImage = "url(img/bg1.jpg)";
    burger.src = "img/menu.jpg";
    topicImg.src = "img/7.jpg";
    for(let i = 0; i<portfolios.length; i++){
      let imageLink = "url(img/"+i+".jpg)";
      portfolios[i].style.backgroundImage = imageLink;
      if(i<6){
        aboutImg[i].style.backgroundImage = imageLink;
      }
    }

    
  } 
  else{
    header.style.backgroundImage = null;
    burger.src = "img2/menu.png";
    topicImg.src = "img2/10.jpeg";
    for(let i = 0; i<portfolios.length; i++){
      portfolios[i].style.backgroundImage = null;
      if(i<6){
        aboutImg[i].style.backgroundImage = null;
      }
    }
  }
}