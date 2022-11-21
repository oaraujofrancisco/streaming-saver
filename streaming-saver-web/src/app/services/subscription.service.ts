import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Assinatura } from '../interfaces/assinatura';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  url: string = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  getSubscription(id: number): Observable<Assinatura> {
    return this.http.get<Assinatura>(`${this.url}/assinaturas/${id}`);
  }

  getSubscriptions(): Observable<Assinatura[]> {
    return this.http.get<Assinatura[]>(`${this.url}/assinaturas`);
  }

  createSubscription(data: Assinatura) {
    return this.http.post(`${this.url}/assinaturas`, data);
  }

  deleteSubscription(id: number) {
    return this.http.delete(`${this.url}/assinaturas/${id}`);
  }

  updateSubscription(id: number, data: Assinatura) {
    return this.http.put(`${this.url}/assinaturas/${id}`, data);
  }
}
