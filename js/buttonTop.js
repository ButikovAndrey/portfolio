let arrowTop = body.querySelector('.top__arrow');

window.onscroll = function(){
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        arrowTop.style = "transform: rotateX(360deg); cursor:pointer;"
    }
    else{
        arrowTop.style = null;
    }
}