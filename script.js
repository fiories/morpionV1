let joueur1 = true;//empeche de jouer de fois de suite ,true au joueur de jouer
let nbtour=0;
let niveau = "facile";
let pcajouer = false;//empeche le pc de jouer de fois de suite, true pc a jouer une case
let victoireRouge = false;
let victoireBleu = false;


function fin() {
  nbtour++;
  console.log("nbtour : "+nbtour);
  if (nbtour > 8) {console.log("partie finie");alert("partie finie");return true;}
    
  else return false;
} //function
function sleep() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}
async function myFunction(caseid) {
  console.log("caseid : " + caseid);
  if (document.querySelector("#A" + caseid).style.backgroundColor === "white" && victoireRouge == false && victoireBleu == false && joueur1===true) {
    document.querySelector("#A" + caseid).style.backgroundColor = "red";
    joueur1 = false;
    
  
  
  await sleep();// Attendre 2 secondes (1s)
  


    testUneLigneVictoire("a");
    testUneLigneVictoire("b");
    testUneLigneVictoire("c");
    testUneLigneVictoire("d");
    testUneLigneVictoire("e");
    testUneLigneVictoire("f");
    testUneLigneVictoire("g");
    testUneLigneVictoire("h");
    if (!fin()){
      pcajouer = false;
      niveau === "facile" ? facile() : niveau === "moyen" ? moyen() : difficile();
        nbtour++;
        joueur1 = true;
        testUneLigneVictoire("a");
        testUneLigneVictoire("b");
        testUneLigneVictoire("c");
        testUneLigneVictoire("d");
        testUneLigneVictoire("e");
        testUneLigneVictoire("f");
        testUneLigneVictoire("g");
        testUneLigneVictoire("h");
      } // if facile
  }//if case blanche
} // function

function testUneLigneVictoire(indice) {
  // console.log(document.querySelectorAll('.a').length);
  let winred = true;
  let winblue = true;
  document.querySelectorAll("." + indice).forEach((element) => {
    if (element.style.backgroundColor == "red" && winred == true) {
    } else winred = false;
    if (element.style.backgroundColor == "blue" && winblue == true) {
    } else winblue = false;
  });
  if (winred == true) {nbtour=9;alert("victoire rouge");}
  if (winblue == true) {nbtour=9;alert("victoire bleu");}
} //function testUneLigneVictoire(indice){


function testUneLigne(indice,color) {
  
  let nbred = 0;
  let nbblue = 0;
  document.querySelectorAll("." + indice).forEach((element) => {
    if (element.style.backgroundColor == "red") {nbred++;nbblue=-1;}
    if (element.style.backgroundColor == "blue" ) {nbblue++;nbred=-1;}
  });
  if (color === "blue" && nbblue === 2) {
    document.querySelectorAll("." + indice).forEach((element) => {
      if (element.style.backgroundColor == "white"){
        element.style.backgroundColor = "blue";
      pcajouer = true;
      }
    });
  }
  if (color === "red" && nbred === 2) {
    document.querySelectorAll("." + indice).forEach((element) => {
      if (element.style.backgroundColor == "white"){
        element.style.backgroundColor = "blue";
      pcajouer = true;
      }
    });
  }
} //function testUneLigne(indice){

function facile() {
  let rand;
  do {
    rand = Math.ceil(Math.random() * 9) - 1;
    //console.log(rand);
  } while (
    document.querySelector("#A" + rand).style.backgroundColor != "white"
  ); //while
  document.querySelector("#A" + rand).style.backgroundColor = "blue";
} //function

function moyen() {
  
  if(!pcajouer)testUneLigne("a","blue");
  if(!pcajouer)testUneLigne("b","blue");
  if(!pcajouer)testUneLigne("c","blue");
  if(!pcajouer)testUneLigne("d","blue");
  if(!pcajouer)testUneLigne("e","blue");
  if(!pcajouer)testUneLigne("f","blue");
  if(!pcajouer)testUneLigne("g","blue");
  if(!pcajouer)testUneLigne("h","blue");

  if(!pcajouer)testUneLigne("a","red");
  if(!pcajouer)testUneLigne("b","red");
  if(!pcajouer)testUneLigne("c","red");
  if(!pcajouer)testUneLigne("d","red");
  if(!pcajouer)testUneLigne("e","red");
  if(!pcajouer)testUneLigne("f","red");
  if(!pcajouer)testUneLigne("g","red");
  if(!pcajouer)testUneLigne("h","red");
  if(!pcajouer)facile();
  console.log("moyen");
} //function
function difficile() {
  console.log("difficile");
} //function