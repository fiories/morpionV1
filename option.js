let tailleDaffichage = "petit";
document.getElementById("idTailleDaffichage").addEventListener("click", function (event) {
    if (event.target.name === "radioTailleDaffichage") {
      switch (event.target.value) {
        case "petit":
            document.querySelectorAll(".AA").forEach((element) => {element.style.width = "100px";element.style.height = "100px";});
            break;
        case "moyen":
            document.querySelectorAll(".AA").forEach((element) => {element.style.width = "150px";element.style.height = "150px";});
            break;
        case "grand":
            document.querySelectorAll(".AA").forEach((element) => {element.style.width = "200px";element.style.height = "200px";});
            break;    
      }
    }
  });
  document.getElementById("idDificulte").addEventListener("click", function (event) {
    if (event.target.name === "radioDificulte") {
      switch (event.target.value) {
        case "facile":
            niveau="facile";
            console.log("facile");
            break;
        case "moyen":
            niveau="moyen";
            console.log("moyen");
             break;
        case "difficile":
            niveau="difficile";
            console.log("difficile");
            break;    
      }
    }
  });


restart();
function restart() {
    console.log("restart");
    joueur1 = true;
    nbtour = 0;
    victoireRouge = false;
    victoireBleu = false;
  document.querySelectorAll(".AA").forEach((element) => {
    element.style.backgroundColor = "white";
  });
}