function combinarNombres(nombre, apellido) {
  // La función recibe dos argumentos llamados "nombre" y "apellido" los cuales son string.
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Por ejemplo: 
  // "Soy", "Henry" ---> "Soy Henry"
  // Tu código:
   let fullname  = nombre + " " + apellido
return fullname 
}

module.exports = combinarNombres;
// console.log(combinarNombres ( samuel, hernandez ));

