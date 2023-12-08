// src/collection/collection.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class Category extends Document {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  theme_image: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String, enum: ['Active', 'Inactive'], default: 'Active' })
  status: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  createdBy: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  updatedBy: MongooseSchema.Types.ObjectId;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
