import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gasto } from 'src/app/interfaces/gasto';
import { StreamingService } from 'src/app/services/streaming.service';

import { Streaming } from '../../../interfaces/streaming';
import { GastoService } from '../../../services/gasto.service';

@Component({
  selector: 'app-new-gasto',
  templateUrl: './new-gasto.component.html',
  styleUrls: ['./new-gasto.component.scss']
})
export class NewGastoComponent implements OnInit {
  matTitle: string = 'Adicionar gasto';
  fontIcon: string = 'add';
  usuarioId!: string;

  constructor(
    private router: Router,
    private gastoService: GastoService,
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
  }

  createHandler(gasto: Gasto) {
    gasto.usuario = {
      id: +this.usuarioId,
      nome: "",
      senha: "",
      email: "",
    }

    if (gasto.formaPagamento === 'Assinatura') {
      const subs: Streaming = gasto;
      const date = new Date().toLocaleDateString('pt-BR');
      subs.ativado = 'Ativa';
      subs.series = [];
      subs.filmes = [];
      subs.ultimoAcesso = date;
      subs.ultimaAtualizacao = date;

      this.subsService.createStreaming(subs).subscribe(() => {
        this.router.navigate(['assinaturas']);
      })

    } else {
      this.gastoService.createGasto(gasto).subscribe(() => {
        this.router.navigate(['gastos']);
      });
    }
  }
}
