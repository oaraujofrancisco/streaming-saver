import { Movie } from './Movie';
import { Serie } from './Serie';
import { Gasto } from 'src/app/interfaces/Gasto';

export interface Subscription extends Gasto {
  lastAccess?: string;
  lastUpdate?: string;
  series?: Serie[];
  movies?: Movie[];
  activated?: string;
}
