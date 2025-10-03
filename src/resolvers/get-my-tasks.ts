import { DateTime } from "luxon";

export async function getMyTasks(parent, args, contextValue, info) {
    const tasks = [{
        userId: "13db7ed6-2259-4285-b7c7-7209bac6a798",
        title: "title",
        description: "description",
        status: "to_do",
        createdAt: DateTime.now(),
        modifiedAt: DateTime.now(),
        createdBy: "2cd603fc-56ee-4ba7-a776-6be8e5fcf0fb",
        modifiedBy: "c790b1fb-879b-421f-8817-bd634fb427f8"
    }]

    return tasks
}