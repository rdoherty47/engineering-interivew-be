export type Task = {
    id: string
    userId: string
    status: Status
    title: string
    description: string
    createdBy: string
    modifiedBy: string
    createdAt: string
    modifiedAt: string
}

export enum Status {
    TO_DO = 'to_do',
    IN_PROGRESS = 'in_progress',
    DONE = 'done',
    ARCHIVED = 'archived'
}