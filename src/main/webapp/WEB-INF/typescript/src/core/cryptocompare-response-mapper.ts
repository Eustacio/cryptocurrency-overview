import { CurrencySymbol } from '../domain/currency-symbol';
import { CryptoCompareResponseType } from '../domain/cryptocompare-response-type';

// TODO: add documentation
export class CryptoCompareResponseMapper {

  getCurrencySymbol(symbol: string): CurrencySymbol | string {
    return CurrencySymbol[symbol] || symbol;
  }

  splitResponse(response: string): string[] {
    return response.split('~');
  }

  getResponseType(response: string): CryptoCompareResponseType | string {
    const responseType: string = response.substring(0, response.indexOf('~'));

    for (const key in CryptoCompareResponseType) {
      if (CryptoCompareResponseType[key] === responseType) {
        return <CryptoCompareResponseType>key;
      }
    }

    return responseType;
  }

}
