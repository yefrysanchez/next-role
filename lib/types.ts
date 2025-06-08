export type SignInTypes = {
  email: string;
  password: string;
};

export type SignUpTypes = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type JobModality = "Remote" | "Hybrid" | "On Site";

export type Job = {
  id: number;
  company: string;
  title: string;
  modality: JobModality;
  url?: string;
  salary?: string;
  description?: string;
};

export type KanbanColumns = {
  closed: Job[];
  applied: Job[];
  interview: Job[];
  offer: Job[];
};

export type ColumnsTypes = {
  columnTitle: string;
  order: number;
  jobs: Job[];
};
