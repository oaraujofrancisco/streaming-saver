import { Observable } from 'rxjs';
import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';
import { Gasto } from '../interfaces/Gasto';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  constructor( private webReqService: WebRequestService) { }

  getGasto(id: number): Observable<Gasto> {
    return this.webReqService.getOne('gastos', id);
  }

  getGastos(): Observable<Gasto[]> {
    return this.webReqService.get('gastos');
  }

  createGasto(data: Gasto) {
    return this.webReqService.post('gastos', data);
  }

  deleteGasto(id: number) {
    return this.webReqService.delete('gastos', id);
  }

  updateGasto(id: number, data: Gasto) {
    return this.webReqService.put('gastos', id, data);
  }
}
