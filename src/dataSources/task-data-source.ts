import { DateTime } from "luxon";
import { DataSource, Repository } from "typeorm";
import { Task } from "../db/entities/task.entity.js";

export class TaskDataSource {
  private repository: Repository<Task>

  constructor(dbConnection: DataSource) {
    this.repository = dbConnection.getRepository(Task)
  }

  async getTasksForUser(userId: string) {
    return this.repository.find({
        where: {
            userId
        },
        order: {
            modifiedAt: 'DESC'
        }
    })
  }
}