import {Item} from './item';
import {User} from '../../users/types/user';

export interface Review {
  id?: number;
  stars: number;
  title: string;
  descriptionReview?: string;
  reviewer: User
  itemReviewed: Item;
}

export declare type Reviews = Review[];
