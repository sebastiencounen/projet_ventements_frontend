export interface Category {
  id?: number;
  title: string;
  subCategories?: Categories;
}

export declare type Categories = Category[];
