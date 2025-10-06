import { mapDbTaskToViewTask } from "../../dataMappers/map-db-task-to-view-task.js"
import { Status } from "../../models/view/task.js"

type CreateTaskInputArgs = {
    title: string
    description: string
}

export async function createTask(_, args: CreateTaskInputArgs, contextValue) {
    const user = contextValue.user

    const dbTask = await contextValue.dataSources.taskDataSource.createTaskForUser(
        user,
        args.title,
        args.description,
        user // for now, the calling user is always the creator
    )

    return mapDbTaskToViewTask(dbTask)
}