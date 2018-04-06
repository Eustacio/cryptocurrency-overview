import { CurrencySymbol } from '../domain/currency-symbol';

// TODO: add documentation
export class CryptoCompareResponseMapper {

  getCurrencySymbol(symbol: string): CurrencySymbol | string {
    return CurrencySymbol[symbol] || symbol;
  }

}
