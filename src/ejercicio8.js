let edad = 20;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;

if (edad < 18){
    tarifaBase = tarifaBase * 0.8;
} else if (edad >= 65){
    tarifaBase = tarifaBase * 0.6;
} else{
    tarifaBase = tarifaBase;
}

console.log(tarifaBase);













