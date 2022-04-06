let descargarJuego = prompt("Hola! Deseas descargar el juego?");
descargarJuego = descargarJuego.toLowerCase();
if (descargarJuego == "si" || descargarJuego == "SI"){
    prompt("Para Android, iOS o Nintendo?");
}
//despues quise hacer que aparezca otro prompt para elegir la plataforma y a continuacion que apareza el link correspondiente, pero no logre hacerlo :(
else if (descargarJuego == "no" || descargarJuego == "NO"){
    alert("okay! de todas formas te invitamos a visitar nuestro sitio web :)");
}

for (let i = 0; i <= 10; i++) {
    console.log(i);
}


//acá quisiera hacer algo que calcule los días necesarios de farmeo para alcanzar x cantidad de velas, a 12 velas por día. Como una regla de tres