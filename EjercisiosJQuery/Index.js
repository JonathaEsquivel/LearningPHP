
$(document).ready(function (){


     //Ejercisio1
    $("div.card-header").addClass("bg-primary text-white");
    //Ejercisio2
    $("div.card-body").addClass("be-light");
    //Ejercisio3

    $("#iNombre").on("change", function (){

       var Nombre = $(this).val()

        ValidarNombre(Nombre);

        $("#nombre").text(Nombre);

        ValidarTodo();
    });
    //Ejercisio4
    $("#iEdad").on("input", function (){

        let Edad = $(this).val();

        this.value = this.value.replace(/[^0-9]/g,'');

        ValidarEdad(Edad);
        ValidarTodo();

    });

    //Ejercisio5
    $("#tDescripcion").on("input", function (){

        let Descripcion = $(this).val();

        ValidarTextArea(Descripcion);
        ValidarTodo();

    });//end funcion

    //Ejercisio6
    $("#cOpciones").on("change",function (){

        if (this.checked){

            $("#opciones").show(1000);

        }else {
            $("#opciones").hide(1000);
        }

    });

    //Ejercisio7
    function ValidarNombre(Nombre){

        if(Nombre.length != 0){
            return true
        }else{
            return false
        }

    }//end funcion

    function ValidarEdad(Edad){

        if (Edad != 0 && Edad != null){
            return true
        }else{
            return false
        }

    }//end funcion

    function ValidarTextArea(Descripcion){

        let min = 15;
        let max = 25;

        let nText = Descripcion.length;


        if (nText >= min && nText <= max){

            $("#vDescripcion").show().text("Es Valido").removeClass("text-danger").addClass("text-success");

            return true
        }
        else{
            $("#vDescripcion").show().text("No es valido").removeClass("text-success").addClass("text-danger");
            return false

        }

    }//end funcion

    function ValidarTodo(){

        NombreVT = $("#iNombre").val();
        EdadVT = $("#iEdad").val();
        Descripcion = $("#tDescripcion").val();

        if (ValidarNombre(NombreVT) == true && ValidarEdad(EdadVT) == true && ValidarTextArea(Descripcion) == true){

            $("#bEnviar").attr('disabled',false);

        }else{
            $("#bEnviar").attr('disabled',true);
        }

    }//end funcion

//Ejercisio8
    $("#formulario").on("submit", function (evento){

        evento.preventDefault()
        console.log("submit")

       let Persona = {

           Nombre: $("#iNombre").val(),
           Edad: $("#iEdad").val(),
           Descripcion: $("#tDescripcion").val()


        }//end objeto
        console.log(Persona)

    })

//Ejercisio9

    function LLamarAjax() {
        $.ajax({
            type: "GET",
            url: "https://dummyjson.com/products/1",
            dataType: "json",
            success: function (data) {
                console.log(data)
                LlenadoTabla(data);
            },
            failure: function (data) {
                alert(data.responseText);
            },
            error: function (data) {
                alert(data.responseText);
            }
        });
    }//end funcion

    LLamarAjax()

//Ejercisio10
    function LlenadoTabla(data){
        console.log(data)
        $("#image").attr("src",data.images[1])
        $("#brand").text(data.brand)
        $("#category").text(data.category)
        $("#desc").text(data.description)
        $("#price").text(data.price)

    }//end funcion


}); //end ready
