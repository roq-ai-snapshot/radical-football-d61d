import { PlayerInterface } from 'interfaces/player';
import { GoalInterface } from 'interfaces/goal';
import { GetQueryInterface } from 'interfaces';

export interface PlayerGoalInterface {
  id?: string;
  player_id: string;
  goal_id: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;

  player?: PlayerInterface;
  goal?: GoalInterface;
  _count?: {};
}

export interface PlayerGoalGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    player_id?: string;
    goal_id?: string;
    status?: string;
  };
}
