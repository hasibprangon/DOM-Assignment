// for card-2
document.getElementById('secondBtnDonate').addEventListener('click', function (e) {
    e.preventDefault();
    const getDonateAmount = getInputValueById('secondInput');
    const DonationGain = getTextValueById('donateGainFeni');
    const getMainBalance = getTextValueById('mainBalance');
    if(isNaN(getDonateAmount) || getDonateAmount < 0 || getDonateAmount > getMainBalance ){
        alert('Invalid donation');
        return;
    }
    else{
        const newBalance = getDonateAmount + DonationGain;
        document.getElementById('donateGainFeni').innerText = newBalance;
    
        
        const newMainBalance = getMainBalance - getDonateAmount;
        document.getElementById('mainBalance').innerText = newMainBalance;
        alert('Donation successful')
    }
});
