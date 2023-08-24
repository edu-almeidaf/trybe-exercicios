abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;

  static characterPresentation(character: Character): void {
    character.talk();
    character.specialMove();
  }
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get specialMoveName(): string {
    return this._specialMoveName;
  }
  
  set specialMoveName(value: string) {
    this._specialMoveName = value;
  }
  
  talk(): void {
    console.log(`Hi, I'm ${this.name}. I attack at close range.`);
  }

  specialMove(): void {
    console.log(`${this.name} used ${this.specialMoveName}!`);
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get specialMoveName(): string {
    return this._specialMoveName;
  }
  
  set specialMoveName(value: string) {
    this._specialMoveName = value;
  }
  
  talk(): void {
    console.log(`Hi, I'm ${this.name}. I attack from a long range.`);
  }

  specialMove(): void {
    console.log(`${this.name} used ${this.specialMoveName}!`);
  }
}

const yoshi = new MeleeCharacter('Yoshi', 'Super dragon');
const samus = new MeleeCharacter('Samus', 'Zero Laser');

Character.characterPresentation(yoshi);
Character.characterPresentation(samus);