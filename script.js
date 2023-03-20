const password1 = document.querySelector('#password');
const password2 = document.querySelector('#confirm-password');
const error = document.querySelector('#error');
error.classList.add('error');


password2.addEventListener('focus', ()=>{
    
    if(password1.value!==password2.value){
        password1.classList.add('password-match-error');
        password2.classList.add('password-match-error');
        error.classList.remove('error');

    } else {
        password1.classList.remove('password-match-error');
        password2.classList.remove('password-match-error');
        error.classList.add('error');
    }
});

password2.addEventListener('keyup', ()=>{
    
    if(password1.value!==password2.value){
        password1.classList.add('password-match-error');
        password2.classList.add('password-match-error');
        error.classList.remove('error');

    } else {
        password1.classList.remove('password-match-error');
        password2.classList.remove('password-match-error');
        error.classList.add('error');
    }
});

//-----------------------

password1.addEventListener('focus', ()=>{
    
    if(password1.value!==password2.value){
        password1.classList.add('password-match-error');
        password2.classList.add('password-match-error');
        error.classList.remove('error');

    } else {
        password1.classList.remove('password-match-error');
        password2.classList.remove('password-match-error');
        error.classList.add('error');
    }
});

password1.addEventListener('keyup', ()=>{
    
    if(password1.value!==password2.value){
        password1.classList.add('password-match-error');
        password2.classList.add('password-match-error');
        error.classList.remove('error');

    } else {
        password1.classList.remove('password-match-error');
        password2.classList.remove('password-match-error');
        error.classList.add('error');
    }
});
