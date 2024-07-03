import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import * as url from "node:url";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient: HttpClient) { }

  get(url: string): Observable<Object> {
    return this.httpClient.get(`${url}`);
  }

  post(url: string, data: any): Observable<Object> {
    return this.httpClient.post(`${url}`, data);
  }

  put(url: string, data: any) {
    return this.httpClient.put(`${url}`, data);
  }

  delete(url: string) {
    return this.httpClient.delete(`${url}`);
  }

}
