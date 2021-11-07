let body = document.querySelector('body');
let temp = body.querySelector('.template').content;
let tempBG = temp.querySelector('.template__button');
let tempClose = temp.querySelector('.template__container-close');
let tempFrame = temp.querySelector('.template__body');
let tempImg = temp.querySelector('.template__img');
let tempHeader = temp.querySelector('.template__header');
let tempText = temp.querySelector('.template__text');
let portfolios = body.querySelectorAll('.main__portfolio');

function closeDom(frame, closeBG, closeX){
  closeBG.onclick = function(){
    frame.remove();
    closeBG.remove();
    body.style = null;
    removeTempImgStyle();
  }
  closeX.onclick = function(){
    frame.remove();
    closeBG.remove();
    body.style = null;
    removeTempImgStyle();
  }
}

function removeTempImgStyle(){
    tempImg.style = null;
    setTimeout(function(){
      tempImg.classList.remove('absolute');
      tempFrame.style = null;
    }, 500);
}

tempImg.onclick = function(){
  if(!tempImg.classList.contains('absolute')){
    tempImg.classList.toggle('absolute');
    tempImg.style = "height: 100%; width:101.5%; border-radius: 0 0 20px 20px; top:3.2vh; bottom:0; visibility:visible;";
    tempFrame.style.color = "darkgray";
  }
  else{
    removeTempImgStyle();
  }
  
}

  for(let portfolio of portfolios){
   portfolio.onclick = function(){
      tempImg.src = document.defaultView.getComputedStyle(portfolio, null).backgroundImage.split('"')[1];
      tempHeader.innerText = portfolio.querySelector('.main__portfolio-text').textContent;
      tempText.innerText = portfolio.querySelector('.none').textContent;
     body.style.overflow = "hidden";
     body.appendChild(tempBG);
     body.appendChild(tempFrame);
     closeDom(tempFrame, tempBG, tempClose);
   }
  }