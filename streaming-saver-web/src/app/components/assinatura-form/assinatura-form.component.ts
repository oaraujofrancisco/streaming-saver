import { Assinatura } from '../../interfaces/assinatura';
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
  @Input() subsData: Assinatura | null = null;

  gasto: string = 'Fixo';
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

      id: [this.subsData ? this.subsData.id : '', [

      ]],
      name: [this.subsData ? this.subsData.nome : '', [
        Validators.required
      ]],
      value: [this.subsData ? this.subsData.valor : '' , [
        Validators.required
      ]],
      spent_type: [this.subsData ? this.subsData.formaPagamento : this.subscription, [
        Validators.required
      ]],
      payment_type: [this.subsData ? this.subsData.tipoGasto : '', [
        Validators.required
      ]],
      portion: [this.subsData ? this.subsData.parcelaAtual : 1 , [
        Validators.required
      ]],
      type: [this.subsData ? this.subsData.type : this.gasto, [
        Validators.required
      ]],
      activated: [this.subsData ? this.subsData.ativado : '', [
        Validators.required
      ]]
    });
  }

  get id() {
    return this.gastoForm.get('id');
  }

  get name() {
    return this.gastoForm.get('name');
  }

  get value() {
    return this.gastoForm.get('value');
  }

  get spent_type() {
    return this.gastoForm.get('spent_type');
  }

  get payment_type() {
    return this.gastoForm.get('payment_type');
  }

  get portion() {
    return this.gastoForm.get('portion');
  }

  get type() {
    return this.gastoForm.get('type');
  }

  get activated() {
    return this.gastoForm.get('activated');
  }

  applyFilter(event: any) {
    this.gasto = event.value;
    console.log(this.subsData);
  }

  submit() {
    if (this.gastoForm.invalid) {
      return;
    }
    console.log(this.gastoForm.value);
    this.onSubmit.emit(this.gastoForm.value);
  }
}
