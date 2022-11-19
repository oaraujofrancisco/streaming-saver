import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription.service';

import { Subscription } from '../../../interfaces/Subscription';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiExternaService} from "../../../services/api-externa.service";

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

  searchForm!: FormGroup;
  filmesSeriesEncontrados!: any;

  constructor(
    private subscriptionService: SubscriptionService,
    private router: Router,
    private formBuilder: FormBuilder,
    private apiExternaService: ApiExternaService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
      ]],
      type: ['', [
        Validators.required,
      ]]
    })

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

  procurarFilmeSerie() {

    if(this.searchForm.valid) {
      const name = this.searchForm.value?.name;
      const type = this.searchForm.value?.type;

      this.apiExternaService.getFilme(name, type).subscribe(valorRetornado => {
        this.filmesSeriesEncontrados = valorRetornado;

        console.log(this.filmesSeriesEncontrados);
      })
    }
  }
}
