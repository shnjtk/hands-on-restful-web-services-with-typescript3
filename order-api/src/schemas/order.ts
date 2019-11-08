import { Document, Model, model, Schema } from 'mongoose';
import { default as Order } from '../models/order';
import { OrderStatus } from '../models/orderStatus';

export interface OrderModel extends Order, Document {}

export const OrderSchema: Schema = new Schema({
  complete: Boolean,
  quantity: Number,
  shipDate: Date,
  status: { type: String, enum: ['PLACED', 'APPROVED', 'DELIVERED'] },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
});

export const OrderModel: Model<OrderModel> = model<OrderModel>(
  'Order',
  OrderSchema
);
