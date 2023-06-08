import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface CoachInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;

  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {};
}

export interface CoachGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    user_id?: string;
    academy_id?: string;
    status?: string;
  };
}
