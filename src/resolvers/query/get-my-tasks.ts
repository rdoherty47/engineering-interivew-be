import { mapDbTaskToViewTask } from "../../dataMappers/map-db-task-to-view-task.js"
import { Task } from "../../db/entities/task.entity.js"

export async function getMyTasks(_, __, contextValue) {
    const user = contextValue.user

    const dbTasks: Task[] = await contextValue.dataSources.taskDataSource.getTasksForUser(user)

    return dbTasks.map(mapDbTaskToViewTask)
}