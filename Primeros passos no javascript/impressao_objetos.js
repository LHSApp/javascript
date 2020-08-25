
  // Construção e impressão de objetos 
const usuario = {
  nome: "LHSApp",
  empresa: {
    nome: "eandro",
    cor: "Roxo",
    foco: "Programação",
    endereco:{
      rua: "Venancio Aires",
      numero: 260

    }
  }

};

console.log(`A empresa ${usuario.nome}, está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero} `);