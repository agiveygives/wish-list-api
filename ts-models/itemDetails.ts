import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface itemDetailsAttributes {
    id: string;
    itemId?: string;
    name?: string;
    description?: string;
    price?: string;
    url?: string;
    validAt?: Date;
    invalidAt?: Date;
}

@Table({
	tableName: "itemDetails",
	schema: "public",
	timestamps: false 
})
export class itemDetails extends Model<itemDetailsAttributes, itemDetailsAttributes> implements itemDetailsAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.UUID 
    })
    	id!: string;

    @Column({
    	allowNull: true,
    	type: DataType.UUID 
    })
    	itemId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	name?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	description?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DECIMAL(10,2) 
    })
    	price?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	url?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: Sequelize.literal("'2023-02-17 03:55:16.599+00'::timestamp with time zone") 
    })
    	validAt?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE 
    })
    	invalidAt?: Date;

}