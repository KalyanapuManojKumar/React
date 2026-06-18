export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskState {
  tasks: Task[];
}

export type TaskAction =
  | {
      type: "ADD_TASK";
      payload: string;
    }
  | {
      type: "DELETE_TASK";
      payload: number;
    }
  | {
      type: "TOGGLE_TASK";
      payload: number;
    };
