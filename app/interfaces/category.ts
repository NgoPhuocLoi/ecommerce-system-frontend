export interface Attribute {
  id: number;
  name: string;
  values: {
    id: number;
    name: string;
  }[];
}

export interface Category {
  id: number;
  name: string;
  parentId: number | null;
  hasChild: boolean;
  recommendAttributes: Attribute[];
}
