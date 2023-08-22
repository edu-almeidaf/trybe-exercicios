// Exercício 01
// class Superclass {
//   isSuper: boolean;

//   constructor() {
//     this.isSuper = true;
//   }

//   public sayHello(): void {
//     console.log('Olá mundo!');
//   }
// }

// class Subclass extends Superclass {}

// const myFunc = (object: Superclass) => {
//   object.sayHello();
// }

// const sup = new Superclass();
// const sub = new Subclass();

// myFunc(sup);
// myFunc(sub);

// Exercício 02
// class Superclass {
//   isSuper: boolean;

//   constructor() {
//     this.isSuper = true;
//   }

//   protected sayHello(): void {
//     console.log('Olá mundo!');
//   }
// }

// class Subclass extends Superclass {
//   public sayHello2(): void {
//     this.sayHello();
//   }
// }

// const myFunc = (object: Subclass) => {
//   object.sayHello2();
// }

// const sub = new Subclass();

// myFunc(sub);

// Exercício 03
class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (object: Superclass) => {
  object.sayHello();
  console.log(object.isSuper ? 'Super!' : 'Sub!');
}

const sup = new Superclass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);