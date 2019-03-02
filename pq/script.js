let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", processResults);

let divContainer = document.getElementById("hidelater");

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetQuiz);

let resultArea = document.getElementById("result");

function processResults() {
  let personalityResult = getPersonality();
  divContainer.style.visibility = "hidden";
  console.log(personalityResult);

  resultArea.innerHTML = personalityResult + " compatible as friends.";

  function getPersonality() {
    let aAnswer = document.querySelector('input[name="anime"]:checked');
    let aAnswer2 = aAnswer.id;
    console.log(aAnswer2);
    let rAnswer = document.querySelector('input[name="reading"]:checked');
    let rAnswer2 = rAnswer.id;
    console.log(rAnswer2);
    let mAnswer = document.querySelector('input[name="music"]:checked');
    let mAnswer2 = mAnswer.id;
    console.log(mAnswer2);
    let cAnswer = document.querySelector('input[name="class"]:checked');
    let cAnswer2 = cAnswer.id;
    console.log(cAnswer2);
    let tAnswer = document.querySelector('input[name="time"]:checked');
    let tAnswer2 = tAnswer.id;
    console.log(tAnswer2);
    let toAnswer = document.querySelector('input[name="tofu"]:checked');
    let toAnswer2 = toAnswer.id;
    console.log(toAnswer2);

    let totalPoints = 0;
    let returnValue;

    totalPoints = animeObject[aAnswer2] + readingObject[rAnswer2] +
        musicObject[mAnswer2] + classObject[cAnswer2] + timeObject[tAnswer2]
        + tofuObject[toAnswer2];

    aAnswer.checked = false;
    rAnswer.checked = false;
    mAnswer.checked = false;
    cAnswer.checked = false;
    tAnswer.checked = false;
    toAnswer.checked = false;

    if (totalPoints <= 12) {
      returnValue = "No, we are not";
    } else if (totalPoints <= 16) {
      returnValue = "MAYBE we are";
    } else if (totalPoints < 20) {
      returnValue = "Sure, we are";
    } else {
      returnValue = "YES, we are";
    }

    return returnValue;
  }
}

function resetQuiz() {
  resultArea.innerHTML = "";
  divContainer.style.visibility = "visible";
}

let animeObject = {
  q1c1: 3,
  q1c2: 1,
  q1c3: 2,
  q1c4: 4
}

let readingObject = {
  q2c1: 2,
  q2c2: 4,
  q2c3: 3,
  q2c4: 1
}

let musicObject = {
  q3c1: 3,
  q3c2: 2,
  q3c3: 4,
  q3c4: 1
}

let classObject = {
  q4c1: 1,
  q4c2: 3,
  q4c3: 4,
  q4c4: 2
}

let timeObject = {
  q5c1: 2,
  q5c2: 4,
  q5c3: 1,
  q5c4: 3
}

let tofuObject = {
  q6c1: 4,
  q6c2: 2,
  q6c3: 1,
  q6c4: 3
}
