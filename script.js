const msg = document.querySelector('.message');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false;
let words = ['python', 'javascript', 'java','c++','html','css'];

let word = "";
let scramble = "";
const createWords = () => {
    let random = Math.floor(Math.random()*words.length);
    let newTempWord = words[random];
    return newTempWord;
}

const createScramble = (string) =>{
    let arr = string.split("");
    for(let i = arr.length - 1; i >0 ; i--){
        let j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr);
    return arr.join("");
}

btn.addEventListener('click', () => {
    if(!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        word = createWords();
        scramble = createScramble(word);
        msg.innerHTML = scramble;
    }
    else{
        let userword = guess.value;
        if(userword == word){
            msg.innerHTML = "Correct Guess";
            play = false;
            guess.classList.toggle('hidden');
            btn.innerText = "Click Here To Start";
        }
        else{
            msg.innerHTML = "Wrong Guess! Try again : " + scramble;
        }
        guess.value = "";
    }
});