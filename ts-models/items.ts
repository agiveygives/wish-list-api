import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface itemsAttributes {
    id: string;
    userId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "items",
	schema: "public",
	timestamps: false 
})
export class items extends Model<itemsAttributes, itemsAttributes> implements itemsAttributes {

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