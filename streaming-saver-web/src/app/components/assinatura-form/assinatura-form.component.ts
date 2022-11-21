import { Streaming } from '../../interfaces/streaming';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Gasto } from 'src/app/interfaces/gasto';


@Component({
  selector: 'app-assinatura-form',
  templateUrl: './assinatura-form.component.html',
  styleUrls: ['./assinatura-form.component.scss']
})
export class AssinaturaFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Gasto>();
  @Input() subsData: Streaming | null = null;

  gasto: string = 'Fixo';
  gastoForm!: FormGroup;
  subscription!: string;
  categories: string[] = [ 'Moradia', 'Assinatura', 'Alimentação', 'Lazer', 'Outros'];

  constructor(
    private formBuilder: FormBuilder,
    private actRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actRouter.queryParams.subscribe((gastoType: any) => {
      this.subscription = gastoType.data;
    });

    this.gastoForm = this.formBuilder.group({

      id: [this.subsData ? this.subsData.id : '', [

      ]],
      nome: [this.subsData ? this.subsData.nome : '', [
        Validators.required
      ]],
      valor: [this.subsData ? this.subsData.valor : '' , [
        Validators.required
      ]],
      formaPagamento: [this.subsData ? this.subsData.formaPagamento : this.subscription, [
        Validators.required
      ]],
      tipoGasto: [this.subsData ? this.subsData.tipoGasto : '', [
        Validators.required
      ]],
      parcelaAtual: [this.subsData ? this.subsData.parcelaAtual : 1 , [
        Validators.required
      ]],
      tipo: [this.subsData ? this.subsData.tipo : this.gasto, [
        Validators.required
      ]],
      ativado: [this.subsData ? this.subsData.ativado : '', [
        Validators.required
      ]]
    });
  }

  get id() {
    return this.gastoForm.get('id');
  }

  get nome() {
    return this.gastoForm.get('nome');
  }

  get valor() {
    return this.gastoForm.get('valor');
  }

  get formaPagamento() {
    return this.gastoForm.get('formaPagamento');
  }

  get tipoGasto() {
    return this.gastoForm.get('tipoGasto');
  }

  get parcelasTotal() {
    return this.gastoForm.get('parcelasTotal');
  }

  get tipo() {
    return this.gastoForm.get('tipo');
  }

  get ativado() {
    return this.gastoForm.get('ativado');
  }

  applyFilter(event: any) {
    this.gasto = event.value;
  }

  submit() {
    if (this.gastoForm.invalid) {
      return;
    }
    this.onSubmit.emit(this.gastoForm.value);
  }
}
