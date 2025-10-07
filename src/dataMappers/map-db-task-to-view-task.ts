import { Task as DbTask } from "../db/entities/task.entity.js";
import { Status, Task as ViewTask } from "../models/view/task.js";

export function mapDbTaskToViewTask(dbTask: DbTask): ViewTask {
    return {
        id: dbTask.id,
        userId: dbTask.userId,
        title: dbTask.title,
        description: dbTask.description,
        status: mapDbStatusToViewStatus(dbTask.status),
        createdAt: dbTask.createdAt,
        modifiedAt: dbTask.modifiedAt,
        createdBy: dbTask.createdBy,
        modifiedBy: dbTask.modifiedBy
    }
}

function mapDbStatusToViewStatus(dbStatus: string): Status {
    if (dbStatus === 'to_do') {
        return Status.TO_DO
    } else if (dbStatus == 'in_progress') {
        return Status.IN_PROGRESS
    } else if (dbStatus == 'archived') {
        return Status.ARCHIVED
    } else if (dbStatus == 'done') {
        return Status.DONE
    } else {
        // This is an unsafe action, generally. Ideally, log and perhaps 
        // flag on the backend (via monitor?), but don't fail to the calling user.
        return Status.TO_DO
    }
}