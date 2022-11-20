import { SerieOrMovie } from './SerieOrMovie';

import { Gasto } from 'src/app/interfaces/Gasto';

export interface Subscription extends Gasto {
  lastAccess?: string;
  lastUpdate?: string;
  series?: SerieOrMovie[];
  movies?: SerieOrMovie[];
  activated?: string;
}
