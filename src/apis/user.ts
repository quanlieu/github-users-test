import http from './http-common';
import IUser from '../types/user';

export const getSingleUser = (user = '') => {
  return http.get<IUser>(`/users/${user}`);
};
