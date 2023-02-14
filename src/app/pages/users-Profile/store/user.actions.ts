import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../models/userprofile.model';

export const loadUsers = createAction(
  '[User] Load Users',
  props<{ page: number; per_page: number; }>()
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: UserProfile[], totalUsers: number; }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
