import { createTask } from "./mutation/create-task.js";
import { updateTaskStatus } from "./mutation/update-task-status.js";
import { getMyTasks } from "./query/get-my-tasks.js";

export const resolvers = {
    Query: {
        getMyTasks,
    },
    Mutation: {
        createTask,
        updateTaskStatus
    }
}