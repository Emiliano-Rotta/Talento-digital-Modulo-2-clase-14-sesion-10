$(document).ready(function(){
    $("#btn").click(function(){
        let texto = prompt("escriba un texto") 
        $("#parrafo").text(texto)
    })
})