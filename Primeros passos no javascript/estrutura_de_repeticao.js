// Criar um programa para calcular a media
// das notas entre os alunos e envia
// mensagem do cálculo da média.

const alunosDaTumaA = [
  {
    nome: "Leandro",
    nota: 9.8,
  },
  {
    nome: "Lilian",
    nota: 10,
  },

  {
    nome: "Felipe",
    nota: 10,
  },

  {
    nome: "Felipe58",
    nota: 8,
  },
];

const alunosDaTumaB = [
  {
    nome: "Leandro1",
    nota: 10,
  },
  {
    nome: "Lilian2",
    nota: 9,
  },

  {
    nome: "Felipe3",
    nota: 0,
  },

  {
    nome: "Felipe4",
    nota: 0,
  },

  {
    nome: "Felipe4888",
    nota: 5.5,
  },
  {
    nome: "Felipe45",
    nota: 8.5,
  },
];

function calculaMedia(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota;
  }
  const media = soma / alunos.length
  return media;
}

const media1 = calculaMedia(alunosDaTumaA);
const media2 = calculaMedia(alunosDaTumaB)

function enviaMensagem(media, turma) {
  // Se a média for maior que 5, parabenizar a turma

  if (media > 5) {

    console.log( `A média da turma ${turma} foi de  ${media}. Parabéns`)
  } else {
    console.log(`A média da turma ${turma} menosr que 5`)
  }
}

enviaMensagem(media1, 'Turma A')
enviaMensagem(media2, 'Turma B')
