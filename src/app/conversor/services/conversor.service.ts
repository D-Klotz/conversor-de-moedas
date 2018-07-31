import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Conversao, ConversaoResponse } from '../models';

@Injectable()
export class ConversorService {

  private readonly BASE_URL = 'http://data.fixer.io/api/latest';

  constructor(private http: Http) { }

  /**
   * Realiza a chamada para a conversao de moedas.
   *
   * @param Conversao conversao
   * @return Observable<ConversorResponse>
   */
  converter(conversao: Conversao): Observable<ConversaoResponse> {
    const ACCESS_KEY = 'ef857a13e5e80b3459e9b18d9fd926e1';
    const params = `?access_key=${ACCESS_KEY}&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;

    return this.http
      .get(this.BASE_URL + params)
      .map(response => response.json() as ConversaoResponse)
      .catch(error => Observable.throw(error));
  }

  /**
   * Retorna cotação dado uma response
   *
   * @param conversaoResponse conversorResponse
   * @param conversao conversao
   * @return number
   */
  cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao): number {
    if (conversaoResponse === undefined) {
      return 0;
    }

    return conversaoResponse.rates[conversao.moedaPara];
  }

  /**
   * Retorna uma cotação dado uma response
   *
   * @param conversaoResponse ConversaoResponse
   * @param conversao Conversao
   * @return string
   */
  cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string {
    if (conversaoResponse === undefined) {
      return '0';
    }
    return (1 / conversaoResponse.rates[conversao.moedaPara])
      .toFixed(4);
  }

  /**
   * Retorna a data da cotação dado uma response
   * @param conversaoResponse
   * @return string
   */
  dataCotacao(conversaoResponse: ConversaoResponse): string   {
    if (conversaoResponse === undefined) {
      return '0';
    }

    return conversaoResponse.date;
  }
}
