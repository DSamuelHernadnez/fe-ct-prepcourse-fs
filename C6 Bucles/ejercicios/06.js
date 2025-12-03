function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  // for (let i = 0; i < num.length; i++) {
  let text = num.toString() 
    if (text.length === 3) {
      return true
    }
    return false
}

module.exports = tieneTresDigitos;
