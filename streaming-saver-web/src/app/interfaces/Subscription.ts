import { Gasto } from 'src/app/interfaces/Gasto';

export interface Subscription extends Gasto {
  last_access?: Date;
  last_Update?: Date;
  watching?: string;
  activated: string;
}
