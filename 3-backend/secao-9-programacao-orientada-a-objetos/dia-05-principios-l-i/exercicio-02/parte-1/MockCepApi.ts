import ICepAPI from "./ICepAPI";

class MockCepApi implements ICepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `The mock address for "cep:${cep}, nº:${number}" is "mock address"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `The mock address for: "${address}, nº:${number}" is "mock cep"`;
  }
}

export default MockCepApi;