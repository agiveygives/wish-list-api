import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface UsersAttributes {
    id: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "Users",
	schema: "public",
	timestamps: false 
})
export class Users extends Model<UsersAttributes, UsersAttributes> implements UsersAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.UUID 
    })
    	id!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE 
    })
    	createdAt?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE 
    })
    	updatedAt?: Date;

}