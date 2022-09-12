/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Product } from '../models/product';

/**
 * Product Controller
 */
@Injectable({
  providedIn: 'root',
})
class ProductControllerService extends __BaseService {
  static readonly getAllProductsUsingGETPath = '/products';
  static readonly addNewProductUsingPOSTPath = '/products/add';
  static readonly deleteProductUsingDELETEPath = '/products/delete/{id}';
  static readonly editProductUsingGETPath = '/products/edit/{id}';
  static readonly addEditedProductToListUsingPUTPath = '/products/update';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAllProducts
   * @return OK
   */
  getAllProductsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Product>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Product>>;
      })
    );
  }
  /**
   * getAllProducts
   * @return OK
   */
  getAllProductsUsingGET(): __Observable<Array<Product>> {
    return this.getAllProductsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Product>)
    );
  }

  /**
   * addNewProduct
   * @param newProduct newProduct
   * @return OK
   */
  addNewProductUsingPOSTResponse(newProduct: Product): __Observable<__StrictHttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = newProduct;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/products/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Product>;
      })
    );
  }
  /**
   * addNewProduct
   * @param newProduct newProduct
   * @return OK
   */
  addNewProductUsingPOST(newProduct: Product): __Observable<Product> {
    return this.addNewProductUsingPOSTResponse(newProduct).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * deleteProduct
   * @param id id
   */
  deleteProductUsingDELETEResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/products/delete/${encodeURIComponent(String(id))}`,
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
   * deleteProduct
   * @param id id
   */
  deleteProductUsingDELETE(id: string): __Observable<null> {
    return this.deleteProductUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * editProduct
   * @param id id
   * @return OK
   */
  editProductUsingGETResponse(id: string): __Observable<__StrictHttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/products/edit/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Product>;
      })
    );
  }
  /**
   * editProduct
   * @param id id
   * @return OK
   */
  editProductUsingGET(id: string): __Observable<Product> {
    return this.editProductUsingGETResponse(id).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * addEditedProductToList
   * @param editedProduct editedProduct
   * @return OK
   */
  addEditedProductToListUsingPUTResponse(editedProduct: Product): __Observable<__StrictHttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = editedProduct;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/products/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Product>;
      })
    );
  }
  /**
   * addEditedProductToList
   * @param editedProduct editedProduct
   * @return OK
   */
  addEditedProductToListUsingPUT(editedProduct: Product): __Observable<Product> {
    return this.addEditedProductToListUsingPUTResponse(editedProduct).pipe(
      __map(_r => _r.body as Product)
    );
  }
}

module ProductControllerService {
}

export { ProductControllerService }
