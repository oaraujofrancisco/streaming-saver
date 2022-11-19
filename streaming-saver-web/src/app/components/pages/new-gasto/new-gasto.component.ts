import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gasto } from 'src/app/interfaces/Gasto';
import { SubscriptionService } from 'src/app/services/subscription.service';

import { Subscription } from './../../../interfaces/Subscription';
import { GastoService } from './../../../services/gasto.service';

@Component({
  selector: 'app-new-gasto',
  templateUrl: './new-gasto.component.html',
  styleUrls: ['./new-gasto.component.scss']
})
export class NewGastoComponent implements OnInit {
  matTitle: string = 'Adicionar gasto';
  fontIcon: string = 'add';

  constructor(
    private router: Router,
    private gastoService: GastoService,
    private subsService: SubscriptionService
  ) { }

  ngOnInit(): void {
  }

  async createHandler(gasto: Gasto) {
    if (gasto.spent_type === 'Assinatura') {
      const subs: Subscription = gasto;
      const data = new Date().toLocaleDateString('pt-BR');
      subs.activated = 'Ativa';
      subs.series = [];
      subs.movies = [];
      subs.lastAccess = data;
      subs.lastUpdate = data;

      this.subsService.createSubscription(subs).subscribe(() => {
        this.router.navigate(['gastos']);
      })
      
    } else {
      this.gastoService.createGasto(gasto).subscribe(() => {
        this.router.navigate(['gastos']);
      });
    }
  }
}
