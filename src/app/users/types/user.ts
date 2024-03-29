import {Address} from './address';

export interface User {
  id?: number;
  firstname?: string;
  lastname?: string;
  birthdate?: Date;
  email?: string;
  passwordUser?: string;
  gender?: string;
  administrator?: boolean;
  userAddress?: Address;
  token?: string;
}

export declare type Users = User[];
