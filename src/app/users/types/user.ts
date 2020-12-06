import {Address} from './address';

export interface User {
  id?: number;
  firstname: string;
  lastname: string;
  birthdate: Date;
  email: string;
  gender: string;
  administrator: boolean;
  address: Address;
}

export declare type Users = User[];
