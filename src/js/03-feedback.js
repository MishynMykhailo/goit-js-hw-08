const _ = require('lodash');
const LOCALSTORAGE_KEY = "feedback-form-state";

const formEl = document.querySelector(".feedback-form")

formEl.addEventListener('input',_.throttle(onFormInput))
formEl.addEventListener('submit',_.throttle(onFormSumbit))

checkLocalStorage();
function onFormInput(e){
localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(createStatusForm))
};

function createStatusForm(){
    return {
        email: formEl.elements.email.value,
        message: formEl.elements.message.value,
      };
    
}

function onFormSumbit(e){
    e.preventDefault();
    console.log(createStatusForm());
    formEl.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
};
    

function checkLocalStorage(){
    let currentFieldStatus;
    try {
      currentFieldStatus = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    } catch (error) {
    }
}
