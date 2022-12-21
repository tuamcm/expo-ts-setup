import { ProcessError, ProcessStatus } from "app/common/types";
import { ICart } from "services/db";

export const ReducerName = "HOME";

export type DataType = number[];

export interface HomeInterface {
  loading: ProcessStatus;
  error: ProcessError;
  favorites: DataType;
  cart: ICart[];
}
