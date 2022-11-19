import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription.service';

import { Subscription } from '../../../interfaces/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assinaturas',
  templateUrl: './assinaturas.component.html',
  styleUrls: ['./assinaturas.component.scss']
})
export class AssinaturasComponent implements OnInit {
  allSubscriptions: Subscription[] = [];
  subscriptions: Subscription[] = [];
  filterModel: string = 'Todas';
  gastoType: string = 'Assinatura';

  displayedColumns: string[] = ['name', 'last_access', 'watching', 'status', 'actions']

  constructor(
    private subscriptionService: SubscriptionService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.subscriptionService.getSubscriptions()
      .subscribe(items => {
        this.subscriptions = items;
        this.allSubscriptions = items;
      })
  }

  applyFilter() {
    const option = this.filterModel;

    if (option === 'Todas') {
      this.subscriptions = this.allSubscriptions;
    } else {
      this.subscriptions = this.allSubscriptions.filter(subscription => {
        return subscription.activated!.includes(option);
      });
    }
  }

  toGasto() {
    this.router.navigate(['../gastos/new'],
    { queryParams: { data:this.gastoType } })
  }

}
