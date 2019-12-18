export interface KeysCardInterface {
  objectType: number;
  header: string;
  subHeader: string;
  cells: Cell[];
}

interface Cell {
  fieldValue: string;
  subscription: string;
}
