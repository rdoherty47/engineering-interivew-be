import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from "typeorm"

@Entity()
export class Task {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Index()
    @Column({ type: "varchar", name: "user_id" })
    userId: string

    @Column({ type: "varchar" })
    status: string

    @Column({ type: "varchar" })
    title: string

    @Column({ type: "varchar" })
    description: string

    @Column({ type: "varchar", name: "created_by" })
    createdBy: string

    @Column({ type: "varchar", name: "modified_by" })
    modifiedBy: string

    @CreateDateColumn({ type: "varchar", name: "created_at" })
    createdAt: string

    @UpdateDateColumn({ type: "varchar", name: "modified_at" })
    modifiedAt: string
}