import { Subscription } from './../../interfaces/Subscription';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Gasto } from 'src/app/interfaces/Gasto';


@Component({
  selector: 'app-assinatura-form',
  templateUrl: './assinatura-form.component.html',
  styleUrls: ['./assinatura-form.component.scss']
})
export class AssinaturaFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Gasto>();
  @Input() subsData: Subscription | null = null;

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
      name: [this.subsData ? this.subsData.name : '', [
        Validators.required
      ]],
      value: [this.subsData ? this.subsData.value : '' , [
        Validators.required
      ]],
      spent_type: [this.subsData ? this.subsData.spent_type : this.subscription, [
        Validators.required
      ]],
      payment_type: [this.subsData ? this.subsData.payment_type : '', [
        Validators.required
      ]],
      portion: [this.subsData ? this.subsData.portion : 1 , [
        Validators.required
      ]],
      type: [this.subsData ? this.subsData.type : this.gasto, [
        Validators.required
      ]],
      activated: [this.subsData ? this.subsData.activated : '', [
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
