import { type User } from './user.type';
import { type SuccessResponseApi } from './util.type';

export type AuthResponse = SuccessResponseApi<{
  access_token: string;
  expires: number;
  refresh_token: string;
  expires_refresh_token: number;
  user: User;
}>;
