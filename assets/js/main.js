var g_tierra = 9.8;
    var g_marte = 3.7;
    var peso = prompt("Ingrese su peso");
    var peso_final;
    peso_final = peso * g_marte / g_tierra;
    peso_final = parseInt(peso_final);
    alert("Tu peso en Marte es igual a: " + peso_final)
