
let sendMoneyBtn = document.getElementById('send-moneybtn');
let sendMoneyForm = document.getElementById('sendmoney');



sendMoneyBtn.addEventListener('click', () => {
    // console.log('hello')
    sendMoneyForm.classList.remove('hidden');
    sendMoneyBtn.classList.add('hidden');
    });

    