import { ProcessStatus, ProcessError } from "app/common/types";

export const authReducerName = "AUTH";

export type AuthDataType = string[];

export interface AuthInterface {
  loading: ProcessStatus;
  error: ProcessError;
  data: AuthDataType;
  isLogged: boolean;
}
