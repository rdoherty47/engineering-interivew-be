import { DataSource, Repository } from "typeorm";
import { Task } from "../db/entities/task.entity.js";
import { Status } from "../models/view/task.js";
import { GraphQLError } from "graphql";

export class TaskDataSource {
  private repository: Repository<Task>

  constructor(dbConnection: DataSource) {
    this.repository = dbConnection.getRepository(Task)
  }

  async getTasksForUser(userId: string): Promise<Task[]> {
    return this.repository.find({
        where: {
            userId
        },
        order: {
            modifiedAt: 'DESC'
        }
    })
  }

  async createTaskForUser(
    userId: string,
    title: string,
    description: string,
    creator: string
  ): Promise<Task> {
    return await this.repository.save({
        userId,
        status: Status.TO_DO, // default for all new tasks
        title,
        description,
        createdBy: creator,
        modifiedBy: creator,
    })
  }

  async updateTaskStatus(
    taskId: string,
    status: Status,
    modifier: string
  ): Promise<Task> {
    const task = await this.repository.findOneBy({id: taskId})

    if (!task) {
        throw new GraphQLError(`Task ID ${taskId} was not found!`)
    }

    task.status = status
    task.modifiedBy = modifier    
    return await this.repository.save(task)
  }
}