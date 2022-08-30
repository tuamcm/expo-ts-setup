import { ProcessError, ProcessStatus } from "app/common/types";

export const repoReducerName = "REPO";

export type RepoDataType = string[];

export interface RepoInterface {
  loading: ProcessStatus;
  error: ProcessError;
  data: RepoDataType;
  searchText: string;
}
