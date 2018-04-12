import { ResponseParser } from './response-parser';
import { CryptoCompareResponseMapper } from '../cryptocompare-response-mapper';

export abstract class AbstractResponseParser implements ResponseParser {

  protected responseMapper: CryptoCompareResponseMapper;

  constructor(responseMapper: CryptoCompareResponseMapper) {
    this.responseMapper = responseMapper;
  }

  abstract parse(response: string): any;

  protected getResponseMask(response: string[]): number {
    const maskHexValue = response[response.length - 1];
    return parseInt(maskHexValue, 16);
  }

}
