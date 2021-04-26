$("#enviar").click(function() {

    function validar_correo(correo) {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(correo)
    }

    if ($("#nombre").val().length < 3) {
        $("#mensaje1").show();
    } else {
        $("#mensaje1").hide();
    }
    if ($("#apellido").val().length < 7) {
        $("#mensaje2").show();
    } else {
        $("#mensaje2").hide();
    }
    if (validar_correo($("#correo").val())) {
        $("#mensaje3").hide();
    } else {
        $("#mensaje3").show();
    }
    if ($("#consulta").val() == 0 || $("#consulta").val() == 0) {
        $("#mensaje4").show();
    } else {
        $("#mensaje4").hide();
    }
    if ($("#mensaje").val().length < 20) {
        $("#mensaje5").show();
    } else {
        $("#mensaje5").hide();
    }
})
$("#limpiar").click(function() {
    $(".errores").hide();
})