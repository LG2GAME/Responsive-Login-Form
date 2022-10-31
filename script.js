const cover = document.querySelector('.cover');

const signUpBtn = document.querySelector('.sign-up');
const loginBtn = document.querySelector('.login');

const left = document.querySelector('.left');
const right = document.querySelector('.right');

signUpBtn.addEventListener("click", function(){
    cover.classList.toggle("active");
})

loginBtn.addEventListener("click", function(){
    cover.classList.toggle("active");
})


signUpBtn.addEventListener("click", function(){
    left.classList.toggle("active");
    right.classList.toggle("disactive");
})

loginBtn.addEventListener("click", function(){
    left.classList.toggle("active");
    right.classList.toggle("disactive");
})