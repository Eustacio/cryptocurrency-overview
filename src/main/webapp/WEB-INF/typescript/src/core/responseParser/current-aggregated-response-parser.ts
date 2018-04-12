import { AbstractResponseParser } from './AbstractResponseParser';
import { Current } from '../../domain/data-type/current';
import { ConvertedCurrencySymbol } from '../../domain/converted-currency-symbol';

export class CurrentAggregatedResponseParser extends AbstractResponseParser {

  parse(response: string): any {

  }

  private extractDataFromResponse(response: string): any {
    const responseValues: string[] = this.responseMapper.splitResponse(response);
    const mask: number = super.getResponseMask(responseValues);

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

  private normalizeResponse(data: any): any {
    let normalizedResponse: any = {};

    if (data) {
      // The FROMSYMBOL and TOSYMBOL keys are replaced by the 'symbols' key.
      // The BID, OFFER and AVG fields are not returned in the response.

      normalizedResponse['response_type'] = data['TYPE'];
      normalizedResponse['market'] = data['MARKET'];
      normalizedResponse['symbols'] = this.extractCurrencySymbols(data);
      normalizedResponse['flag'] = data['FLAGS'];
      normalizedResponse['price'] = data['PRICE'];
      normalizedResponse['last_update'] = data['LASTUPDATE'];
      normalizedResponse['last_volume'] = data['LASTVOLUME'];
      normalizedResponse['last_volume_to'] = data['LASTVOLUMETO'];
      normalizedResponse['last_trade_id'] = data['LASTTRADEID'];
      normalizedResponse['volume_hour'] = data['VOLUMEHOUR'];
      normalizedResponse['volume_hour_to'] = data['VOLUMEHOURTO'];
      normalizedResponse['volume_24_hour'] = data['VOLUME24HOUR'];
      normalizedResponse['volume_24_hour_to'] = data['VOLUME24HOURTO'];
      normalizedResponse['open_hour'] = data['OPENHOUR'];
      normalizedResponse['high_hour'] = data['HIGHHOUR'];
      normalizedResponse['low_hour'] = data['LOWHOUR'];
      normalizedResponse['open_24_hour'] = data['OPEN24HOUR'];
      normalizedResponse['high_24_hour'] = data['HIGH24HOUR'];
      normalizedResponse['low_24_hour'] = data['LOW24HOUR'];
      normalizedResponse['last_market'] = data['LASTMARKET'];
    }

    return normalizedResponse;
  }

  private extractCurrencySymbols(responseData: any): ConvertedCurrencySymbol {
    const currency: string = responseData['TOSYMBOL'];
    const cryptocurrency: string = responseData['FROMSYMBOL'];

    return {
      currency: currency,
      currencySymbol: this.responseMapper.getCurrencySymbol(currency),
      cryptocurrency: cryptocurrency,
      cryptocurrencySymbol: this.responseMapper.getCurrencySymbol(cryptocurrency)
    };
  }

}
