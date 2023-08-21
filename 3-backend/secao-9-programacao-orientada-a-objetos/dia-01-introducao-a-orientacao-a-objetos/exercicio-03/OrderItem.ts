export class OrderItem {
  private _nome: string;
  private _price: number;

  constructor(nome: string, price: number) {
    this._nome = nome;
    this._price = price;
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

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) {
      throw new Error('O preço deve ser positivo.');
    }

    this._price = value;
  }
}