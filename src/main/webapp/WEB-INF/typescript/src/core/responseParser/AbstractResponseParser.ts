import { ResponseParser } from './response-parser';
import { CryptoCompareResponseUtil } from '../cryptocompare-response-util';

export abstract class AbstractResponseParser implements ResponseParser {

  protected responseUtil: CryptoCompareResponseUtil;

  constructor() {
    this.responseUtil = new CryptoCompareResponseUtil();
  }

  abstract parse(response: string): any;

}
