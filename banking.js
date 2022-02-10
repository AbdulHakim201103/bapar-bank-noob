// handle deposit button event

document.getElementById('deposit-button').addEventListener('click',function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText =depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotol = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotol + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field
    
    depositInput.value ='';
});

// handle withdraw button event

document.getElementById('withdraw-button').addEventListener('click',function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // update withdraw total

    const withdraTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdraTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdraTotal.innerText = newWithdrawTotal;

    // update account balance
    
    const balanceTotal =document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat (previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

     // clear the withdraw input field

    withdrawInput.value = '';
})





