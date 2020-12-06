export interface User {
  id?: number;
  firstname: string;
  lastname: string;
  birthdate: Date;
  email: string;
  gender: string;
  administrator: boolean;
  addressId?: number;
}

export declare type Users = User[];
