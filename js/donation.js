document.getElementById('firstBtnDonate').addEventListener('click', function (e) {
    e.preventDefault();
    const getDonateAmount = getInputValueById('firstInput');
    const DonationGain = getTextValueById('donateGainNoa');
    const getMainBalance = getTextValueById('mainBalance');
    if(isNaN(getDonateAmount) || getDonateAmount < 0 || getDonateAmount > getMainBalance || getDonateAmount === 0){
        alert('Invalid donation');
        return;
    }
    else{
        const newBalance = getDonateAmount + DonationGain;
        document.getElementById('donateGainNoa').innerText = newBalance;
    
        
        const newMainBalance = getMainBalance - getDonateAmount;
        document.getElementById('mainBalance').innerText = newMainBalance;
        modal.showModal();
    }
   
});

// got to blog page
document.getElementById('btnBlog').addEventListener('click', function() {
    window.location.href = '/blog.html'
});


