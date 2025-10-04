import "reflect-metadata"
import { DataSource } from "typeorm"
import { Task } from "./entities/task.entity.js"

export const pgConnection = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "production",
    entities: [Task],
    synchronize: true,
    logging: true,
})