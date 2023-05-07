let numeroAmigos = prompt("¿Cuántos amigos van a asistir a la cena?");
let costoTotal = prompt("¿Cuál es el costo total de la cena y las bebidas?");

let costoPorAmigo = costoTotal / numeroAmigos;
let dineroTotal = 0;

for (let i = 1; i <= numeroAmigos; i++) {
  let respuesta = prompt(`Amigo ${i}, ¿cuánto dinero estás dispuesto a pagar?`);
  let dinero = parseInt(respuesta);
  if (dinero >= costoPorAmigo) {
    dineroTotal += dinero;
  } else {
    alert(`Lo siento amigo ${i}, necesitamos que pagues al menos $${costoPorAmigo} para cubrir los gastos.`);
    i--;
  }
}

let dineroFaltante = costoTotal - dineroTotal;
if (dineroFaltante <= 0) {
  alert("¡Gracias a todos por su contribución, la cena está cubierta!");
} else {
  alert(`Aún faltan $${dineroFaltante} por cubrir. ¿Podrías contribuir un poco más?`);
}
*/

// alert("bienvenido a: a la romana app");

// function dinero_por_amigo(num_amigos, costo_total) {
//   let costo_por_amigo = costo_total / num_amigos;
//   let dinero_total = 0;

//   function check_monto(minimo) {
//     let pregunta_inicial = prompt(
//       "Amigo " + (i + 1) + " ¿cuánto podés poner ?"
//     );
//     let respuesta = parseInt(pregunta_inicial);
//     while (respuesta < minimo) {
//       alert("Lo siento amigo " + i + " necesitamos que pagues al menos " + minimo + " para cubrir los gastos.");
//       // alert(`Lo siento amigo ${i} Necesitamos que pagues al menos ${minimo} para cubrir los gastos.`);
//       let pregunta = prompt("Amigo " + (i + 1) + " ¿cuánto podés poner ?");
//       respuesta = parseInt(pregunta);
//     }
//     return respuesta;
//   }

//   for (let i = 0; i < num_amigos; i++) {
//     let dinero = check_monto(costo_por_amigo);
//     return dinero;
//   }

//   return dinero_total;
// }

// let num_amigos = prompt("¿Cuántos amigos son a cenar?");
// let costo_total = prompt("¿Cuál es el costo total de la cena?");
// let dinero_total = dinero_por_amigo(num_amigos, costo_total);

// let faltante = costo_total - dinero_total;
// if (faltante <= 0) {
//   alert("¡A comerrrr, la cena está cubierta!");
// } else {
//   alert(
//     "Aún faltan" + faltante + "por cubrir. ¿Podrías contribuir un poco más?"
//     );
//   }

//   console.log(" el total recaudado es " + dinero_total);
//   console.log(" el resto es  " + (dinero_total - costo_total));

// Primero le digo a todos cuanto es el total, cuanto es por cabeza y le pregunto cuanto quiere o puede poner.
// Cada respuesta la anoto como viene y resto el monto del total.
// Cada vez que vuelvo a preguntar paso el monto total y actualizo el monto por cabeza a los que quedan poner.
// Cuando llego al último le paso el monto total y cuanto queda por cubrir.

function calculoRomana(numAmigos, costoCena) {
  let montoRecaudado = 0;
  
  function rondaDeDinero(numAmigos, costoCena) {
    let montoRonda = 0;
    for (let i = 0; i < numAmigos; i++) {
      const dineroFaltante = costoCena - montoRonda
      // const comenzal = prompt("Hola amigo: " + (i + 1) + " la cena costo " + parseInt(costoCena) + " y todavía falta poner " + dineroFaltante + " entre " + (numAmigos - i) + ". Cuanto podes poner vos?")
      const comenzal = prompt(`Hola amigo: ${i + 1} la cena costo ${parseInt(costoCena)} y todavía falta poner ${dineroFaltante} entre ${numAmigos - i}. Cuanto podes poner vos?`);
      console.log("🚦 montoRecaudado: ", montoRonda);
      montoRonda = montoRonda + parseInt(comenzal);
    }
    if (montoRonda < costoCena) {
      alert("No llegamos a cubrir el costo: Vamos de nuevo.");
    }
    return montoRonda;
  }

  // Si no alcanza mando alerta "No llegamos a cubrir el costo: Vamos de nuevo." Y vuelvo a preguntar a todos cuanto quieren poner.
  while (montoRecaudado < costoCena) {
    montoRecaudado = rondaDeDinero(numAmigos, costoCena);
    console.log("🚦 montoRecaudado en while: ", montoRecaudado);
  }
  // Si al final de la vuelta alcanza, mando alerta "A comer" y con lo que sobra agrego "Quedo X para propina."
  let propina = montoRecaudado - costoCena
  return alert("Genial, juntamos " + montoRecaudado + ". Y nos quedo " + propina + " para la propina." ); //
}

const numAmigos = prompt("Cuantos somos para cenar?");
const costoCena = prompt("Cuanto costo la cena?");
const montoRecaudado = calculoRomana(numAmigos, costoCena);
const soyUnaRondaSola = rondaDeDinero(numAmigos, costoCena);

