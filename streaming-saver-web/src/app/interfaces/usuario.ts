import { Streaming } from './streaming';
import { Gasto } from 'src/app/interfaces/gasto';
export interface Usuario {
  id: number;
  nome: string;
  senha: string;
  email: string;
  streamingAssinados?: Streaming[];
  gastosUsuario?: Gasto[];
}
