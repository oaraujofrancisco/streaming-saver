import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Gasto } from 'src/app/interfaces/gasto';

@Component({
  selector: 'app-gasto-form',
  templateUrl: './gasto-form.component.html',
  styleUrls: ['./gasto-form.component.scss']
})
export class GastoFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Gasto>();
  @Input() fontIcon!: string;
  @Input() matTitle!: string;
  @Input() gastoData: Gasto | null = null;

  gastoForm!: FormGroup;
  subscription!: string;
  categories: string[] =
  [ 'Moradia', 'Assinatura', 'Alimentação', 'Lazer', 'Outros'];

  constructor(
    private formBuilder: FormBuilder,
    private actRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actRouter.queryParams.subscribe((gastoType: any) => {
      this.subscription = gastoType.data;
    });

    this.gastoForm = this.formBuilder.group({
      id: [this.gastoData ? this.gastoData.id : '', [

      ]],
      nome: [this.gastoData ? this.gastoData.nome : '', [
        Validators.required
      ]],
      valor: [this.gastoData ? this.gastoData.valor : '' , [
        Validators.required
      ]],
      formaPagamento: [this.gastoData ? this.gastoData.formaPagamento : this.subscription, [
        Validators.required
      ]],
      tipoGasto: [this.gastoData ? this.gastoData.tipoGasto : '', [
        Validators.required
      ]],
      parcelaAtual: [this.gastoData ? this.gastoData.parcelaAtual : 1 , [
        Validators.required
      ]],
      parcelasTotal: [this.gastoData ? this.gastoData.parcelasTotal : 0 , [
        Validators.required
      ]],
      tipo: [this.gastoData ? this.gastoData.tipo : '', [
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
