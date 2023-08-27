interface IPaymentAPI {
  processPayment(value: number): Promise<boolean>;
}

export default IPaymentAPI;