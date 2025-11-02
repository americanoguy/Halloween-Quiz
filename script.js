const halloweenQuestions = [
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
    sual: "What do people traditionally carve on Halloween?",
    cavablar: ["Pumpkins", "Apples", "Potatoes", "Coconuts"],
    duzgun: "Pumpkins"
  },
  {
    sual: "What is the traditional Halloween phrase said when trick-or-treating?",
    cavablar: ["Trick or treat!", "Give me candy!", "Boo!", "Scary night!"],
    duzgun: "Trick or treat!"
  },
  {
    sual: "Which color combination is most associated with Halloween?",
    cavablar: ["Black and orange", "Red and green", "Blue and yellow", "Purple and white"],
    duzgun: "Black and orange"
  },
  {
    sual: "What creature is said to transform during a full moon?",
    cavablar: ["Werewolf", "Vampire", "Zombie", "Ghost"],
    duzgun: "Werewolf"
  },
  {
    sual: "What is another name for a ghost?",
    cavablar: ["Spirit", "Monster", "Ghoul", "Witch"],
    duzgun: "Spirit"
  },
  {
    sual: "Which animal is often associated with witches?",
    cavablar: ["Black cat", "Dog", "Owl", "Snake"],
    duzgun: "Black cat"
  },
  {
    sual: "What do children collect when they go trick-or-treating?",
    cavablar: ["Candy", "Money", "Toys", "Pumpkins"],
    duzgun: "Candy"
  },
  {
    sual: "Which country is believed to be the birthplace of Halloween?",
    cavablar: ["Ireland", "Scotland", "England", "USA"],
    duzgun: "Ireland"
  }
];


const geographyQuestions = [
  {
    sual: "What is the capital of France?",
    cavablar: ["Paris", "London", "Berlin", "Madrid"],
    duzgun: "Paris"
  },
  {
    sual: "Which is the largest continent?",
    cavablar: ["Asia", "Africa", "Europe", "Australia"],
    duzgun: "Asia"
  },
  {
    sual: "Which ocean is the biggest?",
    cavablar: ["Pacific", "Atlantic", "Indian", "Arctic"],
    duzgun: "Pacific"
  },
  {
    sual: "What is the longest river in the world?",
    cavablar: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    duzgun: "Nile"
  },
  {
    sual: "Which country has the largest population?",
    cavablar: ["China", "India", "USA", "Indonesia"],
    duzgun: "China"
  },
  {
    sual: "Which is the smallest country in the world?",
    cavablar: ["Vatican City", "Monaco", "Malta", "San Marino"],
    duzgun: "Vatican City"
  },
  {
    sual: "Which desert is the largest in the world?",
    cavablar: ["Sahara", "Arabian", "Gobi", "Kalahari"],
    duzgun: "Sahara"
  },
  {
    sual: "Mount Everest is located in which mountain range?",
    cavablar: ["Himalayas", "Andes", "Alps", "Rockies"],
    duzgun: "Himalayas"
  },
  {
    sual: "Which country has the longest coastline?",
    cavablar: ["Canada", "Australia", "Russia", "USA"],
    duzgun: "Canada"
  },
  {
    sual: "Which continent is known as the 'Dark Continent'?",
    cavablar: ["Africa", "Asia", "Europe", "South America"],
    duzgun: "Africa"
  }
];

const load =document.getElementById("loading")
const halloweenmode= document.getElementById("halloweenmode");
const geographymode =document.getElementById("geographymode")

// sesler
const failaudio = document.getElementById("failaudio");
const escapeaudio = document.getElementById("escapeaudio");
const fail =document.getElementById("fail");
const clap = document.getElementById("clap");

// Mod seçimi
const mode = localStorage.getItem("quizMode") || "halloween"; // default Halloween
let suallar = [];

if (mode === "halloween") {
  suallar = halloweenQuestions;
  document.body.style.background = "linear-gradient(orange, orangered)";
  document.querySelector("h1").textContent = "Halloween Quiz";
  document.querySelector("h1").style.fontFamily = "Creepster, cursive";
} else if (mode === "geography") {
  suallar = geographyQuestions;
  document.body.style.background = "linear-gradient(skyblue, green)";
  document.querySelector("h1").textContent = "Geography Quiz";
  document.querySelector("h1").style.fontFamily = "Arial";
  document.body.style.fontFamily = "Arial, sans-serif";
  
}


// Mod dəyişdirmək üçün funksiya
function setMode(mode) {
  localStorage.setItem("quizMode", mode);
  location.reload(); // səhifəni yenilə ki, yeni mod aktiv olsun
}

// Sualların div-ləri
const suallarolandiv = document.getElementById("suallarolandiv");
const suallarigonderbtn = document.getElementById("suallarigonderbtn");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

// Sualları ekrana çıxart
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

// geographyda fontu deyismek ucun
if (mode === "geography") {
  document.querySelectorAll("p").forEach(p => {
    p.style.fontFamily = "Arial";
  });
  document.querySelectorAll("#youdied").forEach(d =>{
    d.style.fontFamily="Arial";
  })
}

// Cavab yoxlama və nəticə
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
  halloweenmode.style.display="none"
  geographymode.style.display="none"
  suallarolandiv.style.display = "none";
  suallarigonderbtn.style.display = "none";
  loading.classList.remove("hidden");

  const failaudio = document.getElementById("failaudio");
  const escapeaudio = document.getElementById("escapeaudio");

  setTimeout(function () {
    loading.classList.add("hidden");
    result.classList.remove("hidden");

    // moda uygun sesler

    if(mode==="halloween"){
      if (xal < 5) {
      result.innerHTML = `<h3 id="dead">You got ${xal} / ${suallar.length} correct! <br> <span id="youdied">You died</span></h3>`;
      failaudio.play();
    } else {
      result.innerHTML = `<h3 id="live">You got ${xal} / ${suallar.length} correct! <br> <span id="youescaped">You escaped</span></h3>`;
      escapeaudio.play();
    }
    }else if(mode ==="geography"){
      if(xal<5){
        result.innerHTML= `<h3 id="lost">You got ${xal} / ${suallar.length} correct! <br> <span id="youlost">You lost</span></h3>`;
        fail.play();
      }else{
        result.innerHTML= `<h3 id="won">You got ${xal} / ${suallar.length} correct! <br> <span id="youwon">You won</span></h3>`;
        clap.play();
      }
    }
    
  }, 2000);
};

// Timer
let vaxt = 30;
const vaxtDiv = document.getElementById("vaxt");

let timer = setInterval(() => {
  vaxt--;
  vaxtDiv.innerHTML = `Time left ${vaxt}s`;
  if (vaxt <= 0) {
    clearInterval(timer);
    alert("Time is up!");
    suallarigonderbtn.click();
  }
}, 1000);

suallarigonderbtn.addEventListener("click", () => {
  clearInterval(timer);
});
