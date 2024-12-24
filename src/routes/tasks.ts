import express from "express";
import { TasksRepository } from "../repositories/tasks.repository";
import { TasksService } from "../services/tasks.service";

const tasksRoutes = express.Router();
const tasksRepository = new TasksRepository();
const tasksService = new TasksService(tasksRepository);

tasksRoutes.get("/", (req, res) => {
  const allTasks = tasksService.getAll();

  res.json({
    data: allTasks,
  });
});

tasksRoutes.post("/", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Task title is required",
    });
  }

  const createdTask = tasksService.create({ title });

  res.status(201).json({
    data: createdTask,
  });
});

tasksRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!id) {
    return res.status(400).json({
      message: "Task ID is required",
    });
  } else if (!title) {
    return res.status(400).json({
      message: "Task title is required",
    });
  }

  const updatedTask = tasksService.update(Number(id), { title });

  if (updatedTask.error) {
    return res.status(400).json({
      message: updatedTask.message,
    });
  }

  res.json({
    data: updatedTask,
  });
});

tasksRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "Task ID is required",
    });
  }

  const deletedTask = tasksService.delete(Number(id));

  if (deletedTask?.error) {
    return res.status(400).json({
      message: deletedTask.message,
    });
  }

  res.sendStatus(204);
});

export { tasksRoutes };
