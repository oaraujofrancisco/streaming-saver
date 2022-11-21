import { GastoService } from '../../../services/gasto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gasto } from 'src/app/interfaces/gasto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-gasto',
  templateUrl: './edit-gasto.component.html',
  styleUrls: ['./edit-gasto.component.scss']
})
export class EditGastoComponent implements OnInit {
  matTitle: string = 'Editar gasto';
  fontIcon: string = 'edit';
  gasto!: Gasto;

  constructor(
    private actRoute: ActivatedRoute,
    private gastoService: GastoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.actRoute.snapshot.paramMap.get('id'));
    this.gastoService.getGasto(id).subscribe(item => {
      this.gasto = item;
    })
  }

  editHandler(event: any) {
    this.gastoService.updateGasto(event.id, event).subscribe(() => {
      this.router.navigate(['gastos']);
    })
  }

}
