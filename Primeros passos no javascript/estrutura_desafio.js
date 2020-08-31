const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];


function funcionario(usuarios) {
  let soma = 0;
  for (let i = 0; i < usuarios.length; i++) {
    soma = soma + usuarios[i].nota;
  }
 
  return usuarios;
}


console.log(usuarios)