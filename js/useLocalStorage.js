const feedback = body.querySelector('.feedback');
const feedbackName = feedback.querySelector('.feedback__name');
const feedbackEmail = feedback.querySelector('.feedback__email');
const feedbackTextarea = feedback.querySelector('.feedback__textarea');

if(feedbackTextarea && feedbackTextarea.value == ""){
  feedbackTextarea.value = localStorage.getItem('feedbackTextarea');
}
if(feedbackName && feedbackName.value == ""){
  feedbackName.value = localStorage.getItem('feedbackName');
}
if(feedbackEmail && feedbackEmail.value == ""){
  feedbackEmail.value = localStorage.getItem('feedbackEmail');
}
feedbackName.oninput = () =>{
  localStorage.setItem('feedbackName', feedbackName.value);
  if(feedbackName.value == ""){
    localStorage.removeItem('feedbackName');
  }
}
feedbackEmail.oninput = () =>{
  localStorage.setItem('feedbackEmail', feedbackEmail.value);
  if(feedbackEmail.value == ""){
    localStorage.removeItem('feedbackEmail');
  }
}
feedbackTextarea.oninput = () =>{
  localStorage.setItem('feedbackTextarea', feedbackTextarea.value);
  if(feedbackTextarea.value == ""){
    localStorage.removeItem('feedbackTextarea');
  }
}