const botonIngresar = document.getElementById('botonIngresar');
const password = document.getElementById('passwordLab');
const botonCifrar = document.getElementById("boton cifrar");
const botonDescifrar = document.getElementById('boton descifrar');
const botonLimpiar = document.getElementById("limpia");
let intentos = 0;

botonIngresar.addEventListener('click',()=>{
        if (password.value =="LABORATORIA"){
            document.getElementById('primera pantalla').classList.add('hide');
            document.getElementById('tercera pantalla').classList.remove('hide');
        }
        else {

            if(password != "LABORATORIA" && intentos ==2){
                document.getElementById('primera pantalla').classList.add('hide');
                document.getElementById('segunda pantalla').classList.remove('hide');
        }else{
            document.getElementById("incorrecto").innerHTML="Contraseña errónea, intenta otra vez";
            password.value="";
            intentos++;
         }
    }
});
//Cifrado
botonCifrar.addEventListener('click',()=>{	
const texto = document.getElementById("texto").value;
let clave= parseInt(document.getElementById("desplazamiento").value);
  let result = "";
  for (var i = 0; i < texto.length; i++) {
    var c = texto.charCodeAt(i);
    if (65 <= c && c <=  90)
      result += String.fromCharCode((c - 65 + clave) % 26 + 65);  
    else if (97 <= c && c <= 122)
      result += String.fromCharCode((c - 97 + clave) % 26 + 97);  
    else
      result += texto.charAt(i);  
  }
    console.log(result);
    document.getElementById("texto convertido").value = result.toUpperCase();
});

botonLimpiar.addEventListener('click',()=>{
	document.getElementById("texto").value = " ";
  document.getElementById("texto convertido").value =" ";
  
   });

   //Descifrado
botonDescifrar.addEventListener('click',()=>{
const texto = document.getElementById('texto').value;
let clave = parseInt(document.getElementById('desplazamiento').value);
  let result = "";
  for (var i = 0; i < texto.length; i++) {
    var c = texto.charCodeAt(i);
    if (65 <= c && c <=  90)
      result += String.fromCharCode((c + 65 - clave) % 26 + 65);  
    else if (97 <= c && c <= 122)
      result += String.fromCharCode((c + 97 - clave) % 26 + 97);  
    else
      result += texto.charAt(i);  
  }
    console.log(result);
    document.getElementById("texto convertido").value = result.toUpperCase();
});









