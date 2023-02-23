import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface wishListDetailsAttributes {
    id: string;
    wishListId?: string;
    title?: string;
    startDate?: Date;
    endDate?: Date;
    description?: string;
    validAt?: Date;
    invalidAt?: Date;
}

@Table({
	tableName: "wishListDetails",
	schema: "public",
	timestamps: false 
})
export class wishListDetails extends Model<wishListDetailsAttributes, wishListDetailsAttributes> implements wishListDetailsAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.UUID 
    })
    	id!: string;

    @Column({
    	allowNull: true,
    	type: DataType.UUID 
    })
    	wishListId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	title?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("'2023-02-17 03:54:31.916+00'::timestamp with time zone") 
    })
    	startDate?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE 
    })
    	endDate?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	description?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("'2023-02-17 03:54:31.916+00'::timestamp with time zone") 
    })
    	validAt?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE 
    })
    	invalidAt?: Date;

}