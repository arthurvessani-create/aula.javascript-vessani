const listaVIP = (nomes=['Arthur'], nomeBuscado='Arthur') => {

  for (const nome of nomes) {
    if (nome === nomeBuscado) {
      return true
    }
  }
  return false
}

console.log(listaVIP(['Arthur']))
 