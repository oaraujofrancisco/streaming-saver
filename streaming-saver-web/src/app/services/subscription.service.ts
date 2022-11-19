import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Subscription } from '../interfaces/Subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  url: string = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  getSubscription(id: number): Observable<Subscription> {
    return this.http.get<Subscription>(`${this.url}/assinaturas/${id}`);
  }

  getSubscriptions(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(`${this.url}/assinaturas`);
  }

  createSubscription(data: Subscription) {
    return this.http.post(`${this.url}/assinaturas`, data);
  }

  deleteSubscription(id: number) {
    return this.http.delete(`${this.url}/assinaturas/${id}`);
  }

  updateSubscription(id: number, data: Subscription) {
    return this.http.put(`${this.url}/assinaturas/${id}`, data);
  }
}
