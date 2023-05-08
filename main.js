//funcion corre para correrla desde el html
function corre() {
  function calculoRomana(numAmigos, costoCena) {
    let montoRecaudado = 0;

    function rondaDeDinero(numAmigos, costoCena) {
      let montoRonda = 0;
      for (let i = 0; i < numAmigos; i++) {
        const dineroFaltante = costoCena - montoRonda;
        const comenzal = prompt(
          "Hola amigo: " +(i + 1) +" la cena costo " +parseInt(costoCena) +" y falta poner " +dineroFaltante +" entre " 
          +(numAmigos - i) + " Cuanto podes poner vos?");

          montoRonda = montoRonda + parseInt(comenzal);
        console.log(" montoRecaudado: ", montoRonda);
        
      }
      if (montoRonda < costoCena) {
        alert("No llegamos a cubrir el costo: Vamos de nuevo.");
      }
      return montoRonda;
    }
    // Si no alcanza mando alerta "No llegamos a cubrir el costo: Vamos de nuevo." Y vuelvo a preguntar a todos cuanto quieren poner.

    while (montoRecaudado < costoCena) {
      montoRecaudado = rondaDeDinero(numAmigos, costoCena);
      console.log(" Total recaudado en la romana: ", montoRecaudado);
    }
    // Si al final de la vuelta alcanza, mando alerta "A comer" y con lo que sobra agrego "Quedo X para propina."
    let propina = montoRecaudado - costoCena;
    return alert("Genial, juntamos " + montoRecaudado + ". Y nos quedo " + propina +" para la propina.");
  }
   // validacion de entrada de datos debe ser un numero y mayor a 2 como minimo, sino alert y va de vuelta  
  let numAmigos = prompt("Cuantos somos para cenar?")
  while(isNaN(numAmigos) || numAmigos<2){
    alert("deben ser al menos dos amigos para la romana")
     numAmigos = prompt(" otra vez Cuantos somos para cenar?")
  }
  
   //validacion de entrada de datos debe ser un numero positivo sino alert y va de nuevo
  let costoCena = prompt("Cuanto costo la cena?");
  while(costoCena<=0){
    alert("el costo debe ser un numero positivo")
     costoCena = prompt(" otra vez Cuanto costo la cena?")
  }

  montoRecaudado = calculoRomana(numAmigos, costoCena);

 }
