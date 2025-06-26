const Question = document.getElementById("Question");
const Next = document.getElementById("Next");
const Previous = document.getElementById("Previous");
const count = document.getElementById("count");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const finalDisplay = document.getElementById("finalDisplay");
const refresh = document.getElementById("refresh");

//inputs
const IA = document.getElementById("a");
const IB = document.getElementById("b");
const IC = document.getElementById("c");
const ID = document.getElementById("d");

//Simple
let Pscore = document.getElementById("Pscore");
let score = document.getElementById("score");
let complement = document.getElementById("complement");
let test = document.getElementById("test");
let Correct = 0;
let Incorrect = 0;
let numOfQuestion = 20;
let page = 1;

Next.addEventListener("click", next);

Previous.addEventListener("click", goBack);

refresh.addEventListener("click", restart);

//Data
const Questions = [
  {
    question: "0. What is your Choice?",
    answer: "B",
    la: "A. Choice 1",
    lb: "B. Choice 2",
    lc: "C. Choice 3",
    ld: "D. Choice 4",
  },

  {
    question: "1. What is the Value of 1 + 1?",
    answer: "C",
    la: "A. 6",
    lb: "B. 0",
    lc: "C. 2",
    ld: "D. 4",
  },

  {
    question: "2. What is the Value of 2 - 3?",
    answer: "A",
    la: "A. -1",
    lb: "B. -5",
    lc: "C. 0",
    ld: "D. 5",
  },

  {
    question: "3. What is the Value of 3 * 2?",
    answer: "B",
    la: "A. 5",
    lb: "B. 6",
    lc: "C. 1",
    ld: "D. 9",
  },

  {
    question: "4. What is the Value of 12 / 3?",
    answer: "B",
    la: "A. 9",
    lb: "B. 4",
    lc: "C. 3",
    ld: "D. 36",
  },

  {
    question: "5. What is the Value of 16/6",
    answer: "C",
    la: "A. 16.66...",
    lb: "B. 2.0000",
    lc: "C. 0.7500",
    ld: "D. 0.83...",
  },

  {
    question: "6. What is the Value of 2^3?",
    answer: "D",
    la: "A. 15",
    lb: "B. 6",
    lc: "C. -1",
    ld: "D. 8",
  },

  {
    question: "7. What is the Value of 3^2?",
    answer: "A",
    la: "A. 9",
    lb: "B. -2",
    lc: "C. 1",
    ld: "D. 8",
  },

  {
    question: "8. What is the Value of 4^2?",
    answer: "C",
    la: "A. 39",
    lb: "B. 64",
    lc: "C. 16",
    ld: "D. 10",
  },

  {
    question: "9. What is the nearest Value of Pi?",
    answer: "D",
    la: "A. 3.152",
    lb: "B. 3.241",
    lc: "C. 3.134",
    ld: "D. 3.142",
  },

  {
    question: "10. What is the First Digit of eulers number",
    answer: "A",
    la: "A. 2",
    lb: "B. 7",
    lc: "C. -1",
    ld: "D. 3",
  },

  {
    question: "11. What is X in 2x + 6 = 12?",
    answer: "D",
    la: "A. 1",
    lb: "B. 4",
    lc: "C. 0",
    ld: "D. 3",
  },

  {
    question: "12. What is X in 3x - 16 = 5?",
    answer: "A",
    la: "A. 7",
    lb: "B. 9",
    lc: "C. 10",
    ld: "D. -3",
  },

  {
    question: "13. What is X in 14x - 6 = 46?",
    answer: "C",
    la: "A. 1",
    lb: "B. 7",
    lc: "C. 3",
    ld: "D. 2",
  },

  {
    question: "14. What is X in 2x + 6 = 12x - 34?",
    answer: "B",
    la: "A. 9",
    lb: "B. 4",
    lc: "C. 3",
    ld: "D. 6",
  },

  {
    question: "15. What is X in 15x + 1 = 5x + 21?",
    answer: "C",
    la: "A. 3",
    lb: "B. 5",
    lc: "C. 2",
    ld: "D. 7",
  },

  {
    question: "16. What is X in 23x - 6 = 8x + 69?",
    answer: "D",
    la: "A. 15",
    lb: "B. 6",
    lc: "C. 1",
    ld: "D. 5",
  },

  {
    question: "17. What is the Value of 4! ?",
    answer: "C",
    la: "A. 4",
    lb: "B. 25",
    lc: "C. 24",
    ld: "D. 36",
  },

  {
    question: "18. What is the Value of 3! + 4",
    answer: "D",
    la: "A. 12",
    lb: "B. 7",
    lc: "C. 16",
    ld: "D. 10",
  },

  {
    question: "19. What is the Value of i^2?",
    answer: "B",
    la: "A. i",
    lb: "B. -1",
    lc: "C. π",
    ld: "D. 0",
  },

  {
    question: "20. What is the Value of |2 * i * i| + -i^2",
    answer: "A",
    la: "A. 3",
    lb: "B. 1",
    lc: "C. -3",
    ld: "D. 0",
  },

  {
    question: "21. What is your Option",
    answer: "C",
    la: "A. Option 1",
    lb: "B. Option 2",
    lc: "C. Option 3",
    ld: "D. Option 4",
  },
];

//Memory
let memory = [
  { id: 0, PA: undefined },
  { id: 1, PA: undefined },
  { id: 2, PA: undefined },
  { id: 3, PA: undefined },
  { id: 4, PA: undefined },
  { id: 5, PA: undefined },
  { id: 6, PA: undefined },
  { id: 7, PA: undefined },
  { id: 8, PA: undefined },
  { id: 9, PA: undefined },
  { id: 10, PA: undefined },
  { id: 11, PA: undefined },
  { id: 12, PA: undefined },
  { id: 13, PA: undefined },
  { id: 14, PA: undefined },
  { id: 15, PA: undefined },
  { id: 16, PA: undefined },
  { id: 17, PA: undefined },
  { id: 18, PA: undefined },
  { id: 19, PA: undefined },
  { id: 20, PA: undefined },
  { id: 20, PA: undefined },
];

let Result = [
  { id: 0, cell: undefined },
  { id: 1, cell: undefined },
  { id: 2, cell: undefined },
  { id: 3, cell: undefined },
  { id: 4, cell: undefined },
  { id: 5, cell: undefined },
  { id: 6, cell: undefined },
  { id: 7, cell: undefined },
  { id: 8, cell: undefined },
  { id: 9, cell: undefined },
  { id: 10, cell: undefined },
  { id: 11, cell: undefined },
  { id: 12, cell: undefined },
  { id: 13, cell: undefined },
  { id: 14, cell: undefined },
  { id: 15, cell: undefined },
  { id: 16, cell: undefined },
  { id: 17, cell: undefined },
  { id: 18, cell: undefined },
  { id: 19, cell: undefined },
  { id: 20, cell: undefined },
  { id: 21, cell: undefined },
];

let Current = 1;
let numOfQuestions = Questions.length - 1;
let optionPicked;

//Labels
let LA = document.getElementById("LA");
let LB = document.getElementById("LB");
let LC = document.getElementById("LC");
let LD = document.getElementById("LD");

//Values
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");

//---------------------Base Setting------------------
Question.innerHTML = Questions[Current].question;

LA.innerHTML = Questions[Current].la;
LB.innerHTML = Questions[Current].lb;
LC.innerHTML = Questions[Current].lc;
LD.innerHTML = Questions[Current].ld;

count.innerHTML = Current + "/" + 20;

//------------------------Functions----------------

function Update() {
  count.innerHTML = Current + "/" + 20;
  Question.innerHTML = Questions[Current].question;
  LA.innerHTML = Questions[Current].la;
  LB.innerHTML = Questions[Current].lb;
  LC.innerHTML = Questions[Current].lc;
  LD.innerHTML = Questions[Current].ld;
}

function next() {
  if (Current < 20) {
    Next.innerHTML = "Next Question";
    page = 1;
    if (page == 1) {
      page1.style.display = "block";
      page2.style.display = "none";
    } else if (page == 2) {
      page2.style.display = "block";
      page1.style.display = "none";
    }
  } else if (Current == 20) {
    Next.innerHTML = "Submit";
    page = 2;
    if (page == 1) {
      page1.style.display = "block";
      page2.style.display = "none";
    } else if (page == 2) {
      page2.style.display = "block";
      page1.style.display = "none";
    }
  } else {
    Next.innerHTML = "Next Question";
  }

  if (!IA.checked && !IB.checked && !IC.checked && !ID.checked) {
    alert("Please pick an option before proceeding");
  } else {
    if (IA.checked) {
      optionPicked = "A";
    } else if (IB.checked) {
      optionPicked = "B";
    } else if (IC.checked) {
      optionPicked = "C";
    } else if (ID.checked) {
      optionPicked = "D";
    }

    Memory(Current);
    updateMemory(Current);

    if (Current < numOfQuestions) {
      Current++; // Move to the next question
    }
    //console.log(Current);
    Update();
    New();
    updateMemory(Current);
    if (Current > 20) {
      page = 2;
      log();
      gradeC();
      displayResults();
      append();

      if (Correct >= 0 && Correct <= 3) {
        complement.innerHTML = one();
        console.log(one());
      } else if (Correct >= 4 && Correct <= 6) {
        complement.innerHTML = two();
        console.log(two());
      } else if (Correct >= 7 && Correct <= 9) {
        complement.innerHTML = three();
        console.log(three());
      } else if (Correct >= 10 && Correct <= 12) {
        complement.innerHTML = four();
        console.log(four());
      } else if (Correct >= 13 && Correct <= 15) {
        complement.innerHTML = five();
        console.log(five());
      } else if (Correct >= 16 && Correct <= 18) {
        complement.innerHTML = six();
        console.log(six());
      } else if (Correct == 19) {
        complement.innerHTML = seven();
        console.log(seven());
      } else if (Correct == 20) {
        complement.innerHTML = eight();
        console.log(eight());
      } else {
        alert("Something went wrong in the grading system");
      }
    }
  }
}

function Memory(n) {
  memory[n].PA = optionPicked;
  //console.log(`${memory[n].id}. ${memory[n].PA}`);
}

function New() {
  if (IA.checked) {
    IA.checked = false;
  }
  if (IB.checked) {
    IB.checked = false;
  }
  if (IC.checked) {
    IC.checked = false;
  }
  if (ID.checked) {
    ID.checked = false;
  }
}

function goBack() {
  if (Current < 20) {
    Next.innerHTML = "Next Question";
  } else if (Current + 1 == 20) {
    // Changed from <= to <
    Next.innerHTML = "Submit";
  } else {
    Next.innerHTML = "Next Question";
  }

  if (Current == 0) {
    Current == 0;
  } else {
    Current -= 1;
    Update();
  }
  updateMemory(Current);
}

function updateMemory(n) {
  if (memory[n].PA === undefined) {
    //console.log("none");
  } else {
    //console.log(memory[n].PA);
    if (memory[n].PA == "A") {
      if (!IA.checked) {
        IA.checked = true;
      }
    } else if (memory[n].PA == "B") {
      if (!IB.checked) {
        IB.checked = true;
      }
    } else if (memory[n].PA == "C") {
      if (!IC.checked) {
        IC.checked = true;
      }
    } else if (memory[n].PA == "D") {
      if (!ID.checked) {
        ID.checked = true;
      }
    }
  }
}

function Verify(questionNum) {
  if (memory[questionNum].PA == undefined) {
    //console.log(`Question ${questionNum} hasn't been answered yet`);
  } else {
    if (Questions[questionNum].answer == memory[questionNum].PA) {
      //console.log(`Question ${questionNum} is Correct`);
      Result[questionNum].cell === "Correct";
      return "Correct";
    } else {
      // console.log(`Question ${questionNum} is Incorrect`);
      Result[questionNum].cell === "Incorrect";
      return "Incorrect";
    }
  }
}

function log() {
  let i = 0;
  while (i <= 21) {
    Result[i].cell = Verify(i);
    console.log(i + "." + Result[i].cell);
    i++;
  }
}

if (page == 1) {
  page1.style.display = "block";
  page2.style.display = "none";
} else if (page == 2) {
  page2.style.display = "block";
  page1.style.display = "none";
}

function gradeC() {
  let n = 1;
  while (n <= 20) {
    if (Result[n].cell == "Correct") {
      Correct++;
    } else {
      Incorrect++;
    }
    n++;
  }
  console.log(`Correct: ${Correct}/20`);
  console.log(`Incorrect: ${Incorrect}/20`);
}

function displayResults() {
  score.innerHTML = Correct + "/20";
  console.log(Correct + "/20");
  Pscore.innerHTML = Math.round(100 * (Correct / 20)) + "%";
  console.log(Math.round(10 * (Correct / 20)));
}

function append() {
  let r = 1;
  while (r <= 20) {
    let li = document.createElement("li");

    if (Result[r].cell == "Correct") {
      li.className = "correct";
    } else {
      li.className = "incorrect";
    }

    document.getElementById("finalDisplay").appendChild(li);

    let h3_1 = document.createElement("h3");
    let h3_2 = document.createElement("h3");
    let h3_3 = document.createElement("h3");

    h3_1.innerHTML = Questions[r].question;

    //Finding Answers
    if (Questions[r].answer == "A") {
      h3_2.innerHTML = `Correct Answer: ${Questions[r].la}`;
    } else if (Questions[r].answer == "B") {
      h3_2.innerHTML = `Correct Answer: ${Questions[r].lb}`;
    } else if (Questions[r].answer == "C") {
      h3_2.innerHTML = `Correct Answer: ${Questions[r].lc}`;
    } else if (Questions[r].answer == "D") {
      h3_2.innerHTML = `Correct Answer: ${Questions[r].ld}`;
    }

    if (memory[r].PA == "A") {
      h3_3.innerHTML = `Your Answer: ${Questions[r].la}`;
    }
    if (memory[r].PA == "B") {
      h3_3.innerHTML = `Your Answer: ${Questions[r].lb}`;
    }
    if (memory[r].PA == "C") {
      h3_3.innerHTML = `Your Answer: ${Questions[r].lc}`;
    }
    if (memory[r].PA == "D") {
      h3_3.innerHTML = `Your Answer: ${Questions[r].ld}`;
    }

    li.appendChild(h3_1);
    li.appendChild(h3_2);
    li.appendChild(h3_3);

    r++;
  }
}

function restart() {
  location.reload();
}
//Insults-------------------Insults--------------------Insults//

//from 0 to 3

function one() {
  let o;
  o = Math.round(Math.random() * 2);

  switch (o) {
    case 0:
      return "🐕💧You're Dog Water";
      break;
    case 1:
      return "😔Such a Disappointment";
      break;
    case 2:
      return "😡You Infuriate Me";
      break;
  }
}

//from 3 to 6
function two() {
  let t;
  t = Math.round(Math.random() * 2);

  switch (t) {
    case 0:
      return "Pathetic";
      break;
    case 1:
      return "😡I can't stand your Performance";
      break;
    case 2:
      return;
      "You're Weak, Just like the rest of your people, they did not Deserve to exist in this world in MY world, prepare to joi them, prepare to DIE";
      break;
  }
}

//from 6 to 9
function three() {
  let th;
  th = Math.round(Math.random() * 2);

  switch (th) {
    case 0:
      return "I tolerate your lack of intellect...NO MORE!!";
      break;
    case 1:
      return "🚫🧠I once believed you had a brain";
      break;
    case 2:
      return "You make it hard to hope for your prevail📉";
      break;
  }
}

//from 9 to 12
function four() {
  let f;
  f = Math.round(Math.random() * 2);

  switch (f) {
    case 0:
      return "Unacceptable";
      break;
    case 1:
      return "🤯Use your head";
      break;
    case 2:
      return "One day...";
      break;
  }
}

//from 12 to 15
function five() {
  let fi;
  fi = Math.round(Math.random() * 2);

  switch (fi) {
    case 0:
      return "Nice Try";
      break;
    case 1:
      return "Next time...Hopefully";
      break;
    case 2:
      return "Bad";
      break;
  }
}

//from 15 to 18
function six() {
  let s;
  s = Math.round(Math.random() * 2);

  switch (s) {
    case 0:
      return "Not bad";
      break;
    case 1:
      return "Push yourself harder next time";
      break;
    case 2:
      return "I believe you have a bright future";
      break;
  }
}

//18 - 19
function seven() {
  let se;
  se = Math.round(Math.random() * 2);

  switch (se) {
    case 0:
      return "Great Job✅";
      break;
    case 1:
      return "🎇You're results are Amazing🎇";
      break;
    case 2:
      return "🔥Now...you see the outcome of your GREAT work";
      break;
  }
}

//best
function eight() {
  let e;
  e = Math.round(Math.random() * 2);

  switch (e) {
    case 0:
      return "✅🔥Perfection🔥✅";
      break;
    case 1:
      return "🏹🎯✅Unparralleled Precision🔥🔥🔥";
      break;
    case 2:
      return "Great work, You got the BEST score!⭐️⭐️⭐️";
      break;
  }
}
