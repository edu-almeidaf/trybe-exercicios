import IPaymentAPI from '../interface/IPaymentAPI';

class TravelPaymentService {
  constructor(private api: IPaymentAPI) {}

  async chargePayment(value: number): Promise<boolean> {
    const isSuccess = await this.api.processPayment(value);
    return isSuccess;
  }
}

export default TravelPaymentService;