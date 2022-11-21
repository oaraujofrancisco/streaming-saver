import { Assinatura } from './assinatura';
import { Gasto } from 'src/app/interfaces/gasto';
export interface Usuario {
  id?: number;
  nome: string;
  senha: string;
  email: string;
  streamingAssinados?: Assinatura[];
  gastosUsuario?: Gasto[];
}
