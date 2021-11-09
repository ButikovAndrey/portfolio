let arrowTop = body.querySelector('.top__arrow');
window.onscroll = function(){
    if(document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight){
        arrowTop.style = "transform: rotateX(360deg); cursor:pointer;"
    }
    else{
        arrowTop.style = null;
    }
}