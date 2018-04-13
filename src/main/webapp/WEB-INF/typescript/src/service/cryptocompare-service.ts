import { ExchangeMarket } from '../domain/exchange-market';
import { CryptoCompareMarketDataType } from '../domain/cryptocompare-market-data-type';

export class CryptoCompareService {

  private buildSubscription(marketData: CryptoCompareMarketDataType, exchangeMarket: ExchangeMarket,
                            coinAcronym: string[], currency: string): string[] {
    return coinAcronym.map(acronym =>
      `${marketData}~${exchangeMarket}~${acronym}~${currency}`
    );
  }

}
