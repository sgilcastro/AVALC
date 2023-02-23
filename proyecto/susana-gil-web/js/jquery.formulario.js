$(document).ready(function(){
    $("#envio-urgente").validate({
        rules: {
            name : {
                required: true,
                minlength: 3
            },
            telefono: {
                required: true,
                number: true,
                minlength: 9
            },
            email: {
                required: true,
                email: true
            },
            consulta: {
                required: true,
                minlength: 15
            }
        },

        messages : {
            name: {
                required: "\<span class\=\"obligado\"\>* \</span>  Por favor, introduce tu nombre para poder dirigirnos a tí.",
                minlength: "\<span class\=\"obligado\"\>* \</span>  Debes introducir nombre y apellido."
            },
            telefono: {
                required: "\<span class\=\"obligado\"\>* \</span>  Por favor, introduce tu teléfono para que podamos contactar contigo.",
                number: "\<span class\=\"obligado\"\>* \</span>  El teléfono debe tener al menos 9 cifras sin espacios.",
                minlength: "\<span class\=\"obligado\"\>* \</span>  El teléfono debe tener al menos 9 cifras sin espacios."
            },
                email: {
                required: "\<span class\=\"obligado\"\>* \</span> Es necesario introducir tu email para que podamos contactar contigo.",
                email: "\<span class\=\"obligado\"\>* \</span>  El email debe tener el siguiente formato: abc@dominio.com."
            },
                consulta: {
                required: "\<span class\=\"obligado\"\>* \</span>  Debes explicarnos algo de tu caso para poderte ayudar.",
                minlength: "\<span class\=\"obligado\"\>* \</span>   Debes explicarnos algo de tu caso para poderte ayudar."
            }
        }
    });
});