import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Categories {
  MATH = 'Math',
  SPACE = 'Space',
}

@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  category: Categories;
};

export const BookSchema = SchemaFactory.createForClass(Book);