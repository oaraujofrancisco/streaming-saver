import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Gasto } from 'src/app/interfaces/Gasto';

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

  nome = 'Netflix'
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
      id: [this.gastoData ? this.gastoData.id : '', [

      ]],
      name: [this.gastoData ? this.gastoData.name : '', [
        Validators.required
      ]],
      value: [this.gastoData ? this.gastoData.value : '' , [
        Validators.required
      ]],
      spent_type: [this.gastoData ? this.gastoData.spent_type : this.subscription, [
        Validators.required
      ]],
      payment_type: [this.gastoData ? this.gastoData.payment_type : '', [
        Validators.required
      ]],
      portion: [this.gastoData ? this.gastoData.portion : 1 , [
        Validators.required
      ]],
      type: [this.gastoData ? this.gastoData.type : this.gasto, [
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

  applyFilter(event: any) {
    this.gasto = event.value;
    console.log(this.gastoData);
  }

  submit() {
    if (this.gastoForm.invalid) {
      return;
    }

    this.onSubmit.emit(this.gastoForm.value);
  }
}
