class Pessoa {
  constructor(nome, idade, profissao){
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
  }
}

class Aluno extends Pessoa {
  constructor(nome, idade, profissao, curso) {
    super(nome, idade, profissao)
    this.nota = 0
    this.curso = curso
  }

  mostrarNota(){
    console.log(this.nota)
  }

  mostrarCurso(){
    console.log(this.curso)
  }

  modficarNota(operacao, valor) {
    switch (operacao) {
      case 'somar':
        this.nota += valor
        break;
      case 'subtrair':
        this.nota -= valor
        break;
      default:
        console.log('Insira "somar" ou "subtrair".')
        break;
    }
  }

  modificarCurso(novocurso){
    this.curso=novocurso
  }
}



const aluno = new Aluno('Marcos', 29, 'Professor', 'adm', 10)

aluno.mostrarNota()

aluno.modficarNota('somar', 3)

aluno.mostrarNota()

aluno.modficarNota('subtrair', 1)

aluno.mostrarNota()

aluno.modificarCurso('Medicina')

aluno.mostrarCurso()