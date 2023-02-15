//Array quqe contendrá los números aleatorios.
let imagenes = [];

function generarParejas(cantidadParejas) {
  for (i = 1; i <= cantidadParejas; i++) {
    //añadimos al array el número dos veces
    imagenes.push(i);
    imagenes.push(i);
  }
  //Sort es una funcion que ordene los numeros de menor a mayor.
  //recibe como parametro otra funcion y retorna un numero aleatorio enttre -0.5 - 0.5 y desordena el array aleatoriamente cadda vez que se ejecuta.
  imagenes.sort(function () {
    return Math.random() - 0.5;
  });
}
//Llamamos generarParejas y le pasamos como parametro 10 al haber 2 .push, el tamaño del array será de 20
generarParejas(10);
//mostramos el array desordenado
console.log(imagenes);

function CrearTarjetas() {
  let contImagenes = document.querySelector("#imagenes");
  for (let i = 0; i < imagenes.length; i++) {
    let img = document.createElement("img");
    img.classList = "imagen";
    img.setAttribute("data-valor", +imagenes[i]);
    img.setAttribute(
      "src",
      "https://via.placeholder.com/100x150/green/222222?text=?"
    );
    contImagenes.append(img);
  }
  InteraccionTarjeta();
}
CrearTarjetas();

let contador = [];

function InteraccionTarjeta() {
  let cartas = document.querySelectorAll(".imagen");

  const btn_reiniciar = document.querySelector("#f-5");

  cartas.forEach((carta, index) => {
    let pepito = imagenes[index];
    carta.addEventListener("click", () => {
      carta.setAttribute(
        "src",
        "https://via.placeholder.com/100x150/green/222222?text=" + pepito
      );

      carta.classList.add("volteada");
      let volteadas = document.querySelectorAll(".volteada");

      if (volteadas.length === 2) {
        if (volteadas[0].dataset.valor === volteadas[1].dataset.valor) {
          volteadas.forEach((tarjetaVolt) => {
            tarjetaVolt.classList.remove("volteada");
            tarjetaVolt.style.pointerEvents = "none";
            contador.push(tarjetaVolt.dataset.valor);
          });
        } else {
          volteadas.forEach((tarjetaVolt) => {
            tarjetaVolt.classList.remove("volteada");
            setTimeout(() => {
              tarjetaVolt.setAttribute(
                "src",
                "https://via.placeholder.com/100x150/green/222222?text=?"
              );
            }, 1000);
          });
        }
        if (contador.length === 20) {
          alert("Ganaste");
          btn_reiniciar.addEventListener("onclick", () => {
            location.reload();
          });
        }
      }
    });
  });
}
