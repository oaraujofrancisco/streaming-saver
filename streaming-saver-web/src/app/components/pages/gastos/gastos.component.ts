import { SubscriptionService } from 'src/app/services/subscription.service';
import { GastoService } from './../../../services/gasto.service';
import { Component, OnInit } from '@angular/core';
import { Gasto } from 'src/app/interfaces/Gasto';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent implements OnInit {

  displayedColumns: string[] = [
    'name', 'total', 'payment_type', 'spent_type', 'portion', 'actions'
  ];

  gastoTotal: number = 0;

  filterModel: string = 'Todos';

  spending: Gasto[] = [];

  allSpending: Gasto[] = [];

  constructor(
    private gastoService: GastoService,
    private subsService: SubscriptionService
    ) { }

  ngOnInit(): void {
    this.getGastos();

  }

  applyFilter() {
    const option = this.filterModel;

    if (option === 'Todos') {
      this.spending = this.allSpending;
    } else {
      this.spending = this.allSpending.filter(spending => {
        return spending.type.includes(option);
      });
    }

    this.calcTotal();
  }

  calcTotal() {
    this.gastoTotal = 0;

    this.spending.forEach(item => {
      this.gastoTotal += item.value/item.portion;
    });
  }

  async getGastos() {
    let allGastos: Gasto[];
    await this.gastoService.getGastos().subscribe(gastos => {
      allGastos = gastos;

      this.subsService.getSubscriptions().subscribe(subs => {
        allGastos.push.apply(allGastos, subs);

        allGastos.map(item => {
          item.portion_value = item.value/item.portion;
        });

        this.allSpending = allGastos;
        this.spending = allGastos;
        this.calcTotal();
      })
    })
  }

  deleteGasto(id: number, type: string) {
    if (type === 'Assinatura') {
      this.subsService.deleteSubscription(id).subscribe();
    } else {
      this.gastoService.deleteGasto(id).subscribe();
    }

    this.allSpending = this.allSpending.filter(item => {
      return item.id !== id;
    });
    this.spending = this.spending.filter(item => {
      return item.id !== id;
    });
    this.calcTotal();
  }

}
