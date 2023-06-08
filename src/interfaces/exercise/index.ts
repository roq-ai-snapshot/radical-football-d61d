import { PlayerExerciseInterface } from 'interfaces/player-exercise';
import { GetQueryInterface } from 'interfaces';

export interface ExerciseInterface {
  id?: string;
  name: string;
  description?: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;
  player_exercise?: PlayerExerciseInterface[];

  _count?: {
    player_exercise?: number;
  };
}

export interface ExerciseGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    name?: string;
    description?: string;
    status?: string;
  };
}
