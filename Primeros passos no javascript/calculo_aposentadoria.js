const nome = 'Lilian'
const sexo = 'F'
const  idade = 48 
const contribuicao = 38
const soma = idade + contribuicao


// Essa variáveis irão etornar true ou false

const homempodeaposentar =  sexo == 'M' && contribuicao >= 35 && soma >= 95

const mulherpodeaposentar = sexo == 'F' && contribuicao >= 30 && soma >= 85


if (homempodeaposentar || mulherpodeaposentar) {

  console.log(`${nome}, você pode se aposentar`)
}else {
  console.log(`${nome}, você não pode se aposentar`)
}
