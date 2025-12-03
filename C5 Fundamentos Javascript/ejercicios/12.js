function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
  let longitud1 = str1.length
  let longitud2 = str2.length
  if (longitud1 === longitud2){
    return true
  }
  return false
}

module.exports = tienenMismaLongitud;