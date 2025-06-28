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

export type JobModality = "remote" | "on_site" | "hybrid";

export type Job = {
  id: number;
  company: string;
  title: string;
  modality: JobModality;
  url?: string | null | undefined;
  salary?: string | null | undefined;
  description?: string | null | undefined;
  createdAt?: Date | null
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

export type CreateBoardTypes = {
  id: string;
  title: string;
  userId: string;
  slug: string
};
