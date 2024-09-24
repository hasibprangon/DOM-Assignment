// for card-3
document.getElementById('ThirdBtnDonate').addEventListener('click', function (e) {
    e.preventDefault();
    const getDonateAmount = getInputValueById('thirdInput');
    const DonationGain = getTextValueById('donateGainQuotaM');
    const getMainBalance = getTextValueById('mainBalance');
    if(isNaN(getDonateAmount) || getDonateAmount < 0 || getDonateAmount > getMainBalance ){
        alert('Invalid donation');
        return;
    }
    else{
        const newBalance = getDonateAmount + DonationGain;
        document.getElementById('donateGainQuotaM').innerText = newBalance;
    
        
        const newMainBalance = getMainBalance - getDonateAmount;
        document.getElementById('mainBalance').innerText = newMainBalance;
        document.getElementById('thirdInput').value = '';
        alert('Donation successful')
    }
});