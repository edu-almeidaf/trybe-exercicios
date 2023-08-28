import { FuturisticVehicle } from './interfaces';

export default class FuturisticCar implements FuturisticVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}
