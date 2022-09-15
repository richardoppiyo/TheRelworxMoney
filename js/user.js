
let sendMoneyBtn = document.getElementById('send-moneybtn');
let sendMoneyForm = document.getElementById('sendmoney');


let userArray = [ 
    {
    id: 1,
    fname: 'Richard',
    lname: 'Opiyo',
    phone: "0729384848",
    amount: 5000,
    password: 'qwerty'
    },
    {
        id: 2,
        fname: 'Michael',
        lname: 'Joseph',
        phone: "0729984848",
        amount: 3000,
        password: 'qwerty'
        },
]

function sendMoneyToUser () {
    console.log("hello")
    let recipientid = document.getElementById('recipient').value;
    let amountToTransfer = document.getElementById('amount').value;
    console.log(recipient,amount)

    // let userBalance = 


    // if( recipientid)


    
    return false;
}

const addFormDetail = () => {
  userArray.forEach(user => {
    let myform = document.getElementById('recipient');
    let recSelect = document.createElement('option');
    recSelect.id = user.id;
    recSelect.value = user.id;
    recSelect.text = user.fname;
    
    myform.appendChild(recSelect)
  })
}

sendMoneyBtn.addEventListener('click', () => {
    sendMoneyForm.classList.remove('hidden');
    sendMoneyBtn.classList.add('hidden');
    addFormDetail();
    });


