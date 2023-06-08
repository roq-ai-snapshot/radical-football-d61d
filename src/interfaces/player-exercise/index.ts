import { PlayerInterface } from 'interfaces/player';
import { ExerciseInterface } from 'interfaces/exercise';
import { GetQueryInterface } from 'interfaces';

export interface PlayerExerciseInterface {
  id?: string;
  player_id: string;
  exercise_id: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;

  player?: PlayerInterface;
  exercise?: ExerciseInterface;
  _count?: {};
}

export interface PlayerExerciseGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    player_id?: string;
    exercise_id?: string;
    status?: string;
  };
}
