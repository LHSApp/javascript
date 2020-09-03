// Booleano

// Criar um programa para calcular a average
// das grades entre os students e envia
// mensagem do cálculo da média.

const classA = [
  {
    nome: "Leandro",
    grade: 9.8,
  },
  {
    nome: "Lilian",
    grade: 0,
  },

  {
    nome: "Felipe",
    grade: 8,
  },
];

const classB = [
  {
    nome: "Leandro1",
    grade: 0,
  },
  {
    nome: "Lilian2",
    grade: 5,
  },

  {
    nome: "Felipe3",
    grade: 0,
  },
];

function calculateAverage(students) {
  return (students[0].grade + students[1].grade + students[2].grade) / 3;
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

function sendMenssager(average, turma) {
  // Se a média for maior que 5, parabenizar a turma

  if (average > 5) {
    console.log(`A média da turma ${turma} foi de  ${average}. Parabéns`);
  } else {
    console.log(`A média da turma ${turma} menor que 5`);
  }
}

sendMenssager(average1, "Turma A");
sendMenssager(average2, "Turma B");

// marcar student como flunked se a grade
// for menor que 5
//e  tambem enviar uma mensagem

function marcarComoflunked(student) {
  student.flunked = false;
  if (student.grade < 5) {
    student.flunked = true;
  }
  //console.table(students)
}

function sendFlunkedflunked(student) {
  if (student.flunked) {
    console.log(`O student ${student.nome} está flunked!`);
  }
}

function studentsflunked(students) {
  for (let student of students) {
    marcarComoflunked(student);
    sendFlunkedflunked(student);
  }
}

studentsflunked(classA);
studentsflunked(classB);
