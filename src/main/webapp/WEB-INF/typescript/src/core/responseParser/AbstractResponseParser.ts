import { ResponseParser } from './response-parser';

export abstract class AbstractResponseParser implements ResponseParser {

  abstract parse(response: string): any;
}
