import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gasto } from '../interfaces/Gasto';


@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor( private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  get(uri: string): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(`${this.ROOT_URL}/${uri}`);
  }

  getOne(uri: string, id: number): Observable<Gasto> {
    return this.http.get<Gasto>(`${this.ROOT_URL}/${uri}/${id}`);
  }

  post(uri: string, data: Gasto) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, data);
  }

  put(uri: string, id: number, data: Gasto) {
    return this.http.put(`${this.ROOT_URL}/${uri}/${id}`, data);
  }

  delete(uri:string, id: number) {
    return this.http.delete(`${this.ROOT_URL}/${uri}/${id}`);
  }
}
