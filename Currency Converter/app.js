const BASE_URL = "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/"

const dropdown = document.querySelectorAll('.dropdown select');

const btn = document.querySelector('form button');

const fromCurr = document.querySelector('.from select')
const toCurr = document.querySelector('.to select');

const msg = document.querySelector(".msg")

for(let select of dropdown){
    for(currCode in countryList){
        const newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener('change', (event)=>{
        updateFlag(event.target)
    })
}

const updateFlag = (element)=>{
    const countryCode = countryList[element.value]
    const img = element.previousElementSibling;
    const newSrc = `https://flagcdn.com/${countryCode.toLowerCase()}.svg`;
    
    img.src = newSrc
}

btn.addEventListener('click', async (e)=>{
    e.preventDefault();

    const amount = document.querySelector('.amount input');

    let amtVal = amount.value;

    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = 1;
    }

    // INR_USD.json

    const URL = `${BASE_URL}${toCurr.value}_${fromCurr.value}.json`;

    const response = await fetch(URL);
    const data = await response.json();

    const rate = data.rate;

    const finalAmount = amtVal * rate;

    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
})


