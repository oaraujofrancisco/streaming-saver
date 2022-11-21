import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gasto } from 'src/app/interfaces/gasto';
import { StreamingService } from 'src/app/services/streaming.service';

import { GastoService } from '../../../services/gasto.service';

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

  usuarioId!: string;

  constructor(
    private gastoService: GastoService,
    private subsService: StreamingService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(!localStorage.getItem('usuarioId')) {
      localStorage.removeItem('usuarioId');
      this.router.navigate(['login']);
    } else {
      // @ts-ignore
      this.usuarioId = localStorage.getItem('usuarioId');
    }

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
      this.gastoTotal += item.valor/item.parcelaAtual;
    });
  }

   getGastos() {
    let allGastos: Gasto[];
    this.gastoService.getGastos(this.usuarioId).subscribe(gastos => {
      allGastos = gastos;

      this.subsService.getStreamings(this.usuarioId).subscribe(subs => {
        allGastos.push.apply(allGastos, subs);

        allGastos.map(item => {
          item.portion_value = item.valor/item.parcelaAtual;
        });

        this.allSpending = allGastos;
        this.spending = allGastos;
        this.calcTotal();
      })
    })
  }

  deleteGasto(id: number, type: string) {
    if (type === 'Assinatura') {
      this.subsService.deleteStreaming(id).subscribe();
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

  toEdit(id: number, type: string) {
    if (type === 'Assinatura') {
      this.router.navigate([`assinaturas/edit/${id}`]);
    } else {
      this.router.navigate([`gastos/edit/${id}`]);
    }
  }

}
