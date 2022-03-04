const _ = require('lodash');
const LOCALSTORAGE_KEY = "feedback-form-state";

const formEl = document.querySelector(".feedback-form")

formEl.addEventListener('input',_.throttle(onFormInput))
formEl.addEventListener('submit',_.throttle(onFormSubmit))

checkLocalStorage();

function onFormInput(e) {
localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(createStatusForm()))
};

function createStatusForm(){
    return {
        email: formEl.elements.email.value,
        message: formEl.elements.message.value,
      };
    
}

function onFormSubmit(e){
    e.preventDefault();
    if (e.currentTarget.elements.email.value === "" || event.currentTarget.elements.message.value === ""){
      alert("Заполни окна")
    }else {
      console.log(createStatusForm());
    formEl.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    }
    
};
    

function checkLocalStorage(){
    let currentFieldStatus;
    try {
      currentFieldStatus = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
      formEl.elements.email.value = currentFieldStatus.email;
    formEl.elements.message.value = currentFieldStatus.message;
    } catch (error) {
    }
}
