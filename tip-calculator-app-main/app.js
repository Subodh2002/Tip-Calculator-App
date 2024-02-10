//Input Element
const inputBill=document.querySelector("#money");
const inputTip=document.querySelector("#custom");
const inputPeople=document.querySelector("#people");

//Button Element
const tip5=document.querySelector(".tip-5");
const tip10=document.querySelector(".tip-10");
const tip15=document.querySelector(".tip-15");
const tip25=document.querySelector(".tip-25");
const tip50=document.querySelector(".tip-50");
const resetBtn=document.querySelector(".reset-btn");
//Error Element
const personError=document.querySelector(".person-input-error")

//Output Element
const outputTip=document.querySelector(".output-tip");
const outputTotal=document.querySelector(".output-total");

let isValid=false;
let tip=0;






tip5.addEventListener("click",()=>{
    tip= +tip5.value;
    tip5.style.backgroundColor="var(--Strong-cyan)";
    tip5.style.color="var(--Very-dark-cyan)";
    tip5.style.fontWeight="600";

    tip10.style.backgroundColor="";
    tip10.style.color="";

    tip15.style.backgroundColor="";
    tip15.style.color="";

    tip25.style.backgroundColor="";
    tip25.style.color="";

    tip50.style.backgroundColor="";
    tip50.style.color="";
    inputTip.value="";

});

tip10.addEventListener("click", ()=>{
    tip= +tip10.value;
    tip5.style.backgroundColor="";
    tip5.style.color="";
    

    tip10.style.backgroundColor="var(--Strong-cyan)";
    tip10.style.color="var(--Very-dark-cyan)";
    tip10.style.fontWeight="600";

    tip15.style.backgroundColor="";
    tip15.style.color="";

    tip25.style.backgroundColor="";
    tip25.style.color="";

    tip50.style.backgroundColor="";
    tip50.style.color="";
    inputTip.value="";
});

tip15.addEventListener("click", ()=>{
    tip= +tip15.value;
    tip5.style.backgroundColor="";
    tip5.style.color="";

    tip10.style.backgroundColor="";
    tip10.style.color="";

    tip15.style.backgroundColor="var(--Strong-cyan)";
    tip15.style.color="var(--Very-dark-cyan)";
    tip15.style.fontWeight="600";

    tip25.style.backgroundColor="";
    tip25.style.color="";

    tip50.style.backgroundColor="";
    tip50.style.color="";
    inputTip.value="";
});

tip25.addEventListener("click", ()=>{
    tip= +tip25.value;
    tip5.style.backgroundColor="";
    tip5.style.color="";

    tip10.style.backgroundColor="";
    tip10.style.color="";

    tip15.style.backgroundColor="";
    tip15.style.color="";

    tip25.style.backgroundColor="var(--Strong-cyan)";
    tip25.style.color="var(--Very-dark-cyan)";
    tip25.style.fontWeight="600";

    tip50.style.backgroundColor="";
    tip50.style.color="";
    inputTip.value="";
});

tip50.addEventListener("click", ()=>{
    tip= +tip50.value;
    tip5.style.backgroundColor="";
    tip5.style.color="";

    tip10.style.backgroundColor="";
    tip10.style.color="";

    tip15.style.backgroundColor="";
    tip15.style.color="";

    tip25.style.backgroundColor="";
    tip25.style.color="";

    tip50.style.backgroundColor="var(--Strong-cyan)";
    tip50.style.color="var(--Very-dark-cyan)";
    tip50.style.fontWeight="600";
    inputTip.value="";
});

inputTip.addEventListener("input",()=>{
    tip= +inputTip.value;
    tip5.style.backgroundColor="";
    tip5.style.color="";

    tip10.style.backgroundColor="";
    tip10.style.color="";

    tip15.style.backgroundColor="";
    tip15.style.color="";

    tip25.style.backgroundColor="";
    tip25.style.color="";

    tip50.style.backgroundColor="";
    tip50.style.color=""

});


inputTip.addEventListener("input", ()=>{

    if(+inputTip.value < 1)
    {
        inputTip.style.borderColor="red";
        isValid=false;

    }
    else{
        inputTip.style.borderColor="";
        isValid=true;
    }

});

inputPeople.addEventListener("input", (d)=>{
    if(+inputPeople.value === 0)
    {
        personError.textContent="Cannot be Zero";
        inputPeople.style.borderColor="red";
        isValid=false;
        return
    }
    else{
        personError.textContent="";
        inputPeople.style.borderColor="";
        isValid=true;
    }
});
inputPeople.addEventListener("input", CalculateBill);

function CalculateBill() {
        if(+inputPeople.value===0){
            personError.textContent="Cannot be Zero";
            inputPeople.style.borderColor="red";
        }
        else{
        let tipPerPerson=0;
        let totalBillPerson=0;

        tipPerPerson=(+inputBill.value * (tip/100))/ inputPeople.value;

        totalBillPerson=((+inputBill.value / inputPeople.value) + tipPerPerson).toFixed(2);

        outputTip.textContent=`$${tipPerPerson.toFixed(2)}`;
        outputTotal.textContent=`$${totalBillPerson}`;
        }


}



function resetAll() {
    inputBill.value="";
    inputPeople.value="";
    inputTip.value="";
    personError.textContent="";
    outputTip.textContent="$0.00";
    outputTotal.textContent="$0.00";
}



resetBtn.addEventListener("click", resetAll);


