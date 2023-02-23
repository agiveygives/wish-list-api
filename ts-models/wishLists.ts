import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface wishListsAttributes {
    id: string;
    userId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "wishLists",
	schema: "public",
	timestamps: false 
})
export class wishLists extends Model<wishListsAttributes, wishListsAttributes> implements wishListsAttributes {

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
    	type: DataType.DATE 
    })
    	createdAt?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE 
    })
    	updatedAt?: Date;

}