import express from "express";
import { tasksRoutes } from "./routes/tasks";

const app = express();

app.use(express.json());

app.use("/tasks", tasksRoutes);

// app.use("*", (req, res) => {
//   res.status(404).json({
//     message: "Route not found",
//   });
// });

// app.use(
//   (
//     err: any,
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction
//   ) => {
//     console.error(err.stack);
//     res.status(500).send("Something broke!");
//   }
// );

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
