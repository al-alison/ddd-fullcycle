import {OrderItemModel} from "../../../../../internal";
import { BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript'
import CustomerModel from '../../../../customer/sequelize/model/customer.model';

@Table({
    tableName: "orders",
    timestamps: false
})
export default class OrderModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;

    @ForeignKey(() => CustomerModel)
    @Column({ allowNull: false })
    declare customerId: string;

    @BelongsTo(() => CustomerModel)
    declare customer: CustomerModel;

    @Column({ allowNull: false })
    declare total: number;

    @HasMany(() => OrderItemModel, {foreignKey: "orderId", sourceKey: "id"})
    declare items: OrderItemModel[]
}