export interface KeysCardInterface {
  objectType: number;
  header: string;
  subHeader: string;
  cells: Cell[];
  image?: string;
}

interface Cell {
  fieldValue: string;
  subscription: string;
}
