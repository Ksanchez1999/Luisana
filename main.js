const frases = ["Te quiero muchooooooooooooo",
"Eres mi princesa",
"Pienso mucho en ti",
"Eres alguien muy importante en mi vida",
"Mi cariño no disminuye cuando no hablamos, siempre crece cuando te recuerdo",
"Aunque no esté contigo en este momento, quiero que sepas que siempre estoy pensando en ti",
"Eres muy importante para mí, y aunque no pueda estar siempre contigo, mi cariño por ti no cambia.",
"Tu felicidad es mi prioridad, y siempre haré lo posible para que te sientas querida.",
"Quiero verte (No importa cuando lo leas)",
"Cada segundo lejos de ti me hace saber que nuestro reencuentro será aún más especial.",
"Te quiero ¿Ya lo había dicho?."];

const contenedorFrase = document.getElementById("contenedorFrase");
const activador = document.getElementById("activador");

contenedorFrase.style.display = "none";

const maquinaDeEscribir = (texto, tiempo = 200) => {
    contenedorFrase.style.display = "";
    activador.style.display = "none";
    let arrayDeCaracteres = texto.split("");
    let contador = 0;
    let escribir = setInterval(() => {
        let caracter = arrayDeCaracteres[contador] === " " ? "<span style='color: white;'>.</span>" : arrayDeCaracteres[contador];
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
