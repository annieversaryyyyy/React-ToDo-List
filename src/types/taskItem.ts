export interface TaskItem {
  task: string;
  id: string;
  completed: boolean;
}

export interface TaskProps {
  task: TaskItem[];
  onDelete: (id: string) => void;
  toggleTask: (id: string) => void;
}

export type FilterType = "all" | "completed" | "active";

export interface ButtonFormProps {
  onFilterChange: (filter: FilterType) => void;
  activeFilter: FilterType;
}

export interface AddTaskFormProps {
  onAdd: (e: React.FormEvent<HTMLFormElement>) => void;
  task: string;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
