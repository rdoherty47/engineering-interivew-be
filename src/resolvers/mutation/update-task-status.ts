import { mapDbTaskToViewTask } from "../../dataMappers/map-db-task-to-view-task.js"
import { Status } from "../../models/view/task.js"

type UpdateTaskInputArgs = {
    id: string
    status: Status
}

export async function updateTaskStatus(_, args: UpdateTaskInputArgs, contextValue) {
    const user = contextValue.user

    const dbTask = await contextValue.dataSources.taskDataSource.updateTaskStatus(
        args.id,
        args.status,
        user // for now, the calling user is always the modifier
    )

    return mapDbTaskToViewTask(dbTask)
}