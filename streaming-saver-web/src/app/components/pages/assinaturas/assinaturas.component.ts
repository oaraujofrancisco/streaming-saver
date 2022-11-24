import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SerieOuFilme } from 'src/app/interfaces/serie-ou-filme';
import { StreamingService } from 'src/app/services/streaming.service';

import { Streaming } from '../../../interfaces/streaming';
import { ApiExternaService } from '../../../services/api-externa.service';

@Component({
  selector: 'app-assinaturas',
  templateUrl: './assinaturas.component.html',
  styleUrls: ['./assinaturas.component.scss']
})
export class AssinaturasComponent implements OnInit {
  allSubscriptions: Streaming[] = [];
  subscriptions: Streaming[] = [];
  filterModel: string = 'Todas';
  gastoType: string = 'Assinatura';
  titleSubs: string = '';

  displayedColumns: string[] = ['name', 'last_access', 'watching', 'status', 'actions']

  searchForm!: FormGroup;
  filmesSeriesEncontrados!: any;

  usuarioId!: string;

  constructor(
    private subscriptionService: StreamingService,
    private router: Router,
    private formBuilder: FormBuilder,
    private apiExternaService: ApiExternaService,
    private subsService: StreamingService
  ) { }

  ngOnInit(): void {
    if(!localStorage.getItem('usuarioId')) {
      localStorage.removeItem('usuarioId');
      this.router.navigate(['login']);
    } else {
      // @ts-ignore
      this.usuarioId = localStorage.getItem('usuarioId');
    }

    this.searchForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
      ]],
      type: ['', [
        Validators.required,
      ]]
    })

    this.subscriptionService.getStreamings(this.usuarioId)
      .subscribe(items => {
        this.subscriptions = items;
        this.allSubscriptions = items;
      })
  }

  applyFilter() {
    const option = this.filterModel;

    this.subscriptions = this.allSubscriptions;

    if (option === 'Ativa') {
      this.subscriptions = this.allSubscriptions.filter(subscription => subscription.ativado);
    }

    if (option === 'Inativa') {
      this.subscriptions = this.allSubscriptions.filter(subscription => !subscription.ativado);
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
        console.log(this.filmesSeriesEncontrados);
      })
    }
  }

  addTitle(idFilmeOuSerie: number, title: string, type: string, titleSubs: string) {
    let idSubscription: any = null;

    this.allSubscriptions.forEach(subs => {
      const name = subs.nome.toLowerCase().trim().replace(/\s/g, "");
      if (name.includes(titleSubs)) {
        idSubscription = subs.id;
      }
    })

    if (idSubscription) {
      let data: Streaming;
      const serieOrMovie: SerieOuFilme = {};

      this.subscriptionService.getStreaming(idSubscription)
        .subscribe(item => {
          data = item;

          data.ativado = true;
          serieOrMovie.id = idFilmeOuSerie;
          serieOrMovie.nome = title;
          serieOrMovie.assistindo = true;
          serieOrMovie.filmeOuSerie = type;

          this.subscriptionService.updateFilmeOuSerie(idSubscription, serieOrMovie).subscribe(() => {
            console.log('Success');
          });
        });
        this.filmesSeriesEncontrados = null;
    } else {
      console.log('Erro');
    }
  }

  deleteAssinatura(id: number) {
    this.subsService.deleteStreaming(id).subscribe();

    this.allSubscriptions = this.allSubscriptions.filter(item => {
      return item.id !== id;
    });
    this.subscriptions = this.subscriptions.filter(item => {
      return item.id !== id;
    });
  }
}
