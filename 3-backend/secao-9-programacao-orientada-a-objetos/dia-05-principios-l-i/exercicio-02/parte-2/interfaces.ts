export interface ICar {
  drive(): void;
}

export interface IAirPlane {
  fly(): void;
}

export interface FuturisticVehicle extends ICar, IAirPlane {
}