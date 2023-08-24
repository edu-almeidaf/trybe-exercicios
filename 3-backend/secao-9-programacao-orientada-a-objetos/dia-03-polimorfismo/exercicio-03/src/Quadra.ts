import { IAgenda } from "./interfaces/IAgenda";

export abstract class Quadra {
  protected abstract reservar<T>(horaReserva: Date): IAgenda<T>;
}