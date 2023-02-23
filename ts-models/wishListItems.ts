import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface wishListItemsAttributes {
    id: string;
    wishListId?: string;
    itemId?: string;
    purchased?: boolean;
    purchasedByUserId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

@Table({
	tableName: "wishListItems",
	schema: "public",
	timestamps: false 
})
export class wishListItems extends Model<wishListItemsAttributes, wishListItemsAttributes> implements wishListItemsAttributes {

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
    	type: DataType.UUID 
    })
    	itemId?: string;

    @Column({
    	allowNull: true,
    	type: DataType.BOOLEAN,
    	defaultValue: Sequelize.literal("false") 
    })
    	purchased?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.UUID 
    })
    	purchasedByUserId?: string;

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