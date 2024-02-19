const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');

let startTime, endTime, totalTimeTaken;

let P1 = "The serene landscape stretched before us, bathed in hues of sunrise. Majestic mountains embraced the horizon, whispering tales of ancient times. Nature's symphony echoed, a gentle reminder of our place in its grand orchestration";
let P2 = "In the heart of the bustling city, hidden gems await discovery. A quaint coffee shop, aromatic and inviting, welcomes weary souls. Streets adorned with street art tell stories, each stroke a vibrant expression of urban creativity";
let P3 = "Underneath the starlit sky, a tranquil beach invites contemplation. Waves rhythmically caress the shore, sharing untold secrets. A peaceful retreat, where the ocean's melody harmonizes with the quiet whispers of the night";

const sentences = [P1, P2, P3];

    

const calculateTypingSpeed = (time_taken) => {
    let  totalWords = typing_ground.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if(actualWords !== 0) {
        let typing_speed  =  (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you wrote ${actualWords} words & time taken ${time_taken} sec`;
    }else{
        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
    }
}

const endTypingTest = () => {
    btn.innerText = "Start";

    let date = new Date();
    endTime = date.getTime();

    totalTimeTaken = (endTime -startTime) / 1000;

    calculateTypingSpeed(totalTimeTaken);

    show_sentence.style.backgroundColor = '';
    score.style.backgroundColor = 'cyan';

    show_sentence.innerHTML = "";
    typing_ground.value = "";
}


const startTyping = () => {
    document.getElementById('showSentence').style.backgroundColor = 'black';

    let randomNumber = Math.floor(Math.random() * sentences.length);
    
    show_sentence.innerHTML = sentences[randomNumber];

    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "Done";
}


btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;

        case "done":
            typing_ground.setAttribute('disabled' , 'true');
            endTypingTest();
            break;
    }
})