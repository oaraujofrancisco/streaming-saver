import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SerieOuFilme } from 'src/app/interfaces/serie-ou-filme';
import { SubscriptionService } from 'src/app/services/subscription.service';

import { Assinatura } from '../../../interfaces/assinatura';
import { ApiExternaService } from '../../../services/api-externa.service';

@Component({
  selector: 'app-assinaturas',
  templateUrl: './assinaturas.component.html',
  styleUrls: ['./assinaturas.component.scss']
})
export class AssinaturasComponent implements OnInit {
  allSubscriptions: Assinatura[] = [];
  subscriptions: Assinatura[] = [];
  filterModel: string = 'Todas';
  gastoType: string = 'Assinatura';
  titleSubs: string = '';

  displayedColumns: string[] = ['name', 'last_access', 'watching', 'status', 'actions']

  searchForm!: FormGroup;
  filmesSeriesEncontrados!: any;

  constructor(
    private subscriptionService: SubscriptionService,
    private router: Router,
    private formBuilder: FormBuilder,
    private apiExternaService: ApiExternaService,
    private subsService: SubscriptionService
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
        return subscription.ativado!.includes(option);
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

      this.apiExternaService.getFilme(name, type).subscribe((valorRetornado: any) => {
        valorRetornado.result.forEach( (item: any) => {
          const availability: any = item.streamingInfo.br;
          if (availability) {
            item.streaming = Object.keys(availability);
          }
        });
        valorRetornado = valorRetornado.result.filter((item: any) => {
          return item.streaming;
        })
        this.filmesSeriesEncontrados = valorRetornado;
      })
    }
  }

  addTitle(title: string, type: string, titleSubs: string) {
    let id: any = null;
    this.allSubscriptions.forEach(subs => {
      const name = subs.nome.toLowerCase().trim().replace(/\s/g, "");
      if (name.includes(titleSubs)) {
        id = subs.id;
      }
    })
    if (id) {
      let data: Assinatura;
      const serieOrMovie: SerieOuFilme = {};

      this.subscriptionService.getSubscription(id)
        .subscribe(item => {
          const date = new Date().toLocaleDateString('pt-BR');
          data = item;
          data.ultimoAcesso = date;
          data.ultimaAtualizacao = date;

          serieOrMovie.nome = title;
          serieOrMovie.assistindo = true;
          if (type === 'series') {
            data.series?.unshift(serieOrMovie);
          } else {
            data.filmes?.unshift(serieOrMovie);
          }
          this.subscriptionService.updateSubscription(id, data).subscribe(() => {
            console.log('Success');
          });
        });
        this.filmesSeriesEncontrados = null;
    } else {
      console.log('Erro');
    }
  }

  deleteAssinatura(id: number) {
    this.subsService.deleteSubscription(id).subscribe();

    this.allSubscriptions = this.allSubscriptions.filter(item => {
      return item.id !== id;
    });
    this.subscriptions = this.subscriptions.filter(item => {
      return item.id !== id;
    });
  }
}
