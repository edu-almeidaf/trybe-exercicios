export class Person {
  protected MAXIMUM_NAME_LENGTH = 3;
  protected MAXIMUM_AGE = 120;

  constructor(private _name: string, private _birthDate: Date) {
    this.validatePerson();
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(date: Date) {
    this.validateBirthDate(date);
    this._birthDate = date;
  }

  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime());
    const yearsMs = 31_536_000_000;
    return  Math.floor(diff / yearsMs);
  }

  private validateName(name: string): void {
    if (name.length < this.MAXIMUM_NAME_LENGTH) {
      throw new Error(`O nome deve conter no mínimo ${this.MAXIMUM_NAME_LENGTH} caracteres.`)
    }
  }

  private validateBirthDate(date: Date): void {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }

    if (Person.getAge(date) > this.MAXIMUM_AGE) {
      throw new Error(`A pessoa deve ter no máximo ${this.MAXIMUM_AGE} anos.`);
    }
  }

  private validatePerson(): void {
    this.validateName(this.name);
    this.validateBirthDate(this.birthDate);
  }
}