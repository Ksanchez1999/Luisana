const frases = ["Eres muy importante para mí.",
"Te quiero.",
"Te extraño.",
"Tu felicidad es mi prioridad.",
"Aking tiene nuevo papá.",
"Muestro mi cariño de forma poco común.",
"Eres mi princesa.",
"Eres mi novia.",
"Eres fuerte.",
"Eres valiente.",
"Eres mi persona favorita.",
"Siempre estaré presente en estos escritos.",
"Estoy para protegerte.",
"Voy a cuidarte.",
"Te quiero.",
"Te quiero, ¿ya lo había dicho?.",
"Yo también te extraño.",
"Yo también te extraño.",
"Yo también te extraño.",
"Yo tambien te extraño.",
"Eres mi ingeniero favorito.",
"Demuestras cada día tener buenos valores.",
"Crearemos una historia de éxito juntos.",
"Eres muy inteligente.",
"Eres muy interesante.",
"...",
"Eres mi consentida.",
"Eres pieza fundamental en tu trabajo.",
"Tienes un cuerpo de modelo.",
"Tienes una mente brillante.",
"Quiero abrazarte.",
"Tienes una inteligencia envidiable.",
"Estoy orgulloso de ti.",
"Eres mi niña de buenos valores.",
"Pienso mucho en ti.",
"Eres toda una deportista.",
"Das todo de ti en el gym, eso es admirable.",
"Nuestro primer mes <3 (6/11/2024).",
];

const contenedorFrase = document.getElementById("contenedorFrase");
const activador = document.getElementById("activador");

contenedorFrase.style.display = "none";

const maquinaDeEscribir = (texto, tiempo = 180) => {
    contenedorFrase.style.display = "";
    activador.style.display = "none";
    let arrayDeCaracteres = texto.split("");
    let contador = 0;
    let escribir = setInterval(() => {
        let caracter = arrayDeCaracteres[contador] === " " ? "<span style='color: transparent;'>.</span>" : arrayDeCaracteres[contador];
        contenedorFrase.innerHTML += caracter;
        contador++;
        if (contador === arrayDeCaracteres.length) {
            clearInterval(escribir);
            
            setTimeout(()=>{
                contenedorFrase.innerHTML = "";
                contenedorFrase.style.display = "none";
                activador.style.display = "";
            },2000)
        }
    }, tiempo);
}

activador.addEventListener("click", () => {
    let indiceAleatorio = Math.floor(Math.random() * frases.length);
    maquinaDeEscribir(frases[indiceAleatorio]);
});
