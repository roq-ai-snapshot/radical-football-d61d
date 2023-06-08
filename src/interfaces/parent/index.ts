import { UserInterface } from 'interfaces/user';
import { PlayerInterface } from 'interfaces/player';
import { GetQueryInterface } from 'interfaces';

export interface ParentInterface {
  id?: string;
  user_id: string;
  player_id: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;

  user?: UserInterface;
  player?: PlayerInterface;
  _count?: {};
}

export interface ParentGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    user_id?: string;
    player_id?: string;
    status?: string;
  };
}
