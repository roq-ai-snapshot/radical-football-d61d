import * as yup from 'yup';

export const parentValidationSchema = yup.object().shape({
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  player_id: yup.string().nullable().required(),
});
