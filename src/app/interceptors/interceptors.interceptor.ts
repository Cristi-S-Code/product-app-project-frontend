import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RequestInterceptorInterceptor } from "./request-interceptor.interceptor";

export const interceptorProviders = [
	{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorInterceptor, multi: true }
];
