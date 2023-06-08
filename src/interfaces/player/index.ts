import { ParentInterface } from 'interfaces/parent';
import { PlayerExerciseInterface } from 'interfaces/player-exercise';
import { PlayerGoalInterface } from 'interfaces/player-goal';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  position: string;
  date_of_birth: Date;
  status: string;
  created_at?: Date;
  updated_at?: Date;
  parent?: ParentInterface[];
  player_exercise?: PlayerExerciseInterface[];
  player_goal?: PlayerGoalInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    parent?: number;
    player_exercise?: number;
    player_goal?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    user_id?: string;
    academy_id?: string;
    position?: string;
    status?: string;
  };
}
