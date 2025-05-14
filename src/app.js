import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

  //write your code here

  const sujeto = ["Mi tarea", "Spiderman", "Yugoslavia", "El Socialismo del siglo XXI"];
  const verbo = ["me impidio", "dejo de", "se comio", "se encargo"];
  const predicado = ["tener alguna utilidad", "continuar con mis objetivos", "se comio a mi perro", "se desintegro"];

  function generator() {
    const exSujeto = sujeto[Math.floor(Math.random() * sujeto.length)];
    const exVerbo = verbo[Math.floor(Math.random() * verbo.length)];
    const exPredicado = predicado[Math.floor(Math.random() * predicado.length)];

    const excuse = `${exSujeto} ${exVerbo} ${exPredicado}`;
    document.getElementById("excuse").textContent = excuse
  }

  window.onload = generator