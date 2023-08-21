export class PessoaEstudante {
  private _matricula: string;
  private _nome: string;
  private _provas: number[];
  private _trabalhos: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._provas = [];
    this._trabalhos = [];
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._nome = value;
  }

  get provas(): number[] {
    return this._provas;
  }

  set provas(value: number[]) {
    if (value.length < 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }
    
    this._provas = value;
  }

  get trabalhos(): number[] {
    return this._trabalhos;
  }

  set trabalhos(value: number[]) {
    if (value.length < 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
    }
    
    this._trabalhos = value;
  }

  calculaNota (): number {
    const somaNotas = [...this._provas, ...this._trabalhos].reduce((acc, curr) => acc + curr, 0);
    const numeroDeNotas = this._provas.length + this._trabalhos.length;
    return Math.round(somaNotas / numeroDeNotas);
  }
}

const personOne = new PessoaEstudante('202001011', 'Maria da Silva');
const personTwo = new PessoaEstudante('202001012', 'João da Silva');

console.log(personTwo);
console.log(personOne);

personOne.provas = [25, 20, 23, 23];
personOne.trabalhos = [45, 45];

console.log('Média de todas as notas: ', personOne.calculaNota());