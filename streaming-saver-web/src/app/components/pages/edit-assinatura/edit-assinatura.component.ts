import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionService } from 'src/app/services/subscription.service';

import { Assinatura } from '../../../interfaces/assinatura';

@Component({
  selector: 'app-edit-assinatura',
  templateUrl: './edit-assinatura.component.html',
  styleUrls: ['./edit-assinatura.component.scss']
})
export class EditAssinaturaComponent implements OnInit {
  assinatura!: Assinatura;

  constructor(
    private actRoute: ActivatedRoute,
    private subsService: SubscriptionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.actRoute.snapshot.paramMap.get('id'));
    this.subsService.getSubscription(id).subscribe(item => {
      this.assinatura = item;
    })
  }

  editHandler(subs: any) {
    const data = new Date().toLocaleDateString('pt-BR');
    subs.lastAccess = data;
    subs.lastUpdate = data;
    subs.series = this.assinatura.series;
    subs.movies = this.assinatura.filmes;

    this.subsService.updateSubscription(subs.id, subs).subscribe(() => {
      this.router.navigate(['assinaturas']);
    });
  }

}
