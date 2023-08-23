import { Person } from "./Person";

export class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    }
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }

  public set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }
    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
    }
    this._assignmentsGrades = value;
  }

  sumGrades(): number {
    const sum = [...this.examsGrades, ...this.assignmentsGrades].reduce((a, b) => a + b, 0);
    return sum;
  }

  sumAverageGrades(): number {
    const totalNotes = this.assignmentsGrades.length + this.examsGrades.length
    const average = this.sumGrades() / totalNotes;
    return average;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}