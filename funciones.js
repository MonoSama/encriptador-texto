
  

function Encriptar(){

    let texto_capturado=document.getElementById("texto_encriptar").value;

    texto_cap_no_espacio=texto_capturado.trim();
    let textoConvertido=texto_cap_no_espacio
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
    
    console.log(textoConvertido);
    document.getElementById('texto_desencriptar').innerHTML=textoConvertido;
}

function Desencriptar(){
    let texto_capturado=document.getElementById("texto_encriptar").value;
    texto_cap_no_espacio=texto_capturado.trim();
    let textoConvertido=texto_cap_no_espacio
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
    console.log(textoConvertido);
    document.getElementById("texto_desencriptar").innerHTML=textoConvertido;
}


function Copiar() {

    let textoADuplicar = document.getElementById("texto_desencriptar").innerText;

    if (!navigator.clipboard) {
        console.error("El navegador no soporta el API del portapapeles.");
        return;
    }

    navigator.clipboard.writeText(textoADuplicar)
        .then(() => {
            console.log("Texto copiado al portapapeles correctamente.");
        })
        .catch((error) => {
            console.error("Error al copiar el texto al portapapeles:", error);
        });
}
