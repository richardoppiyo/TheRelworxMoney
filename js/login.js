let logInBtn = document.getElementById('loginbtn');
let logInBtn2 = document.getElementById('loginbtn2');
let signUpBtn = document.getElementById('signupbtn');
let signUpBtn2 = document.getElementById('signupbtn2');


let landingPage = document.getElementById('landing');
let signUpPage = document.getElementById('signup');
let logInPage = document.getElementById('login');
let userPage = document.getElementById('user');

let sendMoneyBtn = document.getElementById('send-moneybtn');
let sendMoneyForm = document.getElementById('sendmoney');


const logginIn = () => {
    landingPage.classList.add('hidden');
    signUpPage.classList.add('hidden');
    logInPage.classList.remove('hidden');
}

const signingUp = () => {
    landingPage.classList.add('hidden');
    logInPage.classList.add('hidden');
    signUpPage.classList.remove('hidden');
}

logInBtn.addEventListener('click', () => logginIn());
logInBtn2.addEventListener('click', () => logginIn());
signUpBtn.addEventListener('click', () => signingUp());
signUpBtn2.addEventListener('click', () => signingUp());

// sendMoneyBtn.addEventListener('click', () => {
//     console.log('hello')
//     // sendMoneyForm.classList.remove('hidden');
//     });

// const logInSubmit = (e) => {
//     e.preventDefault();
//     console.log('I am here');
// }
let userArray = [ 
    {
    id: 1,
    fname: 'Richard',
    lname: 'Opiyo',
    phone: "0729384848",
    amount: 5000,
    password: 'qwerty',
    email: 'rich@rich.com'
    },
    {
        id: 2,
        fname: 'Michael',
        lname: 'Joseph',
        phone: "0729984848",
        amount: 3000,
        password: 'qwerty',
        email: 'test@test.com'
        },
]

function verifyUser (email,pass) {
    let flag = false;

    console.log('hello 1');

    for(let i=0; i<userArray.length; i++ ) {
        if(userArray[i].email === email && userArray[i].password === pass) {
            flag = true;
            alert('logged in Succesfully');
            break;
        }
    }
    
    if(flag === false) {
        console.log('hello 2');
        alert('Please Enter the correct credentials or sign up')
        return false;
    }
    return true;
}


function handleLogIn () {
    let myEmail = document.getElementById('loginemail').value;
    let myPass = document.getElementById('loginpass').value;
    
    if(!verifyUser(myEmail,myPass)){
        return false;
    }
}