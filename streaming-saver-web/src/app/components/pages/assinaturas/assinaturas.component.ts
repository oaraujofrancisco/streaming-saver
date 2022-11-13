import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription.service';

import { Subscription } from '../../../interfaces/Subscription';

@Component({
  selector: 'app-assinaturas',
  templateUrl: './assinaturas.component.html',
  styleUrls: ['./assinaturas.component.scss']
})
export class AssinaturasComponent implements OnInit {
  allSubscriptions: Subscription[] = [];
  subscriptions: Subscription[] = [];
  filterModel: string = 'Todas';

  displayedColumns: string[] = ['name', 'last_access', 'watching', 'status', 'actions']

  constructor(private subscriptionService: SubscriptionService) { }

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
        return subscription.status.includes(option);
      });
    }
  }

}
