// lista de empresas
var listaEmpresas = [
  {
    id: 1,
    empresa: "Salfa",
    contacto: "Juan Perez",
    telefono: "123456",
  },
  {
    id: 2,
    empresa: "Lider",
    contacto: "Carlos Gonzalez",
    telefono: "8888",
  },
];

// array q solo tiene los nombres de las empresas
var nombresEmpresas = [];
listaEmpresas.forEach((element) => {
  nombresEmpresas.push(element.empresa);
});

// nombre de empresa a verificar
var formulario = "Salfa";

// nuevos datos de la empresa para actualizar
var nuevosDatos = {
  empresa: "Salfa",
  contacto: "Sergio Rodriguez",
};

// if (nombresEmpresas.includes(formulario)) {
//   listaEmpresas[]
// } else {
//   console.log("no");
// }

console.log("Antes de: ");
console.log(listaEmpresas);

// por cada empresa de la lista, verifica si existe "Salfa"
// Si existe reemplaza ese objeto del array con los nuevos datos
for (var i in listaEmpresas) {
  if (listaEmpresas[i]["empresa"] == formulario) {
    for (const key in nuevosDatos) {
      listaEmpresas[i][key] = nuevosDatos[key];
    }
    break;
  }
}

console.log("Despues de: ");
console.log(listaEmpresas);
