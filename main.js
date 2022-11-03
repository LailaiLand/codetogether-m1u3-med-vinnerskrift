//

let log = "";

let lotteryOne = `Kake`;
let lotteryTwo = `Sydentur`;
let lotteryThree = `Ett gratis måltid på McDonald's`;
let lotteryFour = `First Price Cookies`;
let vinnerskrift = document.getElementById('vinnerboks');
let antall1 = 0;
let antall2 = 0;
let antall3 = 0;
let antall4 = 0;

//4 innhold /\

//random-funksjon
function randomOut(designatedDiv) {
  let svar = "";

  if (designatedDiv.innerHTML != "") return;

  svar = Math.floor(Math.random() * 4) + 1;

  console.log(svar);
if(svar == 1) antall1++;
if(svar == 2) antall2++;
if(svar == 3) antall3++;
if(svar == 4) antall4++;
  //lagre svaret
  log += svar;

  designatedDiv.innerHTML = numberToAnswer(svar);
  winner();
}

function numberToAnswer(randomNumber) {
  if (randomNumber == 1) {
    return lotteryOne;
  } else if (randomNumber == 2) {
    return lotteryTwo;
  } else if (randomNumber == 3) {
    return lotteryThree;
  } else if (randomNumber == 4) {
    return lotteryFour;
  }
}
function winner() {
  if(antall1 >= 3) vinnerskrift.innerHTML = 'Kake er digg, kake er din!';
  if(antall2 >= 3) vinnerskrift.innerHTML = 'Si hei til Charter-Svein!';
  if(antall3 >= 3) vinnerskrift.innerHTML = 'Supersize you!!';
  if(antall4 >= 3) vinnerskrift.innerHTML = "Lookie lookie it's a coockie!";
}
