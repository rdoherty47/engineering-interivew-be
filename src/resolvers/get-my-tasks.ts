export async function getMyTasks(_, __, contextValue) {
    const user = contextValue.user

    return contextValue.dataSources.taskDataSource.getTasksForUser(user)
}