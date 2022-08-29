// process
export enum ProcessStatus {
  "idle" = "idle",
  "pending" = "pending",
  "failed" = "failed",
}
export type ProcessError = string | null;

// repo
export type RepoData = string[];
export interface RepoState {
  loading: ProcessStatus;
  error: ProcessError;
  data: RepoData;
  searchText: string;
}
