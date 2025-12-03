function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  // if (valor === "string") {
  //   return "string"
  // } 
  if (valor === true || valor === false ) {
    return "boolean"
  }
  // if (valor == "objeto") {
  //   return "object"
  // }
  if (valor != 0 ) {
    return "number"
  }
}

module.exports = esTipoDato;