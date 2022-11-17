export interface Gasto {
  id?: number;
  name: string;
  value: number;
  payment_type: string;
  spent_type: string;
  portion: number;
  portion_value?: number;
  type: string;
}
