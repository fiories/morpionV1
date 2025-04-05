let joueur1 = true;
let nbtour;
let niveau = "facile";
restart();
function restart() {
  joueur1 = true;
  nbtour = 0;
  for (const element of document.querySelectorAll(".AA")) {
    // console.log(element.id);
    element.style.backgroundColor = "white";
  } //for of
} //function
function fin() {
  nbtour++;
  if (nbtour > 8) return false;
  else return true;
} //function

function myFunction(caseid) {
  if (document.querySelector("#A" + caseid).style.backgroundColor === "white") {
    document.querySelector("#A" + caseid).style.backgroundColor = "red";
    joueur1 = false;

    testUneLigne("a");
    testUneLigne("b");
    testUneLigne("c");
    testUneLigne("d");
    testUneLigne("e");
    testUneLigne("f");
    testUneLigne("g");
    testUneLigne("h");
    if (fin())
      if (niveau === "facile") {
        facile();
        testUneLigne("a");
        testUneLigne("b");
        testUneLigne("c");
        testUneLigne("d");
        testUneLigne("e");
        testUneLigne("f");
        testUneLigne("g");
        testUneLigne("h");
      } // if facile
  }
} // function

function testUneLigne(indice) {
  // console.log(document.querySelectorAll('.a').length);
  let winred = true;
  let winblue = true;
  document.querySelectorAll("." + indice).forEach((element) => {
    if (element.style.backgroundColor == "red" && winred == true) {
    } else winred = false;
    if (element.style.backgroundColor == "blue" && winblue == true) {
    } else winblue = false;
  });
  if (winred == true) alert("victoire rouge");
  if (winblue == true) alert("victoire bleu");
} //function testUneLigne(indice){

function facile() {
  let rand;
  do {
    rand = Math.ceil(Math.random() * 9) - 1;
    console.log(rand);
  } while (
    document.querySelector("#A" + rand).style.backgroundColor != "white"
  ); //while
  document.querySelector("#A" + rand).style.backgroundColor = "blue";
} //function
