import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Subscription } from '../interfaces/Subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private url = 'Url';

  constructor(
    private http: HttpClient
  ) { }

  getSubscriptions(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(this.url);
  }
}
