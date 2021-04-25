$("#enviar").click(function() {
    if ($("#nombre").val().length < 3) {
        $("#mensaje1").show();
    } else {
        $("#mensaje1").hide();
    }
    if ($("#apellido").val().length == 0) {
        $("#mensaje2").show();
    } else {
        $("#mensaje2").hide();
    }
    if ($("#correo").val().length == 0) {
        $("#mensaje3").show();
    } else {
        $("#mensaje3").hide();
    }
    if ($("#consulta :selected")) {
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