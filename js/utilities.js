function getInputValueById(id) {
 const inputValueStr = document.getElementById(id).value;
 const inputValue =parseFloat(inputValueStr);
 return inputValue; 
};

function getTextValueById(id) {
    const getTextValueStr = document.getElementById(id).innerText;
    const getTextValue = parseFloat(getTextValueStr);
    return getTextValue;
};

