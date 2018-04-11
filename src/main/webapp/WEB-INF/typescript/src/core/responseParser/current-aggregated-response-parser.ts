import { AbstractResponseParser } from './AbstractResponseParser';
import { Current } from '../../domain/data-type/current';

export class CurrentAggregatedResponseParser extends AbstractResponseParser {

  parse(response: string): any {

  }

  private extractDataFromResponse(response: string): any {
    const responseValues: string[] = this.responseMapper.splitResponse(response);
    const mask: number = this.getResponseMask(responseValues);

    let data = {};
    let currentField = 0;

    Object.keys(Current).forEach(key => {
      if (Current[key] === 0) {
        data[key] = responseValues[currentField];
        currentField++;
      } else if (mask & Current[key]) {
        if (key === 'LASTMARKET') {
          data[key] = responseValues[currentField];
        } else {
          data[key] = parseFloat(responseValues[currentField]);
        }
        currentField++;
      }
    });

    return data;
  }

}
