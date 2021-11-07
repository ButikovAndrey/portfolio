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