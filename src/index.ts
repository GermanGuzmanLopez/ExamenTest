import './styles.css';
import isPalindrome from './checker';

console.log("index.ts/start");

let button = <HTMLElement>document.getElementById('buttonSubmit');
button.addEventListener("click",() => buttonSubmitClick());


function buttonSubmitClick(){
    const inputText = <HTMLInputElement>document.getElementById('inputText');
    let bPalindrome = null;
    if(inputText){
        bPalindrome = isPalindrome(inputText.value);
        console.log(bPalindrome);
    }

    const divResult = <HTMLDivElement>document.getElementById('divResult');

    if(divResult){
        if(bPalindrome){
            divResult.innerText = 'Es palindrome!!!';
        }
        else{
            divResult.innerText = 'No es palindrome :c';
        }
    }
}

