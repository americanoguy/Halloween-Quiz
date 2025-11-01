const suallar = [
  {
    sual: "Where was Halloween originally celebrated?",
    cavablar: ["Ireland", "USA", "England", "Canada"],
    duzgun: "Ireland"
  },
  {
    sual: "What date is Halloween celebrated on?",
    cavablar: ["October 31", "November 1", "October 30", "December 25"],
    duzgun: "October 31"
  },
  {
    sual: "What do people carve on Halloween?",
    cavablar: ["Pumpkin", "Apple", "Potato", "Watermelon"],
    duzgun: "Pumpkin"
  },
  {
    sual: "What is a common activity on Halloween night?",
    cavablar: ["Trick-or-treating", "Singing carols", "Easter egg hunting", "Fireworks"],
    duzgun: "Trick-or-treating"
  },
  {
    sual: "Which creature is associated with Halloween?",
    cavablar: ["Vampire", "Unicorn", "Mermaid", "Fairy"],
    duzgun: "Vampire"
  },
  {
    sual: "What do children say when they knock on doors?",
    cavablar: ["Trick or treat", "Happy birthday", "Good morning", "Congratulations"],
    duzgun: "Trick or treat"
  },
  {
    sual: "Which color is NOT typical for Halloween decorations?",
    cavablar: ["Orange", "Black", "Purple", "Blue"],
    duzgun: "Blue"
  },
  {
    sual: "What is a haunted house?",
    cavablar: ["A spooky house", "A library", "A school", "A supermarket"],
    duzgun: "A spooky house"
  },
  {
    sual: "Which candy is most popular on Halloween?",
    cavablar: ["Chocolate", "Candy corn", "Gum", "Lollipop"],
    duzgun: "Candy corn"
  },
  {
    sual: "Which mythical creature flies on a broomstick?",
    cavablar: ["Witch", "Dragon", "Goblin", "Elf"],
    duzgun: "Witch"
  }
];


const suallarolandiv = document.getElementById("suallarolandiv");
const suallarigonderbtn = document.getElementById("suallarigonderbtn");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

// suallari ekrana cixarmaq
let sualHTML = "";
for (let i = 0; i < suallar.length; i++) {
  sualHTML += `<p>${i + 1}. ${suallar[i].sual}</p>`;

  for (let j = 0; j < suallar[i].cavablar.length; j++) {
    let item = suallar[i].cavablar[j];
    sualHTML += `
      <label class="option">
        <input type="radio" name="${i}" value="${item}" />
        <span class="dot"></span>
        <span class="text">${item}</span>
      </label><br>
    `;
  }

  sualHTML += "<br>";
}

suallarolandiv.innerHTML = sualHTML;

suallarigonderbtn.onclick = function () {
  let xal = 0;

  for (let i = 0; i < suallar.length; i++) {
    let secimler = document.getElementsByName(i);
    for (let j = 0; j < secimler.length; j++) {
      if (secimler[j].checked && secimler[j].value === suallar[i].duzgun) {
        xal++;
      }
    }
  }

  suallarolandiv.style.display = "none";
  suallarigonderbtn.style.display = "none";

  loading.classList.remove("hidden");


  const failaudio = document.getElementById("failaudio");
  const escapeaudio= document.getElementById("escapeaudio");


  setTimeout(function () {
    loading.classList.add("hidden");
    result.classList.remove("hidden");
    if(xal<5){
       result.innerHTML = `<h3 id="dead">You got ${xal} / ${suallar.length} correct! <br> <span id="youdied">You died</span></h3>`;
       failaudio.play();
    }else{
      result.innerHTML = `<h3 id="live">You got ${xal} / ${suallar.length} correct! <br> <span id="youescaped">You escaped</span></h3>`;
      escapeaudio.play();

    }
  }, 2000);
};


let vaxt = 30;
const vaxtDiv = document.getElementById("vaxt"); 

let timer =setInterval(()=>{
  vaxt--;
  vaxtDiv.innerHTML=`Time left ${vaxt}s`
  if(vaxt<=0){
    clearInterval(timer);
    alert("Time is up!");
    suallarigonderbtn.click();
  }

  
},1000);
suallarigonderbtn.addEventListener("click", () => {
    clearInterval(timer);
});