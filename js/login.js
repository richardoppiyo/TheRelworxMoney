let logInBtn = document.getElementById('loginbtn');
let logInBtn2 = document.getElementById('loginbtn2');
let signUpBtn = document.getElementById('signupbtn');
let signUpBtn2 = document.getElementById('signupbtn2');


let landingPage = document.getElementById('landing');
let signUpPage = document.getElementById('signup');
let logInPage = document.getElementById('login');
let userPage = document.getElementById('user');


const logginIn = () => {
    landingPage.classList.add('hidden');
    signUpPage.classList.add('hidden');
    userPage.classList.add('hidden');
    logInPage.classList.remove('hidden');
}

const signingUp = () => {
    landingPage.classList.add('hidden');
    userPage.classList.add('hidden');
    logInPage.classList.add('hidden');
    signUpPage.classList.remove('hidden');
}

logInBtn.addEventListener('click', () => logginIn());
logInBtn2.addEventListener('click', () => logginIn());
signUpBtn.addEventListener('click', () => signingUp());
signUpBtn2.addEventListener('click', () => signingUp());


let userArray = [ 
    {
    id: 1,
    fname: 'Richard',
    lname: 'Opiyo',
    phone: "0729384848",
    password: 'qwerty'
    },
    {
        id: 2,
        fname: 'Michael',
        lname: 'Joseph',
        phone: "0729984848",
        password: 'qwerty'
        },

]


const logInSubmit = (e) => {
    e.preventDefault();
    console.log('I am here');
}