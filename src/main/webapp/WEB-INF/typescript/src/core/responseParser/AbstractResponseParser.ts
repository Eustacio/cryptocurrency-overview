import { ResponseParser } from './response-parser';
import { CryptoCompareResponseUtil } from '../cryptocompare-response-util';

export abstract class AbstractResponseParser implements ResponseParser {

  protected responseMapper: CryptoCompareResponseUtil;

  constructor(responseMapper: CryptoCompareResponseUtil) {
    this.responseMapper = responseMapper;
  }

  abstract parse(response: string): any;

}
