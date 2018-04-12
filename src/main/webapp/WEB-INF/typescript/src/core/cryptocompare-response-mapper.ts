import { CurrencySymbol } from '../domain/currency-symbol';

// TODO: add documentation
export class CryptoCompareResponseMapper {

  getCurrencySymbol(symbol: string): CurrencySymbol | string {
    return CurrencySymbol[symbol] || symbol;
  }

  splitResponse(response: string): string[] {
    return response.split('~');
  }

  getResponseType(response: string): string {
    return response.substring(0, response.indexOf('~'));
  }

}
