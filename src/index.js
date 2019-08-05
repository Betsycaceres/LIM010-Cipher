const botonIngresar = document.getElementById('botonIngresar');
const password = document.getElementById('passwordLab');
const botonCifrar = document.getElementById("boton_cifrar");
const botonDescifrar = document.getElementById('boton_descifrar');
const botonLimpiar = document.getElementById("limpia");
let intentos = 0;

botonIngresar.addEventListener('click',()=>{
        if (password.value =="LABORATORIA"){
            document.getElementById('primera_pantalla').classList.add('hide');
            document.getElementById('tercera_pantalla').classList.remove('hide');
        }else{

            if(password != "LABORATORIA" && intentos ==2){
                document.getElementById('primera_pantalla').classList.add('hide');
                document.getElementById('segunda_pantalla').classList.remove('hide');
        }else{
            document.getElementById("incorrecto").innerHTML="Contraseña errónea, intenta otra vez";
            password.value="";
            intentos++;
         }
    }
});
//Cifrado

botonCifrar.addEventListener('click',()=>{
    let clave= parseInt(document.getElementById("desplazamiento").value);
    const texto = document.getElementById("texto").value;
    const cifradoFinal =cipher.encode(clave,texto);
    document.getElementById('texto_convertido').value= cifradoFinal;
});

//boton limpiar
botonLimpiar.addEventListener('click',()=>{
    document.getElementById("texto").value = " ";
    document.getElementById("texto_convertido").value =" ";
});

//Descifrado
 botonDescifrar.addEventListener('click',()=>{
    let clave = parseInt(document.getElementById('desplazamiento').value);
    const texto = document.getElementById('texto').value;
    const descifraDofinal = cipher.decode(clave,texto);
    document.getElementById('texto_convertido').value = descifraDofinal ;
    });
  








