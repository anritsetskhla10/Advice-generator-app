
const adviceNum = document.querySelector('.advice-num');
const advice = document.querySelector('.advice');
const dice = document.querySelector('.dice');

async function getAdvice(){
    try {
        const response = await fetch("https://api.adviceslip.com/advice" , {
            method: "GET",
            headers:{
                Accept: "application/json"
            }
        });

        const data = await response.json(); 

        adviceNum.textContent = `Advice #${data.slip.id}`;
        advice.textContent = data.slip.advice;


    } 
    catch(error) {
    console.error(error);
    }
}

getAdvice();
 dice.addEventListener("click",getAdvice)
