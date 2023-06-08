import * as yup from 'yup';

export const playerGoalValidationSchema = yup.object().shape({
  status: yup.string().required(),
  player_id: yup.string().nullable().required(),
  goal_id: yup.string().nullable().required(),
});
