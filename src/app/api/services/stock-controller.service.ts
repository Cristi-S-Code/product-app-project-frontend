/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Stock } from '../models/stock';

/**
 * Stock Controller
 */
@Injectable({
  providedIn: 'root',
})
class StockControllerService extends __BaseService {
  static readonly getAllStockUsingGETPath = '/stock';
  static readonly addnewStockUsingPOSTPath = '/stock/add';
  static readonly deleteStockUsingDELETEPath = '/stock/delete/{id}';
  static readonly editStockUsingGETPath = '/stock/edit/{id}';
  static readonly addEditedStockToListUsingPUTPath = '/stock/update';

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
   * @param newStock newStock
   * @return OK
   */
  addnewStockUsingPOSTResponse(newStock: Stock): __Observable<__StrictHttpResponse<Stock>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = newStock;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/stock/add`,
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
   * addnewStock
   * @param newStock newStock
   * @return OK
   */
  addnewStockUsingPOST(newStock: Stock): __Observable<Stock> {
    return this.addnewStockUsingPOSTResponse(newStock).pipe(
      __map(_r => _r.body as Stock)
    );
  }

  /**
   * deleteStock
   * @param id id
   */
  deleteStockUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/stock/delete/${encodeURIComponent(String(id))}`,
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
   * @param id id
   */
  deleteStockUsingDELETE(id: number): __Observable<null> {
    return this.deleteStockUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * editStock
   * @param id id
   * @return OK
   */
  editStockUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Stock>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/stock/edit/${encodeURIComponent(String(id))}`,
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
   * editStock
   * @param id id
   * @return OK
   */
  editStockUsingGET(id: number): __Observable<Stock> {
    return this.editStockUsingGETResponse(id).pipe(
      __map(_r => _r.body as Stock)
    );
  }

  /**
   * addEditedStockToList
   * @param editedStock editedStock
   * @return OK
   */
  addEditedStockToListUsingPUTResponse(editedStock: Stock): __Observable<__StrictHttpResponse<Stock>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = editedStock;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/stock/update`,
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
   * addEditedStockToList
   * @param editedStock editedStock
   * @return OK
   */
  addEditedStockToListUsingPUT(editedStock: Stock): __Observable<Stock> {
    return this.addEditedStockToListUsingPUTResponse(editedStock).pipe(
      __map(_r => _r.body as Stock)
    );
  }
}

module StockControllerService {
}

export { StockControllerService }
