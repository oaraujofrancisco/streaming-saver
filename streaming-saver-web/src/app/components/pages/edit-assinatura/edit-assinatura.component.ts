import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { SerieOrMovie } from 'src/app/interfaces/SerieOrMovie';

import { Subscription } from './../../../interfaces/Subscription';

@Component({
  selector: 'app-edit-assinatura',
  templateUrl: './edit-assinatura.component.html',
  styleUrls: ['./edit-assinatura.component.scss']
})
export class EditAssinaturaComponent implements OnInit {
  assinatura!: Subscription;

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
    subs.movies = this.assinatura.movies;

    this.subsService.updateSubscription(subs.id, subs).subscribe(() => {
      this.router.navigate(['assinaturas']);
    });
  }

}
