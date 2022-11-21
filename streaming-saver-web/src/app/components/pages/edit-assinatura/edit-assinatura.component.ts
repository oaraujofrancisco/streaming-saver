import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StreamingService } from 'src/app/services/streaming.service';

import { Streaming } from '../../../interfaces/streaming';

@Component({
  selector: 'app-edit-assinatura',
  templateUrl: './edit-assinatura.component.html',
  styleUrls: ['./edit-assinatura.component.scss']
})
export class EditAssinaturaComponent implements OnInit {
  assinatura!: Streaming;

  constructor(
    private actRoute: ActivatedRoute,
    private subsService: StreamingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.actRoute.snapshot.paramMap.get('id'));
    this.subsService.getStreaming(id).subscribe(item => {
      this.assinatura = item;
    })
  }

  editHandler(subs: any) {
    const data = new Date().toLocaleDateString('pt-BR');
    subs.lastAccess = data;
    subs.lastUpdate = data;
    subs.series = this.assinatura.series;
    subs.movies = this.assinatura.filmes;

    this.subsService.updateAssinatura(subs.id, subs).subscribe(() => {
      this.router.navigate(['assinaturas']);
    });
  }

}
