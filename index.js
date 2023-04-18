const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//Punto a:

const idImpar = pizzas.filter((pizza) => {
  return pizza.id % 2 !== 0;
});

idImpar.forEach((pizza) => {
  console.log(`La ${pizza.nombre} tiene id impar `);
});

console.log("FIN DEL PUNTO A");

//Punto b:

const menorA600 = pizzas.filter((pizza) => {
  return pizza.precio < 600;
});

menorA600.forEach((pizza) => {
  console.log(`La ${pizza.nombre} vale menos de $600`);
});

console.log("FIN DEL PUNTO B");

//Punto c:

pizzas.forEach((pizzas) =>
  console.log(`La ${pizzas.nombre} tiene un precio de ${pizzas.precio}`)
);

console.log("FIN DEL PUNTO C");

//Punto d:

pizzas.forEach((pizzas) =>
  console.log(`La ${pizzas.nombre} tiene los siguientes ingredientes: ${pizzas.ingredientes}`)
);

console.log("FIN DEL PUNTO D")