import {Address} from './address';

export interface User {
  id?: number;
  firstname: string;
  lastname: string;
  birthdate: Date;
  email: string;
  gender: string;
  administrator: boolean;
  address?: Address;
  token?: string;
}

export declare type Users = User[];
