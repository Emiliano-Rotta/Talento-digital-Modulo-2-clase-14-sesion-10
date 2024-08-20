$(document).ready(function(){
    $("#agregarItem").click(function(){
        var nuevoItem = $("#nuevoElemento").val();
        if(nuevoItem){
            $("#miLista").append("<li>" + nuevoItem + "</li>")
            $("#nuevoElemento").val("");
        }
    })
    $("#solLuna").click(function(){
        $("body").toggleClass("claro oscuro")
    })
    $("#eliminarTodo").click(function(){
        $("#miLista").remove() //con esto lo removemos con hide lo ocultamos
    })
});