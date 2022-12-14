/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Stock } from '../models/stock';
import { StockDto } from '../models/stock-dto';

/**
 * Stock Controller
 */
@Injectable({
  providedIn: 'root',
})
class StockControllerService extends __BaseService {
  static readonly getAllStockUsingGETPath = '/stock';
  static readonly addnewStockUsingPOSTPath = '/stock/add/{pzn}';
  static readonly deleteStockUsingDELETEPath = '/stock/delete/{pzn}';
  static readonly getAllStockExtraUsingGETPath = '/stock/table';
  static readonly addEditedStockToListUsingPUTPath = '/stock/update/{pzn}';
  static readonly getStockByPznUsingGETPath = '/stock/{pzn}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllStock
   * @return OK
   */
  getAllStockUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Stock>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stock`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Stock>>;
      })
    );
  }
  /**
   * getAllStock
   * @return OK
   */
  getAllStockUsingGET(): __Observable<Array<Stock>> {
    return this.getAllStockUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Stock>)
    );
  }

  /**
   * addnewStock
   * @param params The `StockControllerService.AddnewStockUsingPOSTParams` containing the following parameters:
   *
   * - `pzn`: pzn
   *
   * - `newStock`: newStock
   *
   * @return OK
   */
  addnewStockUsingPOSTResponse(params: StockControllerService.AddnewStockUsingPOSTParams): __Observable<__StrictHttpResponse<StockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pzn != null) __params = __params.set('pzn', params.pzn.toString());
    __body = params.newStock;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/stock/add/${encodeURIComponent(String(params.pzn))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StockDto>;
      })
    );
  }
  /**
   * addnewStock
   * @param params The `StockControllerService.AddnewStockUsingPOSTParams` containing the following parameters:
   *
   * - `pzn`: pzn
   *
   * - `newStock`: newStock
   *
   * @return OK
   */
  addnewStockUsingPOST(params: StockControllerService.AddnewStockUsingPOSTParams): __Observable<StockDto> {
    return this.addnewStockUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as StockDto)
    );
  }

  /**
   * deleteStock
   * @param pzn pzn
   */
  deleteStockUsingDELETEResponse(pzn: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/stock/delete/${encodeURIComponent(String(pzn))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * deleteStock
   * @param pzn pzn
   */
  deleteStockUsingDELETE(pzn: string): __Observable<null> {
    return this.deleteStockUsingDELETEResponse(pzn).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * getAllStockExtra
   * @return OK
   */
  getAllStockExtraUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Stock>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stock/table`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Stock>>;
      })
    );
  }
  /**
   * getAllStockExtra
   * @return OK
   */
  getAllStockExtraUsingGET(): __Observable<Array<Stock>> {
    return this.getAllStockExtraUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Stock>)
    );
  }

  /**
   * addEditedStockToList
   * @param params The `StockControllerService.AddEditedStockToListUsingPUTParams` containing the following parameters:
   *
   * - `pzn`: pzn
   *
   * - `editedStock`: editedStock
   *
   * @return OK
   */
  addEditedStockToListUsingPUTResponse(params: StockControllerService.AddEditedStockToListUsingPUTParams): __Observable<__StrictHttpResponse<StockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pzn != null) __params = __params.set('pzn', params.pzn.toString());
    __body = params.editedStock;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/stock/update/${encodeURIComponent(String(params.pzn))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StockDto>;
      })
    );
  }
  /**
   * addEditedStockToList
   * @param params The `StockControllerService.AddEditedStockToListUsingPUTParams` containing the following parameters:
   *
   * - `pzn`: pzn
   *
   * - `editedStock`: editedStock
   *
   * @return OK
   */
  addEditedStockToListUsingPUT(params: StockControllerService.AddEditedStockToListUsingPUTParams): __Observable<StockDto> {
    return this.addEditedStockToListUsingPUTResponse(params).pipe(
      __map(_r => _r.body as StockDto)
    );
  }

  /**
   * getStockByPzn
   * @param pzn pzn
   * @return OK
   */
  getStockByPznUsingGETResponse(pzn: string): __Observable<__StrictHttpResponse<Stock>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stock/${encodeURIComponent(String(pzn))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Stock>;
      })
    );
  }
  /**
   * getStockByPzn
   * @param pzn pzn
   * @return OK
   */
  getStockByPznUsingGET(pzn: string): __Observable<Stock> {
    return this.getStockByPznUsingGETResponse(pzn).pipe(
      __map(_r => _r.body as Stock)
    );
  }
}

module StockControllerService {

  /**
   * Parameters for addnewStockUsingPOST
   */
  export interface AddnewStockUsingPOSTParams {

    /**
     * pzn
     */
    pzn: string;

    /**
     * newStock
     */
    newStock: StockDto;
  }

  /**
   * Parameters for addEditedStockToListUsingPUT
   */
  export interface AddEditedStockToListUsingPUTParams {

    /**
     * pzn
     */
    pzn: string;

    /**
     * editedStock
     */
    editedStock: StockDto;
  }
}

export { StockControllerService }
