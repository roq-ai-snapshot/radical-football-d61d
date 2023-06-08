import * as yup from 'yup';
import { playerGoalValidationSchema } from 'validationSchema/player-goals';

export const goalValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  status: yup.string().required(),
  player_goal: yup.array().of(playerGoalValidationSchema),
});
