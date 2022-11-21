import { SerieOuFilme } from './serie-ou-filme';

import { Gasto } from 'src/app/interfaces/gasto';

export interface Streaming extends Gasto {
  ultimoAcesso?: string;
  ultimaAtualizacao?: string;
  series?: SerieOuFilme[];
  filmes?: SerieOuFilme[];
  ativado?: string;
}
