import { SerieOuFilme } from './serie-ou-filme';

import { Gasto } from 'src/app/interfaces/gasto';

export interface Streaming extends Gasto {
  ultimoAcesso?: Date;
  ultimaAtualizacao?: Date;
  series?: SerieOuFilme[];
  filmes?: SerieOuFilme[];
  ativado?: boolean;
}
