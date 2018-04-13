import { ResponseParser } from './response-parser';
import { CryptoCompareResponseUtil } from '../cryptocompare-response-util';

export abstract class AbstractResponseParser implements ResponseParser {

  protected responseMapper: CryptoCompareResponseUtil;

  constructor(responseMapper: CryptoCompareResponseUtil) {
    this.responseMapper = responseMapper;
  }

  abstract parse(response: string): any;

  protected getResponseMask(response: string[]): number {
    const maskHexValue = response[response.length - 1];
    return parseInt(maskHexValue, 16);
  }

}
