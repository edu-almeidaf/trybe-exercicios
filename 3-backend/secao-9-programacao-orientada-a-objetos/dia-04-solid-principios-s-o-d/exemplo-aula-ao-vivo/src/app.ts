import express from 'express';
import { TravelController } from './controller/TravelController';
// import MercadoPagoApi from './service/MercadoPagoAPI';
import PagSeguroAPI from './service/PagSeguroAPI';

const app = express();
app.use(express.json());

// const api = new MercadoPagoApi();
const api = new PagSeguroAPI();

const travelController = new TravelController(api);

app.post('/fare/calculate', (req, res) => {
  travelController.calculateFare(req, res);
});

app.post('/checkout', (req, res) => {
  travelController.chargePayment(req, res);
});

export default app;