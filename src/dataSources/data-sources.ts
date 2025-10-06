import { DataSource } from "typeorm"
import { TaskDataSource } from "./task-data-source.js"

export const dataSources = async (dbConnection: DataSource) => {
    return {
        taskDataSource: new TaskDataSource(dbConnection)
    }
}