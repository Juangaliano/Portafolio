document.addEventListener("DOMContentLoaded", function () {
  const inputName = document.querySelector("#name");
  const inputEmail = document.querySelector("#email");
  const inputMenssage = document.querySelector("#message");
  const formulario = document.querySelector("#formulario");
  const btnEnviar = document.querySelector('#enviar')

  inputName.addEventListener("blur", Validar);

  inputEmail.addEventListener("blur", Validar);

  inputMenssage.addEventListener("blur", Validar);

  //Validamos que un campo no este vacio
  function Validar(e) {
    console.log(e.target.parentElement);
    if (e.target.value.trim() === "") {
      //console.log("Esta vacio");
      mostarAlerta(
        `The ${e.target.id} field is required`,
        e.target.parentElement
      );
      return;
    }
    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostarAlerta("The email is not valid", e.target.parentElement);
      return;
    }
    limpiarAlerta(e.target.parentElement);
  }

  //Creamos la funcion Alerta
  function mostarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("mensaje-error");

    referencia.appendChild(error);
  }

  //Funcion de limpiar alerta
  function limpiarAlerta(referencia) {
    //Comprueba si ya existe esa alerta
    const alerta = referencia.querySelector(".mensaje-error");
    if (alerta) {
      alerta.remove();
    }
  }

  //Funcion validar email
  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

    btnEnviar.addEventListener("click", function (e) {
      e.preventDefault();
      Swal.fire({
        title: "Success!",
        text: "Email sent successfully",
        icon: "success",
        confirmButtonText: "Ok",
      });
    });


});


