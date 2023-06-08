import { PlayerGoalInterface } from 'interfaces/player-goal';
import { GetQueryInterface } from 'interfaces';

export interface GoalInterface {
  id?: string;
  name: string;
  description?: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;
  player_goal?: PlayerGoalInterface[];

  _count?: {
    player_goal?: number;
  };
}

export interface GoalGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    name?: string;
    description?: string;
    status?: string;
  };
}
