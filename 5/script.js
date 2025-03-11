let fl = "Transfusión de magia pura para el corazón Rímel de miel para corregir la tristeza Tattoo mentalpara marcarse la imaginación Tragos de luz para alegrarse la vida";
let fl2 = fl.toUpperCase();
let fl3 = fl2.replace("MIEL", "SANGRE");

document.getElementById('frase').innerHTML=fl;
document.getElementById('frase2').innerHTML=fl2;
document.getElementById('frase3').innerHTML=fl3;

//console.log(fl.length);
//console.log(fl.at(8));
console.log(fl.toUpperCase());