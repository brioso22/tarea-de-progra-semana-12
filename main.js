$("p").css("color","green"); 
$("#eje2").hide();

$("#btn").ready(function(){
    $("#btn").click(function(event){
       
        $("#eje2").show();
    });
});


$("#btn2").ready(function(){
    $("#btn2").click(function(event){
       
        $("#eje3").text("ejercicio completado pongame 10")
    });
});
$("ul").css("background-color","skyblue");
$("#con").slideUp();
$(document).ready(function(){
    $("#btn3").click(function(){
        $("#con").slideDown();
    });
});

$(document).ready(function() {
    $("#solicitar").click(function(e) {
        e.preventDefault(); // Evitar que el formulario se envíe

        // Recopilar datos del formulario
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var correo = $("#correo").val();
        var telefono = $("#telefono").val();
        var cede = $("#cede").val();
        var modalidad = $("#modalidad").val();
        var carrera = $("#carrera").val();
        var metodo = $("#metododecontacto").val();

        // Crear un nuevo elemento de párrafo con los datos recopilados
        var datosParrafo = $("<p>").text("Nombre: " + nombre + ", Apellido: " + apellido + ", Correo: " + correo + ", Teléfono: " + telefono + ", Cede: " + cede + ", Modalidad: " + modalidad + ", Carrera: " + carrera + ", Método de contacto: " + metodo);

        // Agregar el párrafo con los datos al contenedor en el HTML
        $("#datos").html(datosParrafo);
    });
});

