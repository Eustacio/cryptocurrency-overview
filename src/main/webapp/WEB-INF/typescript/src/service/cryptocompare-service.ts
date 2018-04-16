import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as socketIo from 'socket.io-client';

import { ExchangeMarket } from '../domain/exchange-market';
import { CryptoCompareMarketDataType } from '../domain/cryptocompare-market-data-type';
import { CryptoCompareResponseUtil } from '../core/cryptocompare-response-util';
import { CryptoCompareResponseType } from '../domain/cryptocompare-response-type';
import { CurrentAggregatedResponseParser } from '../core/responseParser/current-aggregated-response-parser';
import { ResponseParser } from '../core/responseParser/response-parser';

export class CryptoCompareService {

  private readonly webSocketUrl = 'https://streamer.cryptocompare.com';
  private readonly subscriptionKeyword = 'SubAdd';

  private responseUtil: CryptoCompareResponseUtil;
  private subject: Subject<any> = new Subject<any>();
  private socket: socketIo.Socket;

  constructor() {
    this.responseUtil = new CryptoCompareResponseUtil();
  }

  connectToWebSocket(marketData: CryptoCompareMarketDataType, coinAcronym: string[], currency: string = 'USD',
                     exchangeMarket: ExchangeMarket = ExchangeMarket.CCCAGG): Observable<any> {

    const subscription = this.buildSubscription(marketData, exchangeMarket, coinAcronym, currency);

    // Try to connect to the CryptoCompare web socket
    this.socket = socketIo.connect(this.webSocketUrl);

    // Sends the subscription keyword with the requested data to the web socket
    this.socket.emit(this.subscriptionKeyword, { subs: subscription });

    // Register to messages sent by the CryptoCompare server
    this.socket.on('m', (response: string) => {
      this.filterResponse(response);
    });

    return this.subject.asObservable();
  }

  closeWebSocket(): void {
    this.socket.disconnect();
  }

  private buildSubscription(marketData: CryptoCompareMarketDataType, exchangeMarket: ExchangeMarket,
                            coinAcronym: string[], currency: string): string[] {
    return coinAcronym.map(acronym =>
      `${marketData}~${exchangeMarket}~${acronym}~${currency}`
    );
  }

  private filterResponse(response: string) {
    const responseType: string = this.responseUtil.getResponseType(response);
    switch (responseType) {
      case CryptoCompareResponseType.CURRENT_AGGREGATED:
        this.publishCurrentAggregateUpdate(response);
        break;
    }
  }

  private publishCurrentAggregateUpdate(response: string) {
    const responseParser: ResponseParser = new CurrentAggregatedResponseParser();
    const data: any = responseParser.parse(response);
    this.subject.next(data);
  }

}
