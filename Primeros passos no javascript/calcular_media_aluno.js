// Booleano

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
    nota: 0,
  },

  {
    nome: "Felipe",
    nota: 8,
  },
];

const alunosDaTumaB = [
  {
    nome: "Leandro1",
    nota: 0,
  },
  {
    nome: "Lilian2",
    nota: 5,
  },

  {
    nome: "Felipe3",
    nota: 0,
  },
];

function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
}

const media1 = calculaMedia(alunosDaTumaA);
const media2 = calculaMedia(alunosDaTumaB);

function enviaMensagem(media, turma) {
  // Se a média for maior que 5, parabenizar a turma

  if (media > 5) {
    console.log(`A média da turma ${turma} foi de  ${media}. Parabéns`);
  } else {
    console.log(`A média da turma ${turma} menosr que 5`);
  }
}

enviaMensagem(media1, "Turma A");
enviaMensagem(media2, "Turma B");

// marcar aluno como reprovado se a nota
// for menor que 5
//e  tambem enviar uma mensagem

function marcarComoReprovado(aluno) {
  aluno.reprovado = false;
  if (aluno.nota < 5) {
    aluno.reprovado = true;
  }
  //console.table(alunos)
}




function enviarMensagemReprovado(aluno){

  if(aluno.reprovado){

    console.log(`O aluno ${aluno.nome} está reprovado!`)
  }
}

function alunosReprovado(alunos){

  for (let aluno of alunos) {
    marcarComoReprovado(aluno);
    enviarMensagemReprovado(aluno)
  }
}

alunosReprovado(alunosDaTumaA)
alunosReprovado(alunosDaTumaB)