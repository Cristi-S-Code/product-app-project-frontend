/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserDto } from '../models/user-dto';

/**
 * User Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserControllerService extends __BaseService {
  static readonly getUserUsingGETPath = '/user';
  static readonly registerUserUsingPOSTPath = '/user/register';
  static readonly updateUserUsingPUTPath = '/user/update';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getUser
   * @param name undefined
   * @return OK
   */
  getUserUsingGETResponse(name?: string): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (name != null) __params = __params.set('name', name.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * getUser
   * @param name undefined
   * @return OK
   */
  getUserUsingGET(name?: string): __Observable<UserDto> {
    return this.getUserUsingGETResponse(name).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * registerUser
   * @param user user
   * @return OK
   */
  registerUserUsingPOSTResponse(user: UserDto): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/user/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * registerUser
   * @param user user
   * @return OK
   */
  registerUserUsingPOST(user: UserDto): __Observable<UserDto> {
    return this.registerUserUsingPOSTResponse(user).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * updateUser
   * @param user user
   * @return OK
   */
  updateUserUsingPUTResponse(user: UserDto): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/user/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * updateUser
   * @param user user
   * @return OK
   */
  updateUserUsingPUT(user: UserDto): __Observable<UserDto> {
    return this.updateUserUsingPUTResponse(user).pipe(
      __map(_r => _r.body as UserDto)
    );
  }
}

module UserControllerService {
}

export { UserControllerService }
