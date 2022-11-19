import { Subscription } from './Subscription';
import { Gasto } from 'src/app/interfaces/Gasto';
export interface User {
  id?: number;
  name: string;
  password: string;
  email: string;
  userSubscription: Subscription[];
  userGastos: Gasto[];
}
