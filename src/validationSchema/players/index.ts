import * as yup from 'yup';
import { parentValidationSchema } from 'validationSchema/parents';
import { playerExerciseValidationSchema } from 'validationSchema/player-exercises';
import { playerGoalValidationSchema } from 'validationSchema/player-goals';

export const playerValidationSchema = yup.object().shape({
  position: yup.string().required(),
  date_of_birth: yup.date().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  parent: yup.array().of(parentValidationSchema),
  player_exercise: yup.array().of(playerExerciseValidationSchema),
  player_goal: yup.array().of(playerGoalValidationSchema),
});
