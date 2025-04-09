import mongoose, { Schema, Document, Model } from "mongoose";

// Mongoose provides properties such as the _id in Document, we extend this
interface IItem extends Document {
  owner: number;
  title: string;
  description?: string;
  url?: string;
}

const itemSchema = new Schema<IItem>({
  owner: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
    required: false,
  },
});

const Item: Model<IItem> = mongoose.models.Item || mongoose.model<IItem>("Item", itemSchema);
export default Item;
