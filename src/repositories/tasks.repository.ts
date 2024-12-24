import { Task } from "../entities/task";

export let tasks: Task[] = [];

export class TasksRepository {
  getAll = () => {
    return tasks;
  };

  create = (title: string) => {
    const task = new Task({ title });
    tasks.push(task);

    return task;
  };

  update = (id: number, input: Partial<Task>) => {
    const task = tasks.find((task) => task.id === id);

    if (!task) {
      return null;
    }

    Object.assign(task, input);

    return task;
  };

  delete = (id: number) => {
    const index = tasks.findIndex((task) => task.id === id);

    if (index === -1) {
      return null;
    }

    return tasks.splice(index, 1)[0];
  };
}
