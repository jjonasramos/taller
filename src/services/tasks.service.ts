import { Task } from "../entities/task";
import { ErrorResponse } from "../interfaces/error";
import { CreateUserDto, UpdateUserDto } from "../interfaces/tasks";
import { TasksRepository } from "../repositories/tasks.repository";

export class TasksService {
  private tasksRepo: TasksRepository;

  constructor(tasksRepo: TasksRepository) {
    this.tasksRepo = tasksRepo;
  }

  create = (input: CreateUserDto): Task | ErrorResponse => {
    const createdTask = this.tasksRepo.create(input.title);

    if (!createdTask) {
      return {
        error: true,
        message: "Something went wrong",
      };
    }

    return createdTask;
  };

  getAll = (): Task[] => {
    return this.tasksRepo.getAll();
  };

  update = (id: number, input: UpdateUserDto): Task | ErrorResponse => {
    const updatedTask = this.tasksRepo.update(id, input);

    if (!updatedTask) {
      return {
        error: true,
        message: "Task not found",
      };
    }

    return updatedTask;
  };

  delete = (id: number): void | ErrorResponse => {
    const deletedTask = this.tasksRepo.delete(id);

    if (!deletedTask) {
      return {
        error: true,
        message: "Something went wrong",
      };
    }
  };
}
