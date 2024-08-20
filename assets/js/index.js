//Esto con JS

// var h1 = document.querySelector("#titulo")
// var btn = document.querySelector("#btn-cambio")

// var cambioColor = () => {
//     h1.style.color = "red"
// }


// btn.onclick = cambioColor

//JQuery

// $(document).ready(function () {  // -->esto engloba todo

//     var cambioColor = () => {
//         $("#titulo").css("color", "red")
//     }
//     $("#btn-cambio").click(cambioColor);

// });

//Ejercicio 2
$(document).ready(function () {
    var ocultar = () => {
        $("#parrafo").hide();
    }
    var mostrar = () => {
        $("#parrafo").show();
    }
    $("#btn-ocultar").click(ocultar)
    $("#btn-mostrar").click(mostrar)
})

