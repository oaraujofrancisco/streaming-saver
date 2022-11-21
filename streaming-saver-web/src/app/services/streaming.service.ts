import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Streaming } from '../interfaces/streaming';

@Injectable({
  providedIn: 'root'
})
export class StreamingService {

  private readonly urlApi = "api";

  constructor( private http: HttpClient ) { }

  getSubscription(id: number): Observable<Streaming> {
    return this.http.get<Streaming>(`${this.urlApi}/assinaturas/${id}`);
  }

  getSubscriptions(): Observable<Streaming[]> {
    return this.http.get<Streaming[]>(`${this.urlApi}/assinaturas`);
  }

  createSubscription(data: Streaming) {
    return this.http.post(`${this.urlApi}/assinaturas`, [data]);
  }

  deleteSubscription(id: number) {
    return this.http.delete(`${this.urlApi}/assinaturas/${id}`);
  }

  updateSubscription(id: number, data: Streaming) {
    return this.http.put(`${this.urlApi}/assinaturas/${id}`, data);
  }
}
