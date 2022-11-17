import { GastoService } from './../../../services/gasto.service';
import { Component, OnInit } from '@angular/core';
import { Gasto } from 'src/app/interfaces/Gasto';
import { Router } from '@angular/router';

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
    private gastoService: GastoService
  ) { }

  ngOnInit(): void {
  }

  async createHandler(gasto: Gasto) {
    await this.gastoService.createGasto(gasto).subscribe(() => {
      this.router.navigate(['gastos']);
    });


  }
}
