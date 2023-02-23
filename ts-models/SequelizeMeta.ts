import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface SequelizeMetaAttributes {
    name: string;
}

@Table({
	tableName: "SequelizeMeta",
	schema: "public",
	timestamps: false 
})
export class SequelizeMeta extends Model<SequelizeMetaAttributes, SequelizeMetaAttributes> implements SequelizeMetaAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	name!: string;

}