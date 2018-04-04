import { CurrencySymbol } from './currency-symbol';

// TODO: add documentation
export class CryptoCompareResponseMapper {

  getCurrencySymbol(symbol: string): CurrencySymbol | string {
    return CurrencySymbol[symbol] || symbol;
  }

}
