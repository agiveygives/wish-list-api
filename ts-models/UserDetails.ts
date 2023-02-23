import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface UserDetailsAttributes {
    id: string;
    userId?: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: Date;
    username?: string;
    email?: string;
    validAt?: Date;
    invalidAt?: Date;
}

@Table({
	tableName: "UserDetails",
	schema: "public",
	timestamps: false 
})
export class UserDetails extends Model<UserDetailsAttributes, UserDetailsAttributes> implements UserDetailsAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.UUID 
    })
    	id!: string;

    @Column({
    	allowNull: true,
    	type: DataType.UUID 
    })
    	userId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	firstName?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	lastName?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE 
    })
    	dateOfBirth?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	username?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	email?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("'2023-02-13 05:55:07.298+00'::timestamp with time zone") 
    })
    	validAt?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE 
    })
    	invalidAt?: Date;

}