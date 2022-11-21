import {Usuario} from "./usuario";

export interface Gasto {
  id?: number;
  nome: string;
  valor: number;
  tipoGasto: string;
  formaPagamento: string;
  usuario: Usuario;
  parcelaAtual: number;
  portion_value?: number;
  type: string;
}
