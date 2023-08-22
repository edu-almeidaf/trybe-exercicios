interface Animall {
  name: string;
  age: number;

  getBirthDate(): Date;
}

class Passaro implements Animall {
  constructor(
    public name: string,
    private birthDate: Date) {}

  get age() {
    var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  getBirthDate() { return this.birthDate; }

  fly() { console.log(`${this.name} está voando!`); }
}

const parrott = new Passaro(
  'Papagaio',
  new Date(Date.parse('Aug 16, 2015')),
);

console.log(parrott.age);
parrott.fly();