const container = document.querySelector(".container p");
const text = document.querySelector(".text");
const forma = document.querySelector(".aform");
const word = document.querySelector("#words");
const characters = document.querySelector("#characters");
const time = document.querySelector("#time");
const popup = document.querySelector(".popup");
const pic = document.querySelector("#img");
const info = document.querySelector("#info");
const cross = document.querySelector(".cross");
const playAgain = document.querySelector("#playagain");

let characterCount = 00;
let wordsCount = 00;
let timeCount = 60;

let timeStop;
let startTime = true;

const random =
  "never spend school taught ladies plenty body gotten burned Cheryl second aid ego flower reliance crown immolate Tiegs blown Raquel Welch hay jump open drawbridge Tarzan vine cause unknown stuntman Eastwood look fine unidentified vindicate lieutenant abomination finished and mrs really happening rapturous Entrance down only how true unknown early over that come Melancholy Sportsman understood for Winter So mr need in unsatiable Chicken sent today ye wish no speaking ample warmth wants reserved own pleasure fact having thus dine become should have speedily on sing near favour i attacks kept Polite excited so oh for weddings stood way Continuing an asked to something said message great dull forming led in sufficient shoud friendly throwing be Goodness mr am Hard those supposing set there Handsome first one neither make and said as moment disposal offending melancholy like put led terms songs friendship perceived decisively little are how but bad residence are around ye is or strongly He formerly Inquietude  of so newspaper painful ye in village men drawn juvenile suspected my bed do you snug taste see more first to wrong compact breakfast laughing but yet she Ham thanks fine temper end come directly an ecstatic ask packages formed packages put do mrs get for Rich mean Rich zealously at Oh going begin ask no had wife who offices wish on six entreaties peculiar concealed horrible be my of why departure built accused plan An steepest shy so too true Depending does Neglected attention Felicity means their Unpleasant blessing Thoughts";
const words = random.split(" ");

function load() {
  callWords();
  text.focus();
  characters.innerText = characterCount;
  word.innerText = wordsCount;
  time.innerText = timeCount;
}

function callWords() {
  const number = Math.round(250 * Math.random());
  const showWord = words[number];
  container.innerHTML = "";
  showWord.split("").forEach((character) => {
    container.innerHTML += `<span>${character}</span>`;
  });
  forma.reset();
  characters.innerText = characterCount;
  word.innerText = wordsCount;
}

text.addEventListener("input", () => {
  if (startTime) {
    timeStop = setInterval(checkTime, 1000);
    startTime = false;
  }
  const arrayFormed = container.querySelectorAll("span");
  const inputValue = text.value.split("");
  let correct = true;
  arrayFormed.forEach((characterSpan, index) => {
    const newCharacter = inputValue[index];
    if (newCharacter == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
      correct = false;
      console.log("yo");
    } else if (newCharacter === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
      correct = false;
    }
  });

  if (correct) {
    characterCount += inputValue.length;
    wordsCount++;
    callWords();
  }
});

function checkTime() {
  timeCount--;
  time.innerText = timeCount;
  if (timeCount === 0) {
    text.blur();
    clearInterval(timeStop);
    if (wordsCount <= 20) {
      popup.style.display = "flex";
      pic.style.background =
        'url("./assets/turtle1.jpg")no-repeat center center/contain';
      info.innerHTML = `<p>You are a <span>TURTLE</span>
      <p>You can type <span>${wordsCount}</span> words and <span>${characterCount}</span> characters per minute`;
    } else if (wordsCount > 20 && wordsCount <= 35) {
      popup.style.display = "flex";
      pic.style.background =
        'url("./assets/bear.jpg")no-repeat center center/contain';
      info.innerHTML = `<p>You are a <span>BEAR</span>
      <p>You can type <span>${wordsCount}</span> words and <span>${characterCount}</span> characters per minute`;
    } else if (wordsCount > 35 && wordsCount <= 60) {
      popup.style.display = "flex";
      pic.style.background =
        'url("./assets/fox.jpg")no-repeat center center/contain';
      info.innerHTML = `<p>You are a <span>FOX</span>
      <p>You can type <span>${wordsCount}</span> words and <span>${characterCount}</span> characters per minute`;
    } else if (wordsCount > 60 && wordsCount <= 80) {
      popup.style.display = "flex";
      pic.style.background =
        'url("./assets/deer.jpg")no-repeat center center/contain';
      info.innerHTML = `<p>You are a <span>DEER</span>
      <p>You can type <span>${wordsCount}</span> words and <span>${characterCount}</span> characters per minute`;
    } else if (wordsCount > 80 && wordsCount <= 100) {
      popup.style.display = "flex";
      pic.style.background =
        'url("./assets/tiger.jpg")no-repeat center center/contain';
      info.innerHTML = `<p>You are a <span>TIGER</span>
      <p>You can type <span>${wordsCount}</span> words and <span>${characterCount}</span> characters per minute`;
    } else if (wordsCount > 100) {
      popup.style.display = "flex";
      pic.style.background =
        'url("./assets/robot.jpg")no-repeat center center/contain';
      info.innerHTML = `<p>You are a <span>ROBOT</span>
      <p>You can type <span>${wordsCount}</span> words and <span>${characterCount}</span> characters per minute`;
    }
  }
}

window.addEventListener("load", load);

playAgain.addEventListener("click", () => window.location.reload());
cross.addEventListener("click", () => (popup.style.display = "none"));
