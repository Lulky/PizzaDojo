function pizzaOven (tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza. salsas = salsas;
    return pizza
}
var p1 = pizzaOven("estilo Chicago", "tradicional", ["mozarella"], ["peperoni", "salchicha"])
console.log(p1)
var p2 = pizzaOven("lanzada a mano", "marinara", ["mozarella, feta"], ["champiñones", "aceitunas"])
console.log(p2)
var p3 = pizzaOven("Napolitana", "cheddar", ["parmesano"], ["piña", "tomate"])
console.log(p3)
var p4 = pizzaOven("Barbacoa", "Barbacoa", ["mozarella"], ["carne", "beicon"])
console.log(p4)

// BONUS!!!
function randomPizza() { 
    var pizzarandom = {};
    optipoCorteza = ["estilo Chicago", "lanzado a mano", "Napolitana", "Barbacoa"];
    optipoSalsa= ["tradicional","marinara", "cheddar", "Barbacoa"];
    opquesos= ["Mozarella", "feta", "parmesano", "piña"];
    opsalsas = ["Peperoni", "tomate", "aceitunas", "carne"];

    pizzarandom.tipoCorteza = optipoCorteza[Math.floor(Math.random() * optipoCorteza.length)];
    pizzarandom.tipoSalsa = optipoSalsa[Math.floor(Math.random() * optipoSalsa.length)];
    pizzarandom.quesos = opquesos[Math.floor(Math.random() * opquesos.length)];
    pizzarandom.salsas = opsalsas[Math.floor(Math.random() * opsalsas.length)];
    
    return pizzarandom;
    

}
    var p5 = randomPizza()
    console.table(p5)