import { registrarPersona } from "./promesas.js";
window.addEventListener("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar);
})

const registrar = ()=>{
    //Recupero elemento
    let eNombre = document.getElementById("nombre");
    //Recupero valor del elemento
    let vNombre = eNombre.value;
    //Creo un objeto con los datos recuperados
    let objeto = {nombre:vNombre}
    //Envio a una funcion que registre
    console.log(objeto);
    registrarPersona(objeto);
}