document.getElementById('firstBtnDonate').addEventListener('click', function() {
    const donationHistory = document.getElementById('historySection');
    const getMainBalance = getTextValueById('mainBalance')
    const getInputValue = getInputValueById('firstInput');
    const getHeading = document.getElementById('headingNoa').innerText;
    const time = new Date();
    
    const historyDiv = document.createElement('div');
    const historyH2 = document.createElement('h2');
    const historyTime = document.createElement('p');
   
    if( isNaN(getInputValue) || getInputValue <= 0 || getInputValue > getMainBalance){
        donationHistory.appendChild();
    }

    else{

        historyH2.innerText = `${getInputValue} taka is donated for ${getHeading}`
        historyH2.classList.add('text-black', 'text-lg', 'font-bold');
        historyTime.innerText = `${time}`;
    }

    historyDiv.appendChild(historyH2);
    historyDiv.appendChild(historyTime);
    historyDiv.classList.add('p-4', 'mt-4','bg-slate-300', 'rounded-lg', 'container', 'mx-auto',);
    donationHistory.appendChild(historyDiv);
    document.getElementById('firstInput').value = ''
})