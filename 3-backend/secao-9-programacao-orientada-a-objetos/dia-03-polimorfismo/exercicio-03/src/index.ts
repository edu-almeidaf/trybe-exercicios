import { Clube } from "./Clube";
import { QuadraFutebol } from "./QuadraFutebol";
import { QuadraTenis } from "./QuadraTenis";

const trybeClube = new Clube();
const quadraFutebol = new QuadraFutebol();
trybeClube.adicionarQuadra(quadraFutebol);

const dataReservaFutebol = new Date('2022-12-28');

const reservarQuadraFutebol = trybeClube.buscarQuadra<QuadraFutebol>(0)
  .reservar(dataReservaFutebol);
console.log(reservarQuadraFutebol);


const quadraTenis = new QuadraTenis();
trybeClube.adicionarQuadra(quadraTenis);

const dataReservaTenis = new Date('2022-12-30');

const reservarQuadraTenis = trybeClube.buscarQuadra<QuadraTenis>(1)
  .reservar(dataReservaTenis);
console.log(reservarQuadraTenis);
